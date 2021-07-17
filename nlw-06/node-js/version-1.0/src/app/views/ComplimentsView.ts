import { Compliment } from '@models/Compliment';

import { IUser } from './UserView';
import { ITag } from './TagView';

export interface ICompliment {
  id: string;
  message: string;
  user_sender: IUser;
  user_receiver: IUser;
  tag: ITag;
}

export default {
  render(compliment: Compliment): ICompliment {
    return {
      id: compliment.id,
      message: compliment.message,
      user_sender: compliment.userSender,
      user_receiver: compliment.userReceiver,
      tag: compliment.tag,
    };
  },

  renderMany(compliments: Compliment[]): ICompliment[] {
    return compliments.map(compliment => this.render(compliment));
  },
};
