import { api } from 'services/api';
import { prismaClient } from '../prisma';

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

    const { login, id, avatar_url, name } = response.data;

    let user = await prismaClient.user.findFirst({
      where: {
        github_id: String(id),
      },
    });

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          github_id: String(id),
          login,
          avatar_url,
          name,
        },
      });
    }

    return accessTokenResponse;
  }
}

export { AuthenticateUserServices };
