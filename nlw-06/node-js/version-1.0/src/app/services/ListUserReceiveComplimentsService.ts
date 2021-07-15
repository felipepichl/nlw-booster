import { Repository, getCustomRepository } from 'typeorm';

import { Compliment } from '@models/Compliment';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

interface IRequest {
  user_id: string;
}

class ListUserReceiveComplimentsService {
  private complimentsRepository: Repository<Compliment>;

  constructor() {
    this.complimentsRepository = getCustomRepository(ComplimentsRepositories);
  }

  public async execute({ user_id }: IRequest): Promise<Compliment[]> {
    const compliments = await this.complimentsRepository.find({
      where: { user_receiver: user_id },
      relations: ['userReceiver'],
    });

    return compliments;
  }
}

export { ListUserReceiveComplimentsService };
