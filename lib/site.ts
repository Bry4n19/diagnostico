type Imagem = {
  src: string
  alt: string
  width: number
  height: number
}

type Site = {
  nome: string
  /** Coloque o arquivo da logo oficial em /public e preencha este campo. */
  logo: Imagem | null
  instagramUrl: string
  instagramUsuario: string
  areaDeEstudo: {
    nome: string
    local: string
    mapa: Imagem
  }
  sobre: string[]
}

export const site: Site = {
  nome: 'Catálogo de Espécies da Fauna',
  logo: null,
  instagramUrl: 'https://www.instagram.com/faunacjba',
  instagramUsuario: '@faunacjba',
  areaDeEstudo: {
    nome: 'ETEC Cônego José Bento',
    local: 'Jacareí - SP',
    mapa: {
      src: '/mapa-area-de-estudo.png',
      alt: 'Mapa de satélite da área de estudo na ETEC Cônego José Bento, delimitada em verde, com as Áreas de Preservação Permanente e os corpos d’água, e um recorte mostrando a localização no município de Jacareí-SP.',
      width: 960,
      height: 640,
    },
  },
  sobre: [
    'Este Trabalho de Conclusão de Curso tem como objetivo identificar e catalogar espécies da mastofauna (mamíferos) e da avifauna (aves) presentes na área de preservação ambiental da ETEC Cônego José Bento, localizada em Jacareí-SP.',
    'Situada em uma região de alta densidade urbana, a escola possui uma área verde que abriga uma diversidade de espécies, mas que sofre impactos decorrentes das atividades humanas e da urbanização. Nesse contexto, o estudo busca compreender a fauna local e contribuir para sua valorização e conservação.',
    'A pesquisa possui caráter aplicado, descritivo e de campo, com abordagem qualitativa. Durante quatro meses, foram realizadas atividades de levantamento e identificação de espécies, complementadas por dados anteriores, observações de campo e consultas a referências bibliográficas e bancos de dados de biodiversidade.',
    'Como resultado, pretende-se elaborar um catálogo informativo da fauna identificada, contribuindo para o conhecimento da biodiversidade local e servindo como base para futuras pesquisas e iniciativas de conservação ambiental.',
  ],
}
