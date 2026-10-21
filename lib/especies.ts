export type Grupo = 'avifauna' | 'mastofauna'

export type Especie = {
  id: string
  grupo: Grupo
  nomePopular: string
  /** Somente gênero e epíteto (ex.: "Cuniculus paca"). Exibido em itálico. */
  nomeCientifico: string
  /** Autor e ano da descrição (ex.: "Linnaeus, 1766"). Exibido sem itálico. */
  autoria?: string
  familia?: string
  ordem?: string
  foto: string
  /** Texto alternativo descrevendo a fotografia. */
  descricaoFoto: string
  /** Mantenha false até a identificação ser validada pelo orientador/especialista. */
  identificacaoConfirmada: boolean
}

/*
 * Para adicionar uma espécie: coloque a foto em /public/especies e copie um dos
 * objetos abaixo, ajustando os campos. Para remover, apague o objeto.
 */
export const especies: Especie[] = [
  {
    id: 'tie-sangue',
    grupo: 'avifauna',
    nomePopular: 'Tiê-sangue',
    nomeCientifico: 'Ramphocelus bresilius',
    autoria: 'Linnaeus, 1766',
    familia: 'Thraupidae',
    ordem: 'Passeriformes',
    foto: '/especies/tie-sangue.png',
    descricaoFoto:
      'Ave de plumagem vermelha com asas e cauda pretas, pousada em um cacho de bananas, registrada por armadilha fotográfica.',
    identificacaoConfirmada: false,
  },
  {
    id: 'paca',
    grupo: 'mastofauna',
    nomePopular: 'Paca',
    nomeCientifico: 'Cuniculus paca',
    autoria: 'Linnaeus, 1766',
    familia: 'Cuniculidae',
    ordem: 'Rodentia',
    foto: '/especies/paca.png',
    descricaoFoto:
      'Roedor de porte médio com fileiras de manchas claras na lateral do corpo, registrado à noite por armadilha fotográfica com infravermelho.',
    identificacaoConfirmada: false,
  },
]
