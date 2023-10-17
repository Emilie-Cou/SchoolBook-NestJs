import { Module } from '@nestjs/common';
import { ProfController } from './_prof.controller';
import { ProfService } from './_prof.service';

@Module({
  controllers: [ProfController],
  providers: [ProfService],
})
export class ProfModule {}
