import { Entity, Column, ObjectIdColumn, BaseEntity, ObjectID} from 'typeorm';

@Entity()
export class BlogPost extends BaseEntity {
  @ObjectIdColumn() id: ObjectID;

  @Column('title') title: string;

  @Column('text') body: string;

  @Column() isPublished: boolean;

  @Column() createdAt: Date = new Date();

  @Column() changedAt: Date = new Date();

  @Column() author: string;
}