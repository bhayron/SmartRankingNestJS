import {
  Controller,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
import { CategoriasService } from './categorias.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(
    @Body() criarCategoriaDto: CriarCategoriaDto,
  ): Promise<Categoria> {
    return await this.categoriasService.criarCategoria(criarCategoriaDto);
  }

  /*
    Desafio
    Passamos a utilizado query parameters com o verbo Get
    */

  @Get()
  async consultarCategorias(
    @Query() params: string[],
  ): Promise<Array<Categoria> | Categoria> {
    const idCategoria = params['idCategoria'];
    const idJogador = params['idJogador'];

    if (idCategoria) {
      return await this.categoriasService.consultarCategoriaPeloId(idCategoria);
    }

    if (idJogador) {
      return await this.categoriasService.consultarCategoriaDoJogador(
        idJogador,
      );
    }

    return await this.categoriasService.consultarTodasCategorias();
  }

  /*
    @Get()
    async consultarCategorias(): Promise<Array<Categoria>> {
        return await this.categoriasService.consultarTodasCategorias()
    }
    */

  /*
    @Get('/:categoria')
    async consultarCategoriaPeloId(
        @Param('categoria') categoria: string): Promise<Categoria> {
            return await this.categoriasService.consultarCategoriaPeloId(categoria)
        }
    */

  @Put('/:categoria')
  @UsePipes(ValidationPipe)
  async atualizarCategoria(
    @Body() atualizarCategoriaDto: AtualizarCategoriaDto,
    @Param('categoria') categoria: string,
  ): Promise<void> {
    await this.categoriasService.atualizarCategoria(
      categoria,
      atualizarCategoriaDto,
    );
  }

  @Post('/:categoria/jogadores/:idJogador')
  async atribuirCategoriaJogador(@Param() params: string[]): Promise<void> {
    return await this.categoriasService.atribuirCategoriaJogador(params);
  }
}
