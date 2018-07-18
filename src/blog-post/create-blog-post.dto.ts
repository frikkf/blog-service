export class CreateBlogPostDto {
  readonly title: string;
  readonly body: string;
  readonly isPublished: boolean;
  readonly createdAt: Date;
  readonly changedAt: Date;
  readonly author: string;
}