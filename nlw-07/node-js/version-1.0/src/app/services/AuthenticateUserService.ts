import { api } from 'services/api';
import { sign } from 'jsonwebtoken';

import { prismaClient } from '../prisma';

interface IUserResponse {
  login: string;
  id: string;
  avatar_url: string;
  name: string;
}

interface IRequest {
  code: string;
}

interface IResponse {
  token: string;
  user: IUserResponse;
}

interface IAccessTokenResponse {
  access_token: string;
}

class AuthenticateUserService {
  public async execute({ code }: IRequest): Promise<IResponse> {
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

    const token = sign(
      {
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return { token, user };
  }
}

export { AuthenticateUserService };
