import { AppError } from "@shared/errors/AppError";

import { AuthProviderInMemory } from "../../provider/AuthProvider/in-memory/AuthProviderInMemory";
import { HashProviderInMemory } from "../../provider/HashProvider/in-memory/HashProviderInMemory";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let hashProviderInMemory: HashProviderInMemory;
let authProviderInMemory: AuthProviderInMemory;

describe("Create User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProviderInMemory = new HashProviderInMemory();
    authProviderInMemory = new AuthProviderInMemory();

    createUserUseCase = new CreateUserUseCase(
      usersRepositoryInMemory,
      hashProviderInMemory,
      authProviderInMemory
    );
  });

  it("should be able to create a new user", async () => {
    // await authProviderInMemory.auth("github_user");

    const user = await createUserUseCase.execute({
      username: "user_test",
      email: "test@teste.com",
      password: "hash123",
      whatsapp: "55999998888",
    });

    expect(user).toHaveProperty("id");
  });

  it("should not be able to create a new user with email exists", async () => {
    expect(async () => {
      await createUserUseCase.execute({
        username: "user_test",
        email: "test@teste.com",
        password: "hash123",
        whatsapp: "55999998888",
      });
      await createUserUseCase.execute({
        username: "user_test",
        email: "test@teste.com",
        password: "hash123",
        whatsapp: "55999998888",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a user with Github", async () => {
    expect(async () => {
      await createUserUseCase.execute({
        username: "user_test",
        email: "test@teste.com",
        password: "hash123",
        whatsapp: "55999998888",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
