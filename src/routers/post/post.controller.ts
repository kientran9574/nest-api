import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  create(@Body() payload: any) {
    return this.postService.createPost(payload);
  }
}
