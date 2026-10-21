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
  logo: {
    src: '/logo.png',
    alt: 'Logo do Catálogo de Espécies da Fauna: silhuetas de um cachorro-do-mato, um mamífero, uma capivara e uma ave em verde-claro',
    width: 965,
    height: 925,
  },
  instagramUrl: 'https://www.instagram.com/faunacjb',
  instagramUsuario: '@faunacjb',
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
    'Este TCC tem como objetivo identificar e catalogar espécies de mamíferos e aves presentes na área verde da ETEC Cônego José Bento, em Jacareí-SP. O estudo busca compreender a biodiversidade local e os impactos da urbanização sobre a fauna, contribuindo para a conservação ambiental. Os resultados foram reunidos em um catálogo informativo, que poderá servir de base para futuras pesquisas e ações de preservação.',
  ],
}
