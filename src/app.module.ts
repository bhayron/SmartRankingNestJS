import 'dotenv/config';
import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';

import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URL,
      // {
      //   useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useUnifiedTopology: true,
      //   useFindAndModify: false,
      // },
    ),
    JogadoresModule,
    CategoriasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
