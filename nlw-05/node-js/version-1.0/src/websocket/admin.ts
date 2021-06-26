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
});
