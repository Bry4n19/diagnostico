import { FotoEspecie } from '@/components/foto-especie'
import { AudioLines, Camera, ExternalLink, MapPin } from 'lucide-react'
import { referenciasDe, type Especie } from '@/lib/especies'
import { site } from '@/lib/site'
import { BackLink } from '@/components/back-link'
import { CopyButton } from '@/components/copy-button'
import { CreditoFoto, IucnBadge } from '@/components/species-meta'
import { SpeciesTabs } from '@/components/species-tabs'
import { AvisoMetodologico } from '@/components/methodology-note'

function Paragrafo({ children }: { children: React.ReactNode }) {
  return <p className="max-w-prose leading-relaxed text-muted-foreground text-pretty">{children}</p>
}

export function SpeciesDetail({ especie }: { especie: Especie }) {
  const reino = especie.grupo === 'avifauna' ? 'Aves' : 'Mammalia'
  const [genero] = especie.nomeCientifico.split(' ')
  const ave = especie.grupo === 'avifauna'

  const classificacao: [string, React.ReactNode][] = [
    ['Reino', 'Animalia'],
    ['Filo', 'Chordata'],
    ['Classe', reino],
    ['Ordem', especie.ordem],
    ['Família', especie.familia],
    ['Gênero', <i key="g">{genero}</i>],
    ['Espécie', <span key="e"><i>{especie.nomeCientifico}</i> {especie.autoria}</span>],
  ]

  const abas = [
    {
      id: 'visao-geral',
      rotulo: 'Visão geral',
      conteudo: (
        <div className="flex flex-col gap-4">
          <Paragrafo>{especie.visaoGeral}</Paragrafo>
          <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 text-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-muted-foreground">Status de conservação:</span>
              <IucnBadge status={especie.iucn} completo />
            </div>
            <dl className="grid gap-x-6 gap-y-1 text-xs text-muted-foreground sm:grid-cols-3">
              <div className="flex gap-1">
                <dt>Fonte:</dt>
                <dd className="text-foreground">Lista Vermelha da IUCN</dd>
              </div>
              <div className="flex gap-1">
                <dt>Abrangência:</dt>
                <dd className="text-foreground">global</dd>
              </div>
              <div className="flex gap-1">
                <dt>Data de consulta:</dt>
                <dd>não informada</dd>
              </div>
            </dl>
          </div>
        </div>
      ),
    },
    {
      id: 'caracteristicas',
      rotulo: 'Características',
      conteudo: (
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Classificação taxonômica</h2>
            <dl className="divide-y divide-border overflow-hidden rounded-2xl border border-border">
              {classificacao.map(([rotulo, valor]) => (
                <div key={rotulo} className="flex justify-between gap-4 bg-card px-4 py-2.5 text-sm">
                  <dt className="text-muted-foreground">{rotulo}</dt>
                  <dd className="text-right font-medium">{valor}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Aspecto no registro</h2>
            <Paragrafo>{especie.descricaoFoto}</Paragrafo>
          </div>
        </div>
      ),
    },
    {
      id: 'ocorrencia',
      rotulo: 'Ocorrência na ETEC',
      conteudo: (
        <div className="flex flex-col gap-4">
          <p className="flex items-start gap-3 leading-relaxed text-muted-foreground">
            <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
            <span>
              Registrada na área verde da {site.areaDeEstudo.nome}, {site.areaDeEstudo.local}, durante o período de
              estudo do TCC.
            </span>
          </p>
          <p className="flex items-start gap-3 leading-relaxed text-muted-foreground">
            {ave ? (
              <AudioLines aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
            ) : (
              <Camera aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
            )}
            <span>
              {ave
                ? 'Método de registro: identificação por vocalização (cantos e chamados), com apoio dos aplicativos eBird e Merlin Bird ID.'
                : 'Método de registro: armadilha fotográfica instalada na área de estudo.'}
            </span>
          </p>
        </div>
      ),
    },
    {
      id: 'curiosidades',
      rotulo: 'Curiosidades',
      conteudo: <Paragrafo>{especie.curiosidade}</Paragrafo>,
    },
    {
      id: 'referencias',
      rotulo: 'Referências',
      conteudo: (
        <ul className="flex flex-col gap-3">
          {referenciasDe(especie).map((r) => (
            <li key={r.url}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 text-sm leading-relaxed text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              >
                <span>{r.titulo}</span>
                <ExternalLink aria-hidden="true" className="mt-1 size-3.5 shrink-0" />
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <article className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-8 md:py-12">
      <div>
        <BackLink />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-12">
        <figure className="flex flex-col gap-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card">
            <FotoEspecie
              src={especie.foto}
              alt={especie.descricaoFoto}
              priority
              sizes="(min-width: 1152px) 620px, (min-width: 1024px) 55vw, 100vw"
            />
          </div>
          <figcaption>
            <CreditoFoto credito={especie.credito} className="text-muted-foreground" />
          </figcaption>
        </figure>

        <header className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {ave ? 'Avifauna' : 'Mastofauna'} · {especie.ordem} · {especie.familia}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">{especie.nomePopular}</h1>
          <p className="text-lg text-foreground/90">
            <i className="font-medium">{especie.nomeCientifico}</i>{' '}
            <span className="text-muted-foreground">{especie.autoria}</span>
          </p>
          <div>
            <IucnBadge status={especie.iucn} completo />
          </div>
          <div className="mt-2 flex flex-wrap gap-3">
            <CopyButton rotulo="Copiar nome científico" texto={`${especie.nomeCientifico} ${especie.autoria}`} />
            <CopyButton rotulo="Copiar link" icone="link" />
          </div>
        </header>
      </div>

      <SpeciesTabs abas={abas} />

      <AvisoMetodologico />
    </article>
  )
}
