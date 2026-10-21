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
  {
    id: 'gato-do-mato',
    grupo: 'mastofauna',
    nomePopular: 'Gato-do-mato-pequeno',
    nomeCientifico: 'Leopardus guttulus',
    autoria: 'Hensel, 1872',
    familia: 'Felidae',
    ordem: 'Carnivora',
    foto: '/especies/gato-do-mato.png',
    descricaoFoto:
      'Pequeno felino de pelagem manchada caminhando entre a vegetação, com os olhos refletindo a luz infravermelho da armadilha fotográfica à noite.',
    identificacaoConfirmada: false,
  },
  {
    id: 'tatu-galinha',
    grupo: 'mastofauna',
    nomePopular: 'Tatu-galinha',
    nomeCientifico: 'Dasypus novemcinctus',
    autoria: 'Linnaeus, 1758',
    familia: 'Dasypodidae',
    ordem: 'Cingulata',
    foto: '/especies/tatu-galinha.png',
    descricaoFoto:
      'Tatu com carapaça de cintas transversais e cauda longa forrageando no folhiço, registrado à noite por armadilha fotográfica com infravermelho.',
    identificacaoConfirmada: false,
  },
  {
    id: 'gamba',
    grupo: 'mastofauna',
    nomePopular: 'Gambá',
    nomeCientifico: 'Didelphis aurita',
    autoria: 'Wied-Neuwied, 1826',
    familia: 'Didelphidae',
    ordem: 'Didelphimorphia',
    foto: '/especies/gamba.png',
    descricaoFoto:
      'Marsupial de pelagem escura, face clara com listras e cauda longa enrolada, caminhando no folhiço à noite diante da armadilha fotográfica.',
    identificacaoConfirmada: false,
  },
  {
    id: 'cachorro-do-mato',
    grupo: 'mastofauna',
    nomePopular: 'Cachorro-do-mato',
    nomeCientifico: 'Cerdocyon thous',
    autoria: 'Linnaeus, 1766',
    familia: 'Canidae',
    ordem: 'Carnivora',
    foto: '/especies/cachorro-do-mato.png',
    descricaoFoto:
      'Canídeo de pelagem acinzentada com garganta clara e orelhas eretas em meio a capim alto, com um segundo indivíduo ao fundo, registrado de dia por armadilha fotográfica.',
    identificacaoConfirmada: false,
  },
  {
    id: 'capivara',
    grupo: 'mastofauna',
    nomePopular: 'Capivara',
    nomeCientifico: 'Hydrochoerus hydrochaeris',
    autoria: 'Linnaeus, 1766',
    familia: 'Caviidae',
    ordem: 'Rodentia',
    foto: '/especies/capivara.png',
    descricaoFoto:
      'Grande roedor de focinho largo e orelhas pequenas sentado ao lado de um tronco caído, registrado à noite por armadilha fotográfica com infravermelho.',
    identificacaoConfirmada: false,
  },
]
