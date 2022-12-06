import { container } from "tsyringe";

import { GithubAuthProvider } from "./AuthProvider/implementations/GithubAuthProvider";
import { IAuthProvider } from "./AuthProvider/models/IAuthProvider";
import { BCryptHashProvider } from "./HashProvider/implementations/BCryptHashProvider";
import { IHashProvider } from "./HashProvider/models/IHashProvider";

container.registerSingleton<IHashProvider>("HashProvider", BCryptHashProvider);

container.registerSingleton<IAuthProvider>("AuthProvider", GithubAuthProvider);
