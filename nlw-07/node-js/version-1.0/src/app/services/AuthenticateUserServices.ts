import { api } from 'services/api';

interface IRequest {
  code: string;
}

interface IAccessTokenResponse {
  access_token: string;
}

interface IUserResponse {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
}

class AuthenticateUserServices {
  public async execute({ code }: IRequest): Promise<IAccessTokenResponse> {
    const { data: accessTokenResponse } = await api.post<IAccessTokenResponse>(
      '',
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      },
    );

    const response = await api.get<IUserResponse>(
      'https://api.github.com/user',
      {
        headers: {
          authorization: `Bearer ${accessTokenResponse.access_token}`,
        },
      },
    );

    console.log(response.data);

    return accessTokenResponse;
  }
}

export { AuthenticateUserServices };
