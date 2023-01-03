class Result<T> {
  public isSuccess: boolean;

  public isFailure: boolean;

  public error: T | string;

  constructor(isSuccess: boolean, error?: T | string, value?: string) {
    if (isSuccess && error) {
      throw new Error("InvalidOperation");
    }

    if (!isSuccess && error) {
      throw new Error("InvalidOperation");
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
  }
}

export { Result };
