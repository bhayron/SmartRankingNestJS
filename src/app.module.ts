import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';

import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './configs/mongo.config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bhayron:secretf5@cluster0.jufe8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      // {
      //   useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useUnifiedTopology: true,
      //   useFindAndModify: false,
      // },
    ),
    JogadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
