import { hash } from "bcryptjs";
import request from "supertest";

import { app } from "@shared/infra/http/start/app";
import { prisma } from "@shared/infra/prisma";

describe("[E2E] - Create Subjects", () => {
  beforeEach(async () => {
    const passwordHash = await hash("hash123", 8);

    await prisma.user.create({
      data: {
        name: "Teste",
        username: "felipepichl",
        email: "test@test.com",
        password: passwordHash,
        avatar: "https://example.com/user_test.png",
        bio: "A great user test",
        whatsapp: "55999998888",
      },
    });
  });

  it("should be able to create a new subject", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "test@test.com",
      password: "hash123",
    });

    const { token } = responseToken.body;

    const response = await request(app)
      .post("/subjects")
      .send({
        title: "title_test",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    // console.log(response);

    expect(response.status).toBe(201);
  });
});
