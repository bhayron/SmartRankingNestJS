import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];
  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
    await this.criar(criaJogadorDto);
  }

  async consultarTodosJogadores(): Promise<Jogador[]> {
    return this.jogadores;
  }

  private criar(CriaJogadorDto: CriarJogadorDto): void {
    const { nome, email, telefoneCelular } = CriaJogadorDto;

    const jogador: Jogador = {
      _id: uuidv4(),
      nome,
      telefoneCelular,
      email,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: 'www.google.com.br/foto123.jpg',
    };
    console.log(jogador);

    this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`);
    this.jogadores.push(jogador);
  }
}
