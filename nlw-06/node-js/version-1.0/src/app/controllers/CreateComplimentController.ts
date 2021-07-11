import { Request, Response } from 'express';
import * as Yup from 'yup';

import { AppError } from '../error/AppError';
import { CreateComplimentsService } from '../services/CreateComplimentsService';

class CreateComplimentController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { user_sender, user_receiver, tag_id, message } = request.body;

    const schema = Yup.object().shape({
      user_sender: Yup.string().required(),
      user_receiver: Yup.string().required(),
      tag_id: Yup.string().required(),
      message: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations Failed');
    }

    const createComplimentService = new CreateComplimentsService();

    const compliment = await createComplimentService.execute({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentController };
