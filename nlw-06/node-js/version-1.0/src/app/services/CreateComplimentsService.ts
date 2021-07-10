import { Repository, getCustomRepository } from 'typeorm';

import { User } from '@models/User';
import { Compliment } from '@models/Compliment';

import { UsersRepositories } from '../repositories/UsersRepositories';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

import { AppError } from '../error/AppError';

interface IRequest {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
}

class CreateComplimentsService {
  private complimentsRepository: Repository<Compliment>;

  private usersRepository: Repository<User>;

  constructor() {
    this.complimentsRepository = getCustomRepository(ComplimentsRepositories);
    this.usersRepository = getCustomRepository(UsersRepositories);
  }

  public async execute({
    user_sender,
    user_receiver,
    tag_id,
    message,
  }: IRequest): Promise<Compliment> {
    const userReceiverExists = await this.usersRepository.findOne({
      where: { id: user_receiver },
    });

    if (!userReceiverExists) {
      throw new AppError('User Receiver does not exists');
    }

    const compliment = this.complimentsRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    await this.complimentsRepository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentsService };
