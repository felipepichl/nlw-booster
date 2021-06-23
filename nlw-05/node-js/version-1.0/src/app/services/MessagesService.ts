import { getCustomRepository, Repository } from 'typeorm';

import { MessagesRepository } from 'app/repositories/MessageRepository';
import { Message } from '../models/Message';

interface IRequest {
  admin_id?: string;
  user_id: string;
  text: string;
}

class MessagesServices {
  private messageRepository: Repository<Message>;

  constructor() {
    this.messageRepository = getCustomRepository(MessagesRepository);
  }

  public async create({ admin_id, user_id, text }: IRequest): Promise<Message> {
    const message = this.messageRepository.create({
      admin_id,
      user_id,
      text,
    });

    await this.messageRepository.save(message);

    return message;
  }

  public async listByUser(user_id: string): Promise<Message[]> {
    const messages = await this.messageRepository.find({
      where: { user_id },
      relations: ['user'],
    });

    return messages;
  }
}

export { MessagesServices };
