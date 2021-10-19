import { Request, Response } from 'express';
// import * as Yup from 'yup';

// import { SessionServices } from 'app/services/SessionServices';
// import { AppError } from 'app/error/AppError';

class SessionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    response.redirect();

    return response.json(session);
  }
}

export { SessionController };
