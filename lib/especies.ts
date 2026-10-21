export type Grupo = 'avifauna' | 'mastofauna'

export type StatusIUCN = 'LC' | 'NT' | 'VU' | 'EN' | 'CR' | 'DD'

export const statusIUCN: Record<StatusIUCN, { rotulo: string; classe: string }> = {
  LC: { rotulo: 'Pouco preocupante', classe: 'bg-emerald-500/20 text-emerald-200 ring-emerald-400/40' },
  NT: { rotulo: 'Quase ameaçada', classe: 'bg-lime-500/20 text-lime-200 ring-lime-400/40' },
  VU: { rotulo: 'Vulnerável', classe: 'bg-amber-500/20 text-amber-200 ring-amber-400/50' },
  EN: { rotulo: 'Em perigo', classe: 'bg-orange-500/20 text-orange-200 ring-orange-400/50' },
  CR: { rotulo: 'Criticamente em perigo', classe: 'bg-red-500/20 text-red-200 ring-red-400/50' },
  DD: { rotulo: 'Dados insuficientes', classe: 'bg-zinc-500/20 text-zinc-200 ring-zinc-400/40' },
}

export type Credito = {
  autor: string
  licenca: string
  url?: string
}

export type Referencia = {
  titulo: string
  url: string
}

export type Especie = {
  id: string
  grupo: Grupo
  nomePopular: string
  /** Somente gênero e epíteto (ex.: "Cuniculus paca"). Exibido em itálico. */
  nomeCientifico: string
  /**
   * Autor e ano da descrição. Parênteses indicam que a espécie foi descrita em
   * outro gênero (Código Internacional de Nomenclatura Zoológica, art. 51.3).
   */
  autoria: string
  ordem: string
  familia: string
  iucn: StatusIUCN
  foto: string
  /** Texto alternativo descrevendo a fotografia. */
  descricaoFoto: string
  /** Deixe undefined enquanto a origem da foto não for confirmada. */
  credito?: Credito
  visaoGeral: string
  curiosidade: string
  /** Mantenha false até a identificação ser validada pelo orientador/especialista. */
  identificacaoConfirmada: boolean
}

/*
 * Fontes da nomenclatura e taxonomia: Pacheco et al. (2021), Lista Comentada das
 * Aves do Brasil (CBRO), e Abreu et al. (2023), Lista de Mamíferos do Brasil
 * (SBMz). Status de conservação: Lista Vermelha da IUCN.
 *
 * Para adicionar uma espécie: coloque a foto em /public/especies e copie um dos
 * objetos abaixo, ajustando os campos. Para remover, apague o objeto.
 */

const registroProprio: Credito = {
  autor: 'Equipe do TCC · ETEC Cônego José Bento',
  licenca: 'Registro próprio por armadilha fotográfica',
}

type Linha = [
  id: string,
  nomePopular: string,
  nomeCientifico: string,
  autoria: string,
  ordem: string,
  familia: string,
  iucn: StatusIUCN,
  descricaoFoto: string,
  visaoGeral: string,
  curiosidade: string,
]

