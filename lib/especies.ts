export type Grupo = 'avifauna' | 'mastofauna'

export type StatusIUCN = 'LC' | 'NT' | 'VU' | 'EN' | 'CR' | 'DD'

export const statusIUCN: Record<StatusIUCN, { rotulo: string; classe: string }> = {
  LC: { rotulo: 'Pouco preocupante', classe: 'bg-iucn-lc/20 text-iucn-lc-fg ring-iucn-lc-ring/40' },
  NT: { rotulo: 'Quase ameaçada', classe: 'bg-iucn-nt/20 text-iucn-nt-fg ring-iucn-nt-ring/40' },
  VU: { rotulo: 'Vulnerável', classe: 'bg-iucn-vu/20 text-iucn-vu-fg ring-iucn-vu-ring/50' },
  EN: { rotulo: 'Em perigo', classe: 'bg-iucn-en/20 text-iucn-en-fg ring-iucn-en-ring/50' },
  CR: { rotulo: 'Criticamente em perigo', classe: 'bg-iucn-cr/20 text-iucn-cr-fg ring-iucn-cr-ring/50' },
  DD: { rotulo: 'Dados insuficientes', classe: 'bg-iucn-dd/20 text-iucn-dd-fg ring-iucn-dd-ring/40' },
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
  ['alma-de-gato', 'Alma-de-gato', 'Piaya cayana', '(Linnaeus, 1766)', 'Cuculiformes', 'Cuculidae', 'LC',
    'Ave de dorso castanho-avermelhado, ventre acinzentado e cauda muito longa com pontas brancas.',
    'Cuculídeo de matas, bordas e áreas arborizadas, que se desloca pulando entre os galhos à procura de lagartas.',
    'Ao contrário de outros cucos, não parasita ninhos: o casal constrói o próprio ninho e cria os filhotes.'],
  ['andorinha-serradora', 'Andorinha-serradora', 'Stelgidopteryx ruficollis', '(Vieillot, 1817)', 'Passeriformes', 'Hirundinidae', 'LC',
    'Andorinha de dorso pardo, garganta ocrácea e ventre claro.',
    'Andorinha de áreas abertas próximas a rios e lagos, que caça insetos em voo baixo sobre a água.',
    'O nome vem das pequenas serrilhas na borda da primeira pena da asa, perceptíveis ao toque.'],
  ['anu-branco', 'Anu-branco', 'Guira guira', '(Gmelin, 1788)', 'Cuculiformes', 'Cuculidae', 'LC',
    'Ave de plumagem creme estriada de marrom, topete eriçado alaranjado e bico laranja, pousada em um galho seco.',
    'Ave de campos, pastagens e áreas abertas, que vive em bandos barulhentos e caça insetos e pequenos vertebrados.',
    'Os bandos costumam se aquecer juntos ao sol, pousados lado a lado, logo nas primeiras horas da manhã.'],
  ['arapacu-do-cerrado', 'Arapaçu-do-cerrado', 'Lepidocolaptes angustirostris', '(Vieillot, 1818)', 'Passeriformes', 'Dendrocolaptidae', 'LC',
    'Ave de dorso pardo-avermelhado, ventre claro e sobrancelha branca, escalando um tronco com o bico fino e curvo.',
    'Arapaçu de cerrados, campos com árvores e áreas abertas, que procura insetos nas cascas dos troncos.',
    'Usa a cauda de penas rígidas como apoio para subir pelos troncos, como um pica-pau.'],
  ['bem-te-vi', 'Bem-te-vi', 'Pitangus sulphuratus', '(Linnaeus, 1766)', 'Passeriformes', 'Tyrannidae', 'LC',
    'Ave de ventre amarelo, dorso pardo e cabeça com faixas preta e branca, pousada em um galho fino.',
    'Um dos pássaros mais conhecidos do Brasil, comum em cidades, campos e beiras de rios.',
    'Tem dieta muito variada: come insetos, frutos, pequenos peixes e até girinos.'],
  ['bem-te-vi-rajado', 'Bem-te-vi-rajado', 'Myiodynastes maculatus', '(Statius Muller, 1776)', 'Passeriformes', 'Tyrannidae', 'LC',
    'Ave de plumagem estriada de marrom e branco, faixa escura no olho e cauda ferrugínea, pousada entre folhagens.',
    'Tiranídeo de bordas de mata e áreas arborizadas, que caça insetos grandes e come frutos.',
    'É migratório, chegando ao Sudeste na primavera para se reproduzir.'],
  ['bico-chato-de-orelha-preta', 'Bico-chato-de-orelha-preta', 'Tolmomyias sulphurescens', '(Spix, 1825)', 'Passeriformes', 'Rhynchocyclidae', 'LC',
    'Pequena ave verde-oliva de cabeça acinzentada, mancha escura atrás do olho e asas com bordas amareladas, pousada em um galho com musgo.',
    'Pequena ave de matas e bordas, que captura insetos sob as folhas com voos curtos.',
    'Constrói um ninho em forma de bolsa pendurada, com entrada voltada para baixo.'],
  ['bico-de-lacre', 'Bico-de-lacre', 'Estrilda astrild', '(Linnaeus, 1758)', 'Passeriformes', 'Estrildidae', 'LC',
    'Pequena ave parda finamente barrada, com bico vermelho e máscara vermelha ao redor do olho, pousada em um capim.',
    'Pequena ave granívora de capinzais, brejos e áreas abertas, que vive em bandos.',
    'É uma espécie africana introduzida no Brasil, provavelmente no século XIX.'],
  ['cambacica', 'Cambacica', 'Coereba flaveola', '(Linnaeus, 1758)', 'Passeriformes', 'Thraupidae', 'LC',
    'Pequena ave de ventre amarelo, sobrancelha branca e asas cinzentas abertas, segurando um graveto no bico.',
    'Pequena ave muito comum em jardins e matas, que se alimenta principalmente de néctar.',
    'Costuma furar a base das flores para tirar o néctar sem polinizá-las.'],
  ['canario-da-terra', 'Canário-da-terra', 'Sicalis flaveola', '(Linnaeus, 1766)', 'Passeriformes', 'Thraupidae', 'LC',
    'Ave amarela com a fronte alaranjada, pousada em uma estrutura de madeira contra o céu azul.',
    'Ave granívora de áreas abertas, campos e cidades, que costuma andar no chão em busca de sementes.',
    'Muitas vezes ocupa ninhos abandonados de outras aves, como o do joão-de-barro.'],
  ['carao', 'Carão', 'Aramus guarauna', '(Linnaeus, 1766)', 'Gruiformes', 'Aramidae', 'LC',
    'Ave pernalta marrom pintalgada de branco, com bico longo segurando um molusco, caminhando na margem da água.',
    'Ave de brejos, lagoas e margens de rios, alimenta-se principalmente de caramujos aquáticos.',
    'O bico tem a ponta levemente torcida, o que ajuda a extrair o caramujo da concha.'],
  ['carrapateiro', 'Carrapateiro', 'Milvago chimachima', '(Vieillot, 1816)', 'Falconiformes', 'Falconidae', 'LC',
    'Ave de rapina de cabeça e ventre amarelados, dorso marrom-escuro e cauda barrada, pousada em um galho claro.',
    'Ave de rapina de áreas abertas e pastagens, de dieta variada e oportunista.',
    'O nome vem do hábito de pousar sobre bois e capivaras para comer carrapatos.'],
  ['corruira', 'Corruíra', 'Troglodytes musculus', 'Naumann, 1823', 'Passeriformes', 'Troglodytidae', 'LC',
    'Pequena ave parda de cauda barrada e erguida, pousada em um galho claro.',
    'Pequena ave muito comum em quintais, jardins e bordas de mata, que caça insetos e aranhas.',
    'Apesar do tamanho, tem um canto alto e melodioso, ouvido o ano todo.'],
  ['encontro', 'Encontro', 'Icterus pyrrhopterus', '(Vieillot, 1819)', 'Passeriformes', 'Icteridae', 'LC',
    'Ave preta com mancha alaranjada no ombro, pousada em uma inflorescência alaranjada.',
    'Ave de matas e bordas, que se alimenta de insetos, frutos e néctar.',
    'O nome se refere à mancha colorida no “encontro” da asa, a região do ombro.'],
  ['filipe', 'Filipe', 'Myiophobus fasciatus', '(Statius Muller, 1776)', 'Passeriformes', 'Tyrannidae', 'LC',
    'Pequena ave parda de garganta branca e asas com faixas claras, pousada em um arame farpado.',
    'Pequeno tiranídeo de capoeiras, pastos sujos e bordas de mata, que captura insetos.',
    'Possui uma mancha amarela escondida no alto da cabeça, exibida quando está agitado.'],
  ['fim-fim', 'Fim-fim', 'Euphonia chlorotica', '(Linnaeus, 1766)', 'Passeriformes', 'Fringillidae', 'LC',
    'Pequena ave de dorso azul-escuro, ventre e fronte amarelos, pousada em um galho.',
    'Pequena ave de bordas de mata e áreas arborizadas, que se alimenta de frutos, principalmente de erva-de-passarinho.',
    'Ajuda a espalhar as sementes da erva-de-passarinho, que germinam nos galhos das árvores.'],
  ['guaracava-grande', 'Guaracava-grande', 'Elaenia spectabilis', 'Pelzeln, 1868', 'Passeriformes', 'Tyrannidae', 'LC',
    'Ave de cabeça acinzentada com topete eriçado, peito cinza e ventre amarelado, pousada em galhos secos.',
    'Maior guaracava do país, de bordas de mata e áreas arborizadas, que come frutos e insetos.',
    'Diferente de outras guaracavas, não tem a faixa branca no alto da cabeça.'],
  ['irere', 'Irerê', 'Dendrocygna viduata', '(Linnaeus, 1766)', 'Anseriformes', 'Anatidae', 'LC',
    'Marreca de face branca, pescoço castanho, flancos barrados e pernas longas.',
    'Marreca de lagoas, brejos e represas, que vive em bandos e se alimenta de plantas aquáticas e sementes.',
    'O nome imita o assobio característico “i-re-rê”, emitido principalmente em voo e à noite.'],
  ['jacana', 'Jaçanã', 'Jacana jacana', '(Linnaeus, 1766)', 'Charadriiformes', 'Jacanidae', 'LC',
    'Ave de corpo castanho e cabeça preta, com escudo frontal vermelho, bico amarelo e asas amarelo-claras abertas em voo sobre a água.',
    'Ave de lagoas e brejos com vegetação flutuante, sobre a qual caminha em busca de insetos.',
    'Os machos chocam os ovos e cuidam dos filhotes, enquanto a fêmea defende o território.'],
  ['joao-de-barro', 'João-de-barro', 'Furnarius rufus', '(Gmelin, 1788)', 'Passeriformes', 'Furnariidae', 'LC',
    'Ave de plumagem marrom-avermelhada e garganta clara, com cauda alaranjada.',
    'Ave de áreas abertas, campos e cidades, que procura insetos caminhando pelo chão.',
    'Constrói ninhos de barro em forma de forno, com uma divisória interna que protege os ovos.'],
  ['lavadeira-mascarada', 'Lavadeira-mascarada', 'Fluvicola nengeta', '(Linnaeus, 1766)', 'Passeriformes', 'Tyrannidae', 'LC',
    'Ave branca de asas pardas e faixa preta atravessando o olho, pousada sobre um tronco.',
    'Tiranídeo de margens de lagos, rios e áreas úmidas, também comum em gramados urbanos.',
    'Abre e fecha a cauda de ponta preta com frequência enquanto caça insetos no chão.'],
  ['maria-cavaleira', 'Maria-cavaleira', 'Myiarchus ferox', '(Gmelin, 1789)', 'Passeriformes', 'Tyrannidae', 'LC',
    'Ave de cabeça pardo-escura levemente eriçada, garganta cinza-clara e ventre amarelo-claro, pousada em galhos secos.',
    'Tiranídeo de bordas de mata, capoeiras e áreas arborizadas, que caça insetos a partir de poleiros.',
    'Faz o ninho em ocos de árvores ou cavidades abandonadas por pica-paus.'],
  ['mariquita', 'Mariquita', 'Setophaga pitiayumi', '(Vieillot, 1817)', 'Passeriformes', 'Parulidae', 'LC',
    'Pequena ave de dorso cinza-azulado, máscara escura, faixa branca na asa e peito amarelo-alaranjado, pousada em um galho fino.',
    'Pequena ave de copas de árvores, que procura insetos entre folhas e barbas-de-velho.',
    'Constrói o ninho escondido dentro de tufos de barba-de-velho (Tillandsia usneoides).'],
  ['neinei', 'Neinei', 'Megarynchus pitangua', '(Linnaeus, 1766)', 'Passeriformes', 'Tyrannidae', 'LC',
    'Ave de ventre amarelo, cabeça com faixas preta e branca e bico largo e escuro, pousada em um galho.',
    'Tiranídeo de bordas de mata e áreas arborizadas, parecido com o bem-te-vi, mas de bico bem mais largo.',
    'O nome imita o chamado anasalado e repetido, muito diferente do canto do bem-te-vi.'],
  ['papagaio-verdadeiro', 'Papagaio-verdadeiro', 'Amazona aestiva', '(Linnaeus, 1758)', 'Psittaciformes', 'Psittacidae', 'NT',
    'Papagaio verde com fronte azul-turquesa, face amarela e mancha vermelha na asa, pousado em um tronco seco contra o céu.',
    'Papagaio de matas, cerrados e áreas abertas arborizadas, que vive em casais ou bandos.',
    'É uma das aves mais capturadas pelo tráfico de animais silvestres no Brasil.'],
  ['periquitao', 'Periquitão', 'Psittacara leucophthalmus', '(Statius Muller, 1776)', 'Psittaciformes', 'Psittacidae', 'LC',
    'Periquito grande todo verde, com pequenas manchas vermelhas na cabeça e no encontro da asa, pousado em um galho.',
    'Periquito de grande porte comum em matas, bordas e cidades, onde forma bandos barulhentos.',
    'Costuma dormir em grandes grupos em árvores altas, palmeiras ou até em vãos de prédios.'],
  ['periquito-de-encontro-amarelo', 'Periquito-de-encontro-amarelo', 'Brotogeris chiriri', '(Vieillot, 1818)', 'Psittaciformes', 'Psittacidae', 'LC',
    'Periquitos verdes com mancha amarela na asa, comendo sementes em um comedouro de madeira.',
    'Periquito de cerrados, matas secas e áreas urbanas arborizadas, que vive em bandos.',
    'A faixa amarela no “encontro” da asa fica bem visível em voo.'],
  ['periquito-rico', 'Periquito-rico', 'Brotogeris tirica', '(Gmelin, 1788)', 'Psittaciformes', 'Psittacidae', 'LC',
    'Periquito todo verde de cauda longa e bico claro, pousado na ponta de um galho contra o céu azul.',
    'Periquito endêmico da Mata Atlântica, comum também em parques e áreas urbanas.',
    'Alimenta-se de frutos, sementes, flores e néctar, visitando árvores floridas em bandos.'],
  ['pia-cobra', 'Pia-cobra', 'Geothlypis aequinoctialis', '(Gmelin, 1789)', 'Passeriformes', 'Parulidae', 'LC',
    'Pequena ave de dorso verde-oliva, ventre amarelo e máscara preta com coroa cinza, pousada em um galho fino.',
    'Pequena ave de capinzais, brejos e vegetação densa próxima à água.',
    'Só o macho tem a máscara preta; a fêmea tem a face acinzentada.'],
  ['pintassilgo', 'Pintassilgo', 'Spinus magellanicus', '(Vieillot, 1805)', 'Passeriformes', 'Fringillidae', 'LC',
    'Pequena ave amarela de cabeça preta e asas pretas com faixas amarelas, pousada em um arame.',
    'Pequena ave granívora de campos, bordas de mata e áreas abertas.',
    'Muito visado pelo tráfico por causa do canto, o que reduziu suas populações em várias regiões.'],
  ['pitiguari', 'Pitiguari', 'Cyclarhis gujanensis', '(Gmelin, 1789)', 'Passeriformes', 'Vireonidae', 'LC',
    'Ave de cabeça cinza com sobrancelha ferrugínea, olho vermelho, peito amarelo e bico robusto, pousada em um galho.',
    'Ave de copas de árvores, mais ouvida do que vista, que caça lagartas e outros insetos.',
    'Seu canto forte e repetitivo é um dos sons mais comuns em matas e parques.'],
  ['pomba-asa-branca', 'Pomba-asa-branca', 'Patagioenas picazuro', '(Temminck, 1813)', 'Columbiformes', 'Columbidae', 'LC',
    'Pomba grande de plumagem vinácea, pescoço com escamas claras, olho alaranjado e pés vermelhos, caminhando no chão.',
    'Pomba grande de áreas abertas, campos e cidades, que se alimenta de sementes e grãos.',
    'A faixa branca na asa, visível principalmente em voo, dá nome à espécie.'],
  ['risadinha', 'Risadinha', 'Camptostoma obsoletum', '(Temminck, 1824)', 'Passeriformes', 'Tyrannidae', 'LC',
    'Pequena ave cinzenta com garganta clara e asas com faixas brancas, pousada em um galho com folhas.',
    'Um dos menores tiranídeos do Brasil, comum em bordas de mata, cerrados e jardins.',
    'O canto descendente lembra uma risada curta, o que deu origem ao nome popular.'],
  ['rolinha-roxa', 'Rolinha-roxa', 'Columbina talpacoti', '(Temminck, 1810)', 'Columbiformes', 'Columbidae', 'LC',
    'Pequena pomba de plumagem castanho-rosada, cabeça acinzentada e pintas escuras nas asas, pousada sobre um toco.',
    'Pequena pomba muito comum em áreas abertas e cidades, que procura sementes no chão.',
    'Reproduz-se quase o ano todo e pode criar várias ninhadas em sequência.'],
  ['sabia-do-campo', 'Sabiá-do-campo', 'Mimus saturninus', '(Lichtenstein, 1823)', 'Passeriformes', 'Mimidae', 'LC',
    'Ave parda de sobrancelha clara e cauda longa, caminhando sobre o asfalto.',
    'Ave de campos, cerrados e áreas abertas, frequente em gramados urbanos.',
    'É capaz de imitar o canto de outras aves, característica comum aos mimídeos.'],
  ['sai-andorinha', 'Saí-andorinha', 'Tersina viridis', '(Illiger, 1811)', 'Passeriformes', 'Thraupidae', 'LC',
    'Fêmea de plumagem verde com flancos barrados, pousada entre galhos.',
    'Ave de bordas de mata e áreas arborizadas, que se alimenta de frutos e insetos capturados em voo.',
    'O macho é azul-turquesa com máscara preta; a fêmea é verde, como a da foto.'],
  ['sanhaco-cinzento', 'Sanhaço-cinzento', 'Thraupis sayaca', '(Linnaeus, 1766)', 'Passeriformes', 'Thraupidae', 'LC',
    'Ave cinza-azulada comendo um mamão maduro.',
    'Um dos pássaros mais comuns em cidades, parques e bordas de mata, com dieta rica em frutos.',
    'Visita com frequência comedouros com frutas e ajuda a dispersar sementes.'],
  ['sanhaco-do-coqueiro', 'Sanhaço-do-coqueiro', 'Thraupis palmarum', '(Wied-Neuwied, 1821)', 'Passeriformes', 'Thraupidae', 'LC',
    'Ave verde-oliva com reflexos amarelados, pousada em um galho entre folhagens.',
    'Ave de áreas arborizadas e cidades, muito associada a palmeiras e coqueiros.',
    'Costuma procurar insetos e frutos entre as folhas das palmeiras, onde também faz o ninho.'],
  ['tie-preto', 'Tiê-preto', 'Tachyphonus coronatus', '(Vieillot, 1822)', 'Passeriformes', 'Thraupidae', 'LC',
    'Macho de plumagem toda preta e brilhante, pousado em um galho.',
    'Ave de bordas de mata e capoeiras da Mata Atlântica, que come frutos e insetos.',
    'O macho tem uma coroa vermelha escondida, exibida apenas quando está agitado; a fêmea é ferrugínea.'],
  ['trinca-ferro', 'Trinca-ferro', 'Saltator similis', "d'Orbigny & Lafresnaye, 1837", 'Passeriformes', 'Thraupidae', 'LC',
    'Ave de dorso esverdeado, cabeça cinza e sobrancelha branca, pousada em um galho.',
    'Ave de bordas de mata e capoeiras, que se alimenta de frutos, folhas e sementes.',
    'O bico forte, capaz de quebrar sementes duras, deu origem ao nome; é muito visado pelo tráfico.'],
  ['tucano-de-bico-verde', 'Tucano-de-bico-verde', 'Ramphastos dicolorus', 'Linnaeus, 1766', 'Piciformes', 'Ramphastidae', 'LC',
    'Tucano de bico verde-claro, peito amarelo-alaranjado e ventre vermelho, pousado em um galho.',
    'Tucano da Mata Atlântica, que se alimenta de frutos, insetos e ocasionalmente ovos e filhotes de outras aves.',
    'É um importante dispersor de sementes de palmeiras, como a do palmito-juçara.'],
  ['tucanucu', 'Tucanuçu', 'Ramphastos toco', 'Statius Muller, 1776', 'Piciformes', 'Ramphastidae', 'LC',
    'Tucano preto de garganta branca e enorme bico alaranjado com mancha preta na ponta, pousado em um galho.',
    'Maior tucano do mundo, comum em cerrados, matas abertas e áreas urbanas arborizadas.',
    'O bico, apesar de grande, é leve e ajuda a regular a temperatura do corpo.'],
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
  ['gamba', 'Gambá-de-orelha-branca', 'Didelphis albiventris', 'Lund, 1840', 'Didelphimorphia', 'Didelphidae', 'LC',
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
  ['gato-maracaja', 'Gato-maracajá', 'Leopardus wiedii', '(Schinz, 1821)', 'Carnivora', 'Felidae', 'VU',
    'Imagem pendente: ainda não há fotografia confiável desta espécie no acervo.',
    'Felino pequeno e arborícola de matas, com olhos grandes e cauda longa que ajudam no equilíbrio entre os galhos.',
    'Consegue girar os tornozelos traseiros e descer de árvores de cabeça para baixo, como um esquilo.'],
]

/** Fotos registradas pela própria equipe. As demais aguardam confirmação de origem. */
const fotosProprias = new Set(['tie-sangue', 'paca', 'gato-do-mato', 'tatu-galinha', 'gamba', 'cachorro-do-mato', 'capivara'])

/** Espécies com foto em .png; as demais usam /public/especies/<id>.jpg. */
const fotosPng = new Set([
  'tie-sangue', 'carcara', 'andorinha-grande', 'joao-tenenem', 'anu-preto', 'pica-pau-de-cabeca-amarela',
  'galinha-dagua', 'sabia-poca', 'guaracava-de-barriga-amarela', 'saci', 'pica-pau-branco', 'peitica', 'jacuguacu',
  'sabia-laranjeira', 'gaviao-carijo', 'tico-tico', 'juruviara', 'andorinha-pequena-de-casa', 'suiriri',
  'andorinhao-do-temporal', 'paca', 'gato-do-mato', 'tatu-galinha', 'gamba', 'cachorro-do-mato', 'capivara',
])

/** Sem fotografia confiável: o card exibe "Imagem pendente". */
export const imagensPendentes = new Set(['gato-maracaja'])

function caminhoFoto(id: string) {
  if (imagensPendentes.has(id)) return ''
  return `/especies/${id}.${fotosPng.has(id) ? 'png' : 'jpg'}`
}

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
    foto: caminhoFoto(id),
    descricaoFoto,
    credito: fotosProprias.has(id) ? registroProprio : undefined,
    visaoGeral,
    curiosidade,
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
