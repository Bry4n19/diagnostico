type Logo = {
  src: string
  alt: string
  width: number
  height: number
}

type Site = {
  nome: string
  /** Coloque o arquivo da logo oficial em /public e preencha este campo. */
  logo: Logo | null
  /** Link do perfil oficial, ex.: https://www.instagram.com/seu_perfil */
  instagramUrl: string
  sobre: {
    tema: string
    /** Campos vazios não aparecem no site. */
    objetivo: string
    problema: string
    proposta: string
  }
}

export const site: Site = {
  nome: 'Catálogo de Espécies da Fauna',
  logo: null,
  instagramUrl: '',
  sobre: {
    tema: 'Diagnóstico de fauna realizado a partir de registros de armadilhas fotográficas, reunindo as espécies de aves (avifauna) e mamíferos (mastofauna) identificadas no levantamento de campo.',
    objetivo: '',
    problema: '',
    proposta: '',
  },
}
