import { prismaClient } from '../prisma';

import { io } from '../../start/server';

interface IRequest {
  text: string;
  user_id: string;
}

class CreateMessageService {
  public async execute({ text, user_id }: IRequest) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    };

    io.emit('new_message', infoWS);

    return message;
  }
}

export { CreateMessageService };
