import { prismaClient } from '../prisma';

class GetLastThreeMessagesServices {
  public async execute() {
    const messages = await prismaClient.message.findFirst({
      take: 3,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    });

    return messages;
  }
}

export { GetLastThreeMessagesServices };
