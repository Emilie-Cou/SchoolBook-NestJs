import { Module } from '@nestjs/common';
import { ClasseModule } from './controllers/_classe/_classe.module';
import { ProfModule } from './controllers/_prof/_prof.module';
import { CommentModule } from './controllers/_comment/_comment.module';
import { StudentModule } from './controllers/_student/_student.module';

@Module({
  imports: [ClasseModule, ProfModule, CommentModule, StudentModule],
})
export class AppModule {}
