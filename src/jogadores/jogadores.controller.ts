import { Body, Controller, Post } from '@nestjs/common';
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
  async consultarJogadores(): Promise<Jogador[]> {
    return this.jogadoresService.consultarTodosJogadores();
  }
}