const aves: Linha[] = [
  ['tie-sangue', 'Tiê-sangue', 'Ramphocelus bresilius', '(Linnaeus, 1766)', 'Passeriformes', 'Thraupidae', 'LC',
    'Ave de plumagem vermelha com asas e cauda pretas, pousada em um cacho de bananas, registrada por armadilha fotográfica.',
    'Pássaro endêmico do Brasil, típico de bordas de mata e capoeiras próximas à água na Mata Atlântica.',
    'Só o macho tem o vermelho intenso; a fêmea é parda, o que ajuda na camuflagem durante o período no ninho.'],
  ['carcara', 'Carcará', 'Caracara plancus', '(Miller, 1777)', 'Falconiformes', 'Falconidae', 'LC',
    'Ave de rapina em perfil, com penas escuras no alto da cabeça, bico curvo azulado e pescoço com penas claras rajadas, à beira da água.',
    'Ave de rapina generalista e oportunista, comum em áreas abertas, pastagens e ambientes urbanos.',
    'Apesar do aspecto de gavião, é parente dos falcões e costuma caminhar pelo chão à procura de alimento.'],
  ['andorinha-grande', 'Andorinha-grande', 'Progne chalybea', '(Gmelin, 1789)', 'Passeriformes', 'Hirundinidae', 'LC',
    'Andorinha de dorso azul metálico brilhante e peito claro, pousada no alto de um mourão de madeira.',
    'Maior andorinha comum no Brasil, frequente em cidades, onde se alimenta de insetos capturados em voo.',
    'Costuma aproveitar vãos de prédios, telhados e postes para construir os ninhos.'],
  ['sabia-barranco', 'Sabiá-barranco', 'Turdus leucomelas', 'Vieillot, 1818', 'Passeriformes', 'Turdidae', 'LC',
    'Sabiá de cabeça acinzentada e asas marrom-avermelhadas, pousado em um galho com musgo.',
    'Sabiá muito adaptável, presente em matas, parques e quintais, com dieta de frutos e invertebrados.',
    'É um importante dispersor de sementes, levando frutos de árvores nativas para outras áreas.'],
  ['joao-tenenem', 'João-teneném', 'Synallaxis spixi', 'Sclater, 1856', 'Passeriformes', 'Furnariidae', 'LC',
    'Pequena ave parda com topete ferrugíneo, garganta preta e mancha alaranjada na asa, pousada entre folhagens.',
    'Ave pequena e discreta de bordas de mata e capoeiras densas, mais ouvida do que vista.',
    'O nome popular imita o canto repetitivo, que lembra a palavra “teneném”.'],
  ['anu-preto', 'Anu-preto', 'Crotophaga ani', 'Linnaeus, 1758', 'Cuculiformes', 'Cuculidae', 'LC',
    'Ave toda preta de bico alto e curvo e cauda longa, pousada em um mourão de concreto.',
    'Ave de áreas abertas e pastagens, vive em grupos barulhentos que se deslocam juntos.',
    'Várias fêmeas podem botar ovos no mesmo ninho, e o grupo cuida dos filhotes em conjunto.'],
  ['pica-pau-de-cabeca-amarela', 'Pica-pau-de-cabeça-amarela', 'Celeus flavescens', '(Gmelin, 1788)', 'Piciformes', 'Picidae', 'LC',
    'Pica-pau com topete amarelo-dourado e corpo preto barrado de amarelo, junto a uma bromélia.',
    'Pica-pau de matas e bordas florestais, que se alimenta principalmente de formigas e cupins.',
    'O topete amarelo e eriçado é tão marcante que dá nome à espécie.'],
  ['quero-quero', 'Quero-quero', 'Vanellus chilensis', '(Molina, 1782)', 'Charadriiformes', 'Charadriidae', 'LC',
    'Quero-quero de frente, com olhos vermelhos, face cinza, faixa preta na garganta e peito preto.',
    'Ave de campos, gramados e margens de lagos, muito comum em áreas abertas e urbanas.',
    'Defende o ninho com voos rasantes e gritos; possui um esporão vermelho na dobra da asa.'],
  ['galinha-dagua', "Galinha-d'água", 'Gallinula galeata', '(Lichtenstein, 1818)', 'Gruiformes', 'Rallidae', 'LC',
    'Ave aquática escura com escudo frontal vermelho e bico de ponta amarela, caminhando na margem alagada.',
    'Ave aquática de lagoas, brejos e represas com vegetação nas margens.',
    'Os dedos longos permitem caminhar sobre a vegetação flutuante sem afundar.'],
  ['sabia-poca', 'Sabiá-poca', 'Turdus amaurochalinus', 'Cabanis, 1850', 'Passeriformes', 'Turdidae', 'LC',
    'Sabiá acinzentado de bico amarelo e garganta estriada, pousado sobre uma mureta.',
    'Sabiá de matas, parques e áreas abertas arborizadas, com dieta de frutos e invertebrados.',
    'Realiza deslocamentos sazonais, sendo mais comum em algumas regiões durante o inverno.'],
  ['guaracava-de-barriga-amarela', 'Guaracava-de-barriga-amarela', 'Elaenia flavogaster', '(Thunberg, 1822)', 'Passeriformes', 'Tyrannidae', 'LC',
    'Pequena ave de topete eriçado e ventre amarelado, pousada em um galho fino.',
    'Pequeno tiranídeo de áreas abertas com árvores, jardins e bordas de mata.',
    'Ao se agitar, ergue o topete e revela uma faixa branca escondida no alto da cabeça.'],
  ['saci', 'Saci', 'Tapera naevia', '(Linnaeus, 1766)', 'Cuculiformes', 'Cuculidae', 'LC',
    'Ave de dorso estriado de marrom e preto com topete eriçado, pousada entre galhos.',
    'Ave de áreas abertas com arbustos, conhecida pelo canto insistente ouvido inclusive à noite.',
    'É parasita de ninhos: a fêmea põe ovos em ninhos de outras aves, que criam o filhote.'],
  ['pica-pau-branco', 'Pica-pau-branco', 'Melanerpes candidus', '(Otto, 1796)', 'Piciformes', 'Picidae', 'LC',
    'Pica-pau de cabeça e ventre brancos, asas pretas e anel amarelo ao redor do olho, sobre um tronco.',
    'Pica-pau de áreas abertas e semiabertas, que costuma andar em pequenos grupos.',
    'Além de insetos, consome frutos, néctar e até mel de colmeias de abelhas e vespas.'],
  ['peitica', 'Peitica', 'Empidonomus varius', '(Vieillot, 1818)', 'Passeriformes', 'Tyrannidae', 'LC',
    'Ave de costas com sobrancelha clara, asas com bordas brancas e cauda ferrugínea, pousada em um galho.',
    'Tiranídeo de bordas de mata e áreas arborizadas, que caça insetos e come frutos.',
    'É uma espécie migratória, que chega ao Sudeste principalmente na primavera e no verão.'],
  ['jacuguacu', 'Jacuguaçu', 'Penelope obscura', 'Temminck, 1815', 'Galliformes', 'Cracidae', 'LC',
    'Ave grande e escura de cauda longa e barbela vermelha na garganta, caminhando em chão de terra.',
    'Ave de grande porte de matas e capões, com dieta baseada em frutos, folhas e brotos.',
    'Por comer muitos frutos, ajuda a regenerar florestas ao espalhar sementes; é sensível à caça.'],
  ['sabia-laranjeira', 'Sabiá-laranjeira', 'Turdus rufiventris', 'Vieillot, 1818', 'Passeriformes', 'Turdidae', 'LC',
    'Sabiá de dorso pardo e ventre alaranjado, pousado em um galho coberto de musgo.',
    'Um dos sabiás mais conhecidos do país, comum em matas, parques e quintais.',
    'É a ave-símbolo do Brasil, oficializada por decreto em 2002.'],
  ['juriti-pupu', 'Juriti-pupu', 'Leptotila verreauxi', 'Bonaparte, 1855', 'Columbiformes', 'Columbidae', 'LC',
    'Pomba de plumagem pardo-rosada e pés vermelhos, pousada sobre um toco de madeira.',
    'Pomba de chão de matas e bordas, que se alimenta de sementes e frutos caídos.',
    'O canto grave, lembrando “pu-pu”, dá origem ao nome popular.'],
  ['gaviao-carijo', 'Gavião-carijó', 'Rupornis magnirostris', '(Gmelin, 1788)', 'Accipitriformes', 'Accipitridae', 'LC',
    'Gavião de dorso marrom, peito barrado e olhos e pernas amarelos, pousado em um mourão.',
    'Gavião mais comum do Brasil, presente de bordas de mata a áreas urbanas.',
    'Caça insetos grandes, lagartos e pequenos roedores, ajudando no controle dessas populações.'],
  ['tico-tico', 'Tico-tico', 'Zonotrichia capensis', '(Statius Muller, 1776)', 'Passeriformes', 'Passerellidae', 'LC',
    'Pequena ave com cabeça listrada de cinza e preto e colar ferrugíneo na nuca, pousada em um galho.',
    'Pequena ave granívora de áreas abertas, jardins e cidades.',
    'Seus ninhos são frequentemente parasitados pelo chupim, que deixa ovos para o tico-tico criar.'],
  ['juruviara', 'Juruviara', 'Vireo chivi', '(Vieillot, 1817)', 'Passeriformes', 'Vireonidae', 'LC',
    'Pequena ave de dorso verde-oliva, ventre claro e sobrancelha branca, pousada em um galho.',
    'Pequena ave de copas de árvores, que procura insetos entre as folhas.',
    'Canta repetidamente durante o dia inteiro, o que facilita a detecção por vocalização.'],
  ['passaro-preto', 'Pássaro-preto', 'Gnorimopsar chopi', '(Vieillot, 1819)', 'Passeriformes', 'Icteridae', 'LC',
    'Ave inteiramente preta de bico pontiagudo, pousada em um galho seco.',
    'Ave de áreas abertas e semiabertas, que vive em bandos e tem canto variado.',
    'É muito visada pelo tráfico de animais silvestres por causa do canto.'],
  ['andorinha-pequena-de-casa', 'Andorinha-pequena-de-casa', 'Pygochelidon cyanoleuca', '(Vieillot, 1817)', 'Passeriformes', 'Hirundinidae', 'LC',
    'Pequena andorinha de dorso azul metálico e garganta branca, pousada em um arame.',
    'Andorinha muito comum em cidades e áreas abertas, que se alimenta de insetos em voo.',
    'Faz ninhos em frestas de construções, como telhados, muros e pontes.'],
  ['suiriri', 'Suiriri', 'Tyrannus melancholicus', 'Vieillot, 1819', 'Passeriformes', 'Tyrannidae', 'LC',
    'Ave de cabeça cinza, dorso pardo e ventre amarelo vivo, pousada em um galho seco.',
    'Tiranídeo de áreas abertas, que fica em poleiros expostos e captura insetos em voo.',
    'É bastante agressivo na defesa do território, chegando a atacar gaviões.'],
  ['andorinhao-do-temporal', 'Andorinhão-do-temporal', 'Chaetura meridionalis', 'Hellmayr, 1907', 'Apodiformes', 'Apodidae', 'LC',
    'Andorinhão pardo-escuro de asas longas e curvas, em pleno voo contra o céu azul.',
    'Ave de voo rápido que passa quase todo o tempo no ar, caçando insetos.',
    'Os pés são muito curtos e não permitem pousar em galhos; ele se agarra a paredes verticais.'],
]

