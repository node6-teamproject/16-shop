import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('specialties')
  getSpecialtiesMap(@Res() res: Response) {
    return res.sendFile(
      join(__dirname, '..', 'public', 'korea.html')
    );
  }
}