import { IsEmail, MinLength } from 'class-validator';
export class LoginRequest {
  constructor(body?: LoginRequest) {
    this.email = body?.email || '';
    this.password = body?.password || '';
  }
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}
