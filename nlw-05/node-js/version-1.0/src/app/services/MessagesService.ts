import { getCustomRepository } from 'typeorm';

import { Message } from '@models/Message';
import { MessagesRepository } from 'app/repositories/MessageRepository';

interface IRequest {
  admin_id?: string;
  user_id: string;
  text: string;
}

class MessagesServices {
  public async store({ admin_id, user_id, text }: IRequest): Promise<Message> {
    const messageRepository = getCustomRepository(MessagesRepository);

    const message = messageRepository.create({
      admin_id,
      user_id,
      text,
    });

    await messageRepository.save(message);

    return message;
  }

  public async listByUser(user_id: string): Promise<Message[]> {
    const messageRepository = getCustomRepository(MessagesRepository);

    const messages = await messageRepository.find({
      where: { user_id },
      relations: ['users'],
    });

    return messages;
  }
}

export default new MessagesServices();
