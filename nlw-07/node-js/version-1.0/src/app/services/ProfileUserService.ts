import { prismaClient } from '../prisma';

interface IRequest {
  user_id: string;
}

class ProfileUserService {
  public async execute({ user_id }: IRequest) {
    const user = await prismaClient.user.findFirst({
      where: { id: user_id },
    });

    return user;
  }
}

export { ProfileUserService };
