import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];
  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
    this.logger.log(`criaJogadorDto: ${criaJogadorDto}`);
  }

  private criar(CriaJogadorDto: CriarJogadorDto): void {
    const { nome, email, telefoneCelular } = CriaJogadorDto;
  }
}
