import { getCustomRepository } from 'typeorm';

import { Message } from '@models/Message';
import { MessagesRepository } from 'app/repositories/MessageRepository';

interface IRequest {
  admin_id?: string;
  user_id: string;
  text: string;
}

class MessagesServices {
  public async execute({
    admin_id,
    user_id,
    text,
  }: IRequest): Promise<Message> {
    const messageRepository = getCustomRepository(MessagesRepository);

    const message = messageRepository.create({
      admin_id,
      user_id,
      text,
    });

    await messageRepository.save(message);

    return message;
  }
}

export default new MessagesServices();
