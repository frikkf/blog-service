import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPostModule } from './blog-post/blog-post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BlogPostModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
