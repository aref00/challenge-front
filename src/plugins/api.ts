import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  CreateArticleRequset,
  Article,
} from '@/dto';
import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { validate } from 'class-validator';

const errorMessages: { [key: string]: string } = {
  email: 'لطفا ایمیل را صحیح وارد کنید.',
  password: 'رمز عبور باید حداقل ۸ حرف باشد.',
};

export class API {
  constructor(baseURL: string) {
    // this.token = `Bearer ${process.env.VUE_APP_ACCESS}`;
    this.axios = Axios.create({
      baseURL: baseURL || process.env.VUE_APP_APIURL,
      timeout: 3000,
    });
  }

  axios: AxiosInstance;
  token?: string;

  setToken(token: string) {
    this.token = token;
  }

  async login(body: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    body = new LoginRequest(body);
    const errors = await validate(body);
    if (errors.length > 0) {
      alert(errorMessages[errors[0].property]);
      throw new Error('Login Failed!  User name and/or Password is invalid');
    }
    return this.axios.post('/user/login');
  }

  async register(
    body: RegisterRequest,
  ): Promise<AxiosResponse<RegisterResponse>> {
    body = new RegisterRequest(body);
    const errors = await validate(body);
    if (errors.length > 0) {
      alert(errorMessages[errors[0].property]);
      throw new Error('Register Failed!  User name and/or Password is invalid');
    }
    return this.axios.post('/user/register');
  }

  async getUser(): Promise<AxiosResponse<LoginResponse>> {
    return this.axios.get('/user', {
      headers: {
        Authorization: `Token ${this.token}`,
      },
    });
  }

  async getArticles(
    limit = 20,
    offset = 0,
  ): Promise<AxiosResponse<{ articles: Article[]; articlesCount: number }>> {
    return this.axios.get(`/articles/feed?limit=${limit}&offset=${offset}`, {
      headers: {
        Authorization: `Token ${this.token}`,
      },
    });
  }

  async getArticle(slug: string): Promise<AxiosResponse<LoginResponse>> {
    return this.axios.get(`/articles/${slug}`, {
      headers: {
        Authorization: `Token ${this.token}`,
      },
    });
  }

  async createArticle(
    body: CreateArticleRequset,
  ): Promise<AxiosResponse<Article>> {
    body = new CreateArticleRequset(body);
    const errors = await validate(body);
    if (errors.length > 0) {
      alert(errorMessages[errors[0].property]);
      throw new Error('Please Fill all required fields, and try again.');
    }
    return this.axios.post('/articles');
  }

  async getTags(): Promise<AxiosResponse<string[]>> {
    return this.axios.get('/tags');
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
