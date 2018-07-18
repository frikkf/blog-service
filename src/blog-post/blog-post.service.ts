import { Injectable } from "../../node_modules/@nestjs/common";
import { InjectRepository } from "../../node_modules/@nestjs/typeorm";
import { BlogPost } from "./blog-post.entity";
import { Repository } from "../../node_modules/typeorm";
import { CreateBlogPostDto } from "./create-blog-post.dto";
import { Observable, from } from "../../node_modules/rxjs";

@Injectable()
export class BlogPostService {

  constructor(
    @InjectRepository(BlogPost)
    private readonly blogPostRepository: Repository<BlogPost>,
  ){}

  findAll(): Observable<BlogPost[]> {
    return from(this.blogPostRepository.find());
  }

  create(createBlogPostDto: CreateBlogPostDto):Observable<BlogPost> {
    const blogPost = new BlogPost();
    blogPost.title = createBlogPostDto.title;
    blogPost.body = createBlogPostDto.body;
    blogPost.isPublished = createBlogPostDto.isPublished;
    return from(blogPost.save())
  }
}