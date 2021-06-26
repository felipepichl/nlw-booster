import { io } from '../start/http';
import { ConnectionsServices } from '../app/services/ConnectionsService';
import { MessagesService } from '../app/services/MessagesService';

io.on('connect', async socket => {
  const connectionsService = new ConnectionsServices();
  const messagesService = new MessagesService();

  const allConnectionsWitoutAdmin = await connectionsService.findAllWithoutAdmin();

  io.emit('admin_list_all_users', allConnectionsWitoutAdmin);

  socket.on('admin_list_messages_by_user', async (params, callback) => {
    const { user_id } = params;

    const allMessages = await messagesService.listByUser(user_id);

    callback(allMessages);
  });

  socket.on('admin_send_message', async params => {
    const { text, user_id } = params;

    await messagesService.create({
      text,
      user_id,
      admin_id: socket.id,
    });

    const { socket_id } = await connectionsService.findByUserId(user_id);

    io.to(socket_id).emit('admin_send_to_client', {
      text,
      socket_id: socket.id,
    });
  });
});
