import { io } from '../start/http';
import { ConnectionsServices } from '../app/services/ConnectionsService';

io.on('connect', async socket => {
  const connectionsService = new ConnectionsServices();

  const allConnectionsWitoutAdmin = await connectionsService.findAllWithoutAdmin();

  io.emit('admin_list_all_users', allConnectionsWitoutAdmin);
});