const mamiferos: Linha[] = [
  ['paca', 'Paca', 'Cuniculus paca', '(Linnaeus, 1766)', 'Rodentia', 'Cuniculidae', 'LC',
    'Roedor de porte médio com fileiras de manchas claras na lateral do corpo, registrado à noite por armadilha fotográfica com infravermelho.',
    'Roedor noturno de matas próximas a cursos d’água, que se alimenta de frutos, sementes e raízes.',
    'É uma ótima nadadora e costuma fugir para a água quando se sente ameaçada.'],
  ['gato-do-mato', 'Gato-do-mato-pequeno', 'Leopardus guttulus', '(Hensel, 1872)', 'Carnivora', 'Felidae', 'VU',
    'Pequeno felino de pelagem manchada caminhando entre a vegetação, com os olhos refletindo a luz infravermelho da armadilha fotográfica à noite.',
    'Um dos menores felinos do Brasil, associado a ambientes florestais da Mata Atlântica.',
    'Até 2013 era considerado a mesma espécie que Leopardus tigrinus; estudos genéticos mostraram que são espécies distintas.'],
  ['tatu-galinha', 'Tatu-galinha', 'Dasypus novemcinctus', 'Linnaeus, 1758', 'Cingulata', 'Dasypodidae', 'LC',
    'Tatu com carapaça de cintas transversais e cauda longa forrageando no folhiço, registrado à noite por armadilha fotográfica com infravermelho.',
    'Tatu de ampla distribuição nas Américas, que escava tocas e se alimenta de invertebrados do solo.',
    'A fêmea costuma gerar quatro filhotes idênticos, originados de um único óvulo.'],
  ['gamba', 'Gambá', 'Didelphis aurita', '(Wied-Neuwied, 1826)', 'Didelphimorphia', 'Didelphidae', 'LC',
    'Marsupial de pelagem escura, face clara com listras e cauda longa enrolada, caminhando no folhiço à noite diante da armadilha fotográfica.',
    'Marsupial onívoro e noturno, comum em matas e também em áreas urbanas.',
    'Tem resistência a venenos de algumas serpentes e ajuda a controlar populações de animais peçonhentos.'],
  ['cachorro-do-mato', 'Cachorro-do-mato', 'Cerdocyon thous', '(Linnaeus, 1766)', 'Carnivora', 'Canidae', 'LC',
    'Canídeo de pelagem acinzentada com garganta clara e orelhas eretas em meio a capim alto, com um segundo indivíduo ao fundo, registrado de dia por armadilha fotográfica.',
    'Canídeo silvestre de dieta variada, frequentemente registrado em casais.',
    'É muito afetado por atropelamentos e por doenças transmitidas por cães domésticos.'],
  ['capivara', 'Capivara', 'Hydrochoerus hydrochaeris', '(Linnaeus, 1766)', 'Rodentia', 'Caviidae', 'LC',
    'Grande roedor de focinho largo e orelhas pequenas sentado ao lado de um tronco caído, registrado à noite por armadilha fotográfica com infravermelho.',
    'Maior roedor do mundo, vive em grupos próximos a rios, lagos e áreas alagadas.',
    'Tem membranas entre os dedos, que ajudam a nadar, e pode ficar alguns minutos submersa.'],
]

