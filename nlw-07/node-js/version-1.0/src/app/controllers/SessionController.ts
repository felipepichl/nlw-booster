import { Request, Response } from 'express';
// import * as Yup from 'yup';

// import { SessionServices } from 'app/services/SessionServices';
// import { AppError } from 'app/error/AppError';

class SessionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    response.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
    );

    return response.json({ messege: 'OK' });
  }
}

export { SessionController };
