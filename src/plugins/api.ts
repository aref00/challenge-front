import { LoginRequest, RegisterRequest } from '@/dto';
import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { validate } from 'class-validator';

const errorMessages: { [key: string]: string } = {
  email: 'لطفا ایمیل را صحیح وارد کنید.',
  password: 'رمز عبور باید حداقل ۸ حرف باشد.',
};

export class API {
  constructor(baseURL: string) {
    this.token = `Bearer ${process.env.VUE_APP_ACCESS}`;
    this.axios = Axios.create({
      baseURL: baseURL || process.env.VUE_APP_APIURL,
      timeout: 3000,
    });
  }

  axios: AxiosInstance;
  token: string;

  async login(body: LoginRequest): Promise<AxiosResponse> {
    body = new LoginRequest(body);
    const errors = await validate(body);
    if (errors.length > 0) {
      alert(errorMessages[errors[0].property]);
      throw new Error('Login Failed!  User name and/or Password is invalid');
    }
    return this.axios.post('/user/login', {
      headers: {
        Authorization: this.token,
      },
    });
  }

  async register(body: RegisterRequest): Promise<AxiosResponse> {
    body = new RegisterRequest(body);
    const errors = await validate(body);
    if (errors.length > 0) {
      alert(errorMessages[errors[0].property]);
      throw new Error('Register Failed!  User name and/or Password is invalid');
    }
    return this.axios.post('/user/register', {
      headers: {
        Authorization: this.token,
      },
    });
  }
}
export default class Plugin {
  version = '0.0.1';
  static install(Vue: any, options: { baseURL: string }) {
    const api = new API(options.baseURL);
    Object.defineProperty(Vue.prototype, '$api', {
      get() {
        return api;
      },
    });
  }
}
