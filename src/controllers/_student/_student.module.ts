import { Module } from '@nestjs/common';
import { StudentController } from './_student.controller';
import { StudentService } from './_student.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
