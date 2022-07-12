import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class RegisterRequest {
  constructor(body?: RegisterRequest) {
    this.user = body?.user || '';
    this.email = body?.email || '';
    this.password = body?.password || '';
  }
  @IsNotEmpty()
  user: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}
