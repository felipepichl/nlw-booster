import { io } from '../start/http';
import { ConnectionsServices } from '../app/services/ConnectionsService';
import { UsersServices } from '../app/services/UsersServices';
import { MessagesService } from '../app/services/MessagesService';

interface IParams {
  text: string;
  email: string;
}

io.on('connect', socket => {
  const connectionsService = new ConnectionsServices();
  const usersService = new UsersServices();
  const messageService = new MessagesService();

  socket.on('client_first_access', async params => {
    const socket_id = socket.id;
    const { text, email } = params as IParams;
    let user_id = null;

    const userExists = await usersService.findByEmail(email);

    if (!userExists) {
      const user = await usersService.create({ email });

      await connectionsService.create({
        user_id: user.id,
        socket_id,
      });

      user_id = user.id;
    } else {
      user_id = userExists.id;

      const connection = await connectionsService.findByUserId(userExists.id);

      if (!connection) {
        await connectionsService.create({
          user_id: userExists.id,
          socket_id,
        });
      } else {
        connection.socket_id = socket_id;

        await connectionsService.create(connection);
      }
    }

    await messageService.create({
      text,
      user_id,
    });

    const allMessages = await messageService.listByUser(user_id);

    socket.emit('client_list_all_messages', allMessages);
  });

  socket.on('client_send_to_admin', async params => {
    const { text, socket_admin_id } = params;

    const socket_id = socket.id;

    const { user_id } = await connectionsService.findBySocketId(socket_id);

    const message = await messageService.create({
      text,
      user_id,
      admin_id: socket_admin_id,
    });

    io.to(socket_admin_id).emit('admin_receive_message', {
      message,
      socket_id,
    });
  });
});
