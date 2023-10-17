import { Module } from '@nestjs/common';
import { CommentController } from './_comment.controller';
import { CommentService } from './_comment.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
