import { prismaClient } from '../prisma';

interface IRequest {
  user_id: string;
}

class ProfileUserServices {
  public async execute({ user_id }: IRequest) {
    const user = await prismaClient.user.findMany({
      where: { id: user_id },
    });

    return user;
  }
}

export { ProfileUserServices };
