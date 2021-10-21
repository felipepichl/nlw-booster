import { api } from 'services/api';

interface IRequest {
  code: string;
}

interface IResponse {
  access_token: string;
}

class AuthenticateUserServices {
  public async execute({ code }: IRequest): Promise<IResponse> {
    const { data: accessTokenResponse } = await api.post<IResponse>('', null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    });

    return accessTokenResponse;
  }
}

export { AuthenticateUserServices };
