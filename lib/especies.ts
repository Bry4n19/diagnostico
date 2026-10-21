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
    id: 'carcara',
    grupo: 'avifauna',
    nomePopular: 'Carcará',
    nomeCientifico: 'Caracara plancus',
    autoria: 'Miller, 1777',
    familia: 'Falconidae',
    ordem: 'Falconiformes',
    foto: '/especies/carcara.png',
    descricaoFoto:
      'Ave de rapina em perfil, com penas escuras no alto da cabeça, bico curvo azulado e pescoço com penas claras rajadas, à beira da água.',
    identificacaoConfirmada: false,
  },
  ...(
    [
      ['andorinha-grande', 'Andorinha-grande', 'Progne chalybea', 'Andorinha de dorso azul metálico brilhante e peito claro, pousada no alto de um mourão de madeira.'],
      ['sabia-barranco', 'Sabiá-barranco', 'Turdus leucomelas', 'Sabiá de cabeça acinzentada e asas marrom-avermelhadas, pousado em um galho com musgo.'],
      ['joao-tenenem', 'João-teneném', 'Synallaxis spixi', 'Pequena ave parda com topete ferrugíneo, garganta preta e mancha alaranjada na asa, pousada entre folhagens.'],
      ['anu-preto', 'Anu-preto', 'Crotophaga ani', 'Ave toda preta de bico alto e curvo e cauda longa, pousada em um mourão de concreto.'],
      ['pica-pau-de-cabeca-amarela', 'Pica-pau-de-cabeça-amarela', 'Celeus flavescens', 'Pica-pau com topete amarelo-dourado e corpo preto barrado de amarelo, junto a uma bromélia.'],
      ['quero-quero', 'Quero-quero', 'Vanellus chilensis', 'Quero-quero de frente, com olhos vermelhos, face cinza, faixa preta na garganta e peito preto.'],
      ['galinha-dagua', "Galinha-d'água", 'Gallinula galeata', 'Ave aquática escura com escudo frontal vermelho e bico de ponta amarela, caminhando na margem alagada.'],
      ['sabia-poca', 'Sabiá-poca', 'Turdus amaurochalinus', 'Sabiá acinzentado de bico amarelo e garganta estriada, pousado sobre uma mureta.'],
      ['guaracava-de-barriga-amarela', 'Guaracava-de-barriga-amarela', 'Elaenia flavogaster', 'Pequena ave de topete eriçado e ventre amarelado, pousada em um galho fino.'],
      ['saci', 'Saci', 'Tapera naevia', 'Ave de dorso estriado de marrom e preto com topete eriçado, pousada entre galhos.'],
      ['pica-pau-branco', 'Pica-pau-branco', 'Melanerpes candidus', 'Pica-pau de cabeça e ventre brancos, asas pretas e anel amarelo ao redor do olho, sobre um tronco.'],
      ['peitica', 'Peitica', 'Empidonomus varius', 'Ave de costas com sobrancelha clara, asas com bordas brancas e cauda ferrugínea, pousada em um galho.'],
      ['jacuguacu', 'Jacuguaçu', 'Penelope obscura', 'Ave grande e escura de cauda longa e barbela vermelha na garganta, caminhando em chão de terra.'],
      ['sabia-laranjeira', 'Sabiá-laranjeira', 'Turdus rufiventris', 'Sabiá de dorso pardo e ventre alaranjado, pousado em um galho coberto de musgo.'],
      ['juriti-pupu', 'Juriti-pupu', 'Leptotila verreauxi', 'Pomba de plumagem pardo-rosada e pés vermelhos, pousada sobre um toco de madeira.'],
      ['gaviao-carijo', 'Gavião-carijó', 'Rupornis magnirostris', 'Gavião de dorso marrom, peito barrado e olhos e pernas amarelos, pousado em um mourão.'],
      ['tico-tico', 'Tico-tico', 'Zonotrichia capensis', 'Pequena ave com cabeça listrada de cinza e preto e colar ferrugíneo na nuca, pousada em um galho.'],
      ['juruviara', 'Juruviara', 'Vireo chivi', 'Pequena ave de dorso verde-oliva, ventre claro e sobrancelha branca, pousada em um galho.'],
      ['passaro-preto', 'Pássaro-preto', 'Gnorimopsar chopi', 'Ave inteiramente preta de bico pontiagudo, pousada em um galho seco.'],
      ['andorinha-pequena-de-casa', 'Andorinha-pequena-de-casa', 'Pygochelidon cyanoleuca', 'Pequena andorinha de dorso azul metálico e garganta branca, pousada em um arame.'],
      ['suiriri', 'Suiriri', 'Tyrannus melancholicus', 'Ave de cabeça cinza, dorso pardo e ventre amarelo vivo, pousada em um galho seco.'],
      ['andorinhao-do-temporal', 'Andorinhão-do-temporal', 'Chaetura meridionalis', 'Andorinhão pardo-escuro de asas longas e curvas, em pleno voo contra o céu azul.'],
    ] as const
  ).map(
    ([id, nomePopular, nomeCientifico, descricaoFoto]): Especie => ({
      id,
      grupo: 'avifauna',
      nomePopular,
      nomeCientifico,
      foto: descricaoFoto ? `/especies/${id}.png` : '',
      descricaoFoto: descricaoFoto || `Foto de ${nomePopular} ainda não disponível.`,
      identificacaoConfirmada: false,
    }),
  ),
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