/** Fotos registradas pela própria equipe. As demais aguardam confirmação de origem. */
const fotosProprias = new Set(['tie-sangue', 'paca', 'gato-do-mato', 'tatu-galinha', 'gamba', 'cachorro-do-mato', 'capivara'])

function criar(grupo: Grupo) {
  return ([id, nomePopular, nomeCientifico, autoria, ordem, familia, iucn, descricaoFoto, visaoGeral, curiosidade]: Linha): Especie => ({
    id,
    grupo,
    nomePopular,
    nomeCientifico,
    autoria,
    ordem,
    familia,
    iucn,
    foto: `/especies/${id}.png`,
    descricaoFoto,
    credito: fotosProprias.has(id) ? registroProprio : undefined,
    visaoGeral,
    curiosidade,
    identificacaoConfirmada: false,
  })
}

export const especies: Especie[] = [...aves.map(criar('avifauna')), ...mamiferos.map(criar('mastofauna'))]

export function buscarEspecie(id: string) {
  return especies.find((e) => e.id === id)
}

export function referenciasDe(especie: Especie): Referencia[] {
  const nome = encodeURIComponent(especie.nomeCientifico)
  const base: Referencia[] = [
    { titulo: `IUCN Red List: ${especie.nomeCientifico}`, url: `https://www.iucnredlist.org/search?query=${nome}&searchType=species` },
    { titulo: `GBIF: ${especie.nomeCientifico}`, url: `https://www.gbif.org/species/search?q=${nome}` },
  ]

  if (especie.grupo === 'avifauna') {
    return [
      { titulo: `WikiAves: ${especie.nomePopular}`, url: `https://www.wikiaves.com.br/wiki/${especie.id}` },
      ...base,
      {
        titulo: 'Pacheco et al. (2021). Annotated checklist of the birds of Brazil (CBRO). Ornithology Research, 29, 94–105.',
        url: 'https://doi.org/10.1007/s43388-021-00058-x',
      },
    ]
  }

  return [
    ...base,
    { titulo: 'ICMBio: Sistema de Avaliação do Risco de Extinção da Biodiversidade (SALVE)', url: 'https://salve.icmbio.gov.br/' },
    { titulo: 'Abreu et al. (2023). Lista de Mamíferos do Brasil. Sociedade Brasileira de Mastozoologia.', url: 'https://www.sbmz.org/mamiferos-do-brasil/' },
  ]
}
