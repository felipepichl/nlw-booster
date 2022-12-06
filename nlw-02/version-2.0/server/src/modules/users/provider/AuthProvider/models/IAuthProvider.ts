import { IAuthDTO } from "../dtos/IAuthDTO";

interface IAuthProvider {
  auth(login: string): Promise<IAuthDTO>;
}

export { IAuthProvider };
