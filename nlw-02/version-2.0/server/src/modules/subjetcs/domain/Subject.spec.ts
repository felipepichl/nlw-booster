import { Subject } from "./Subject";

describe("Subjects", () => {
  it("should be able to create a new subject", () => {
    const subject = new Subject({
      title: "User Test",
    });

    expect(subject).toBeTruthy();
  });
});
