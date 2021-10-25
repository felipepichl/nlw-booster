import { prismaClient } from '../prisma';

interface IRequest {
  text: string;
  user_id: string;
}

class CreateMessageService {
  public async execute(): Promise<void> {


    const message = await prismaClient.
  }
}

export { CreateMessageService };
