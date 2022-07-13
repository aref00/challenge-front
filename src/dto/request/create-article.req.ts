import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleRequset {
  constructor(body?: CreateArticleRequset) {
    this.title = body?.title || '';
    this.description = body?.description || '';
    this.body = body?.body || '';
    this.tagList = body?.tagList || [];
  }
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  body: string;

  @IsArray()
  tagList: string[];
}
