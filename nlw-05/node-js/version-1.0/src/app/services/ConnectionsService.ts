import { getCustomRepository, Repository } from 'typeorm';

import { ConnectionRepository } from 'app/repositories/ConnectionRepository';
import { Connection } from '../models/Connection';

interface IRequest {
  admin_id?: string;
  user_id: string;
  socket_id: string;
  id?: string;
}

class ConnectionsServices {
  private connectionRepository: Repository<Connection>;

  constructor() {
    this.connectionRepository = getCustomRepository(ConnectionRepository);
  }

  public async create({
    admin_id,
    user_id,
    socket_id,
    id,
  }: IRequest): Promise<Connection> {
    const connection = this.connectionRepository.create({
      admin_id,
      user_id,
      socket_id,
      id,
    });

    await this.connectionRepository.save(connection);

    return connection;
  }

  public async findByUserId(user_id: string): Promise<Connection> {
    const connection = await this.connectionRepository.findOne({
      user_id,
    });

    return connection;
  }

  public async findAllWithoutAdmin(): Promise<Connection[]> {
    const coonections = await this.connectionRepository.find({
      where: { admin_id: null },
      relations: ['user'],
    });

    return coonections;
  }
}

export { ConnectionsServices };
