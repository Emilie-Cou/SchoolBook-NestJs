import { Module } from '@nestjs/common';
import { ClasseController } from './_classe.controller';
import { ClasseService } from './_classe.service';

@Module({
  controllers: [ClasseController],
  providers: [ClasseService],
})
export class ClasseModule {}
