import { IAuthDTO } from "../dtos/IAuthDTO";

interface IAuthProvider {
  auth(login: string): Promise<IAuthDTO | undefined>;
}

export { IAuthProvider };
