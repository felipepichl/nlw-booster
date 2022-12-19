import request from "supertest";

import { app } from "@shared/infra/http/start/app";

describe("[E2E] - List all Classes", () => {
  it("should be able to list all classes", async () => {
    const responseToken = await request(app).post("/sessions");

    const response = await request(app).get("/classes");

    expect(response.body.error).toBeFalsy();
    expect(response.status).toBe(200);
  });
});
