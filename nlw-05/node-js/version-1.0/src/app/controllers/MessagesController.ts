import { Request, Response } from 'express';
import * as Yup from 'yup';

import { AppError } from 'app/errors/AppError';

import MessagesService from '../services/MessagesService';

class MessagesController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { admin_id, user_id, text } = request.body;

    const schema = Yup.object().shape({
      admin_id: Yup.string().required(),
      user_id: Yup.boolean().required(),
      text: Yup.boolean().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations Failed!');
    }

    const message = await MessagesService.execute({ admin_id, user_id, text });

    return response.json(message);
  }
}

export { MessagesController };
