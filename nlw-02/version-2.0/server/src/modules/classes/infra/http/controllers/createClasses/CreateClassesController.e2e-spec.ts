import { hash } from "bcryptjs";
import request from "supertest";

import { app } from "@shared/infra/http/start/app";
import { prisma } from "@shared/infra/prisma";

describe("[E2E] - Create Classes", () => {
  beforeAll(async () => {
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

  it("shoud be able to create a new class", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "test@test.com",
      password: "hash123",
    });

    const { token } = responseToken.body;

    await request(app)
      .post("/subjects")
      .send({
        title: "title_test",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    const response = await request(app)
      .post("/classes")
      .send({
        cost: 100,
        subject_id: "",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    console.log(response.body);

    expect(response.status).toBe(201);
    expect(response.body.error).toBeFalsy();
  });
});
