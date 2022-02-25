import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';

import { Jogador } from './interfaces/jogador.interface';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}
  @Post()
  async criarAtualizarJogador(@Body() criaJogadorDto: CriarJogadorDto) {
    await this.jogadoresService.criarAtualizarJogador(criaJogadorDto);
  }
  @Get()
  async consultarJogadores(@Query('email') email: string): Promise<Jogador[]> {
    if (email) {
      return this.jogadoresService.consultarJogadoresPeloEmail(email);
    } else {
      return this.jogadoresService.consultarTodosJogadores();
    }
  }
}
