import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapModule } from './map.module';

@Module({
  imports: [
    MapModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
      serveStaticOptions: {
        index: false,
        extensions: ['html', 'js', 'svg']
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}