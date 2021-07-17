import { Repository, getCustomRepository } from 'typeorm';

import complimentsView, { ICompliment } from 'app/views/ComplimentsView';

import { Compliment } from '@models/Compliment';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

interface IRequest {
  user_id: string;
}

class ListUserSendComplimentsService {
  private complimentsRepository: Repository<Compliment>;

  constructor() {
    this.complimentsRepository = getCustomRepository(ComplimentsRepositories);
  }

  public async execute({ user_id }: IRequest): Promise<ICompliment[]> {
    const compliments = await this.complimentsRepository.find({
      where: { user_sender: user_id },
      relations: ['userSender', 'tag'],
    });

    return complimentsView.renderMany(compliments);
  }
}

export { ListUserSendComplimentsService };
