import { api } from 'services/api';

interface IRequest {
  code: string;
}

class AuthenticateUserServices {
  public async execute({ code }: IRequest) {
    const response = await api.post('', null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    });

    console.log(response.data);
    return response.data;
  }
}

export { AuthenticateUserServices };
