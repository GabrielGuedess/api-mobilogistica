export interface Credentials {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
}

export abstract class AuthRepository {
  abstract signIn(credentials: Credentials): Promise<SignInResponse>;
}
