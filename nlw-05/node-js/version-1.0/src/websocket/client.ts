import { io } from '../start/http';
import { ConnectionsServices } from '../app/services/ConnectionsService';
import { UsersServices } from '../app/services/UsersServices';

io.on('connect', socket => {
  const connectionsServices = new ConnectionsServices();
  const usersService = new UsersServices();

  socket.on('client_first_access', async params => {
    const socket_id = socket.id;
    const { email } = params;

    const userExists = await usersService.findByEmail(email);

    if (!userExists) {
      const user = await usersService.create(email);

      await connectionsServices.create({
        user_id: user.id,
        socket_id,
      });
    } else {
      const connection = await connectionsServices.findByUserId(userExists.id);

      if (!connection) {
        await connectionsServices.create({
          user_id: userExists.id,
          socket_id,
        });
      } else {
        connection.socket_id = socket_id;

        await connectionsServices.create(connection);
      }
    }
  });
});
