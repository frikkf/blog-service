import { Controller, Get, Post, Body } from '@nestjs/common';
import { BlogPost } from './blog-post.entity';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { CreateBlogPostDto } from './create-blog-post.dto';
import { BlogPostService } from './blog-post.service';

@Controller('blog')
export class BlogPostController {

  constructor(private readonly blogPostService: BlogPostService) {}

  @Get()
  findAll(): Observable<BlogPost[]> {
    return this.blogPostService.findAll();
  }

  @Post()
  create(@Body() createBlogPostDto: CreateBlogPostDto): Observable<BlogPost> {
    return this.blogPostService.create(createBlogPostDto);
  }
}
