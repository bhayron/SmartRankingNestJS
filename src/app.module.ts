import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';

import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './configs/mongo.config';

@Module({
  imports: [
    MongooseModule.forRoot(mongooseConfig, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    JogadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
