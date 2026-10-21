import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { especies } from '@/lib/especies'
import { site } from '@/lib/site'
import { AvisoMetodologico } from '@/components/methodology-note'

export function AboutSection() {
  const { areaDeEstudo, sobre } = site
  const aves = especies.filter((e) => e.grupo === 'avifauna').length
  const mamiferos = especies.filter((e) => e.grupo === 'mastofauna').length

  const numeros = [
    { valor: especies.length, rotulo: 'espécies catalogadas' },
    { valor: aves, rotulo: aves === 1 ? 'ave' : 'aves' },
    { valor: mamiferos, rotulo: mamiferos === 1 ? 'mamífero' : 'mamíferos' },
  ]

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Sobre o TCC</p>
            <h2 id="sobre-titulo" className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              O que é este projeto
            </h2>
            <dl className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {numeros.map((n) => (
                <div key={n.rotulo} className="flex flex-col gap-1 bg-card p-5">
                  <dt className="order-2 text-xs uppercase tracking-wide text-muted-foreground">{n.rotulo}</dt>
                  <dd className="order-1 text-3xl font-semibold text-primary md:text-4xl">{n.valor}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-5">
            {sobre.map((paragrafo) => (
              <p key={paragrafo.slice(0, 32)} className="max-w-prose leading-relaxed text-muted-foreground text-pretty">
                {paragrafo}
              </p>
            ))}
            <AvisoMetodologico className="max-w-prose" />
            <p className="max-w-prose text-sm leading-relaxed text-muted-foreground text-pretty">
              Nomenclatura e autoria das espécies conforme Pacheco et al. (2021, CBRO) para aves e Abreu et al.
              (2023, SBMz) para mamíferos. Status de conservação segundo a Lista Vermelha da IUCN.
            </p>
          </div>
        </div>

        <div id="area-de-estudo" className="flex scroll-mt-20 flex-col gap-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">Área de estudo</p>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{areaDeEstudo.nome}</h3>
            </div>
            <p className="flex items-center gap-2 text-muted-foreground">
              <MapPin aria-hidden="true" className="size-4 text-primary" />
              {areaDeEstudo.local}
            </p>
          </div>
          <figure className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-3xl border border-border bg-white">
              <Image
                src={areaDeEstudo.mapa.src || '/placeholder.svg'}
                alt={areaDeEstudo.mapa.alt}
                width={areaDeEstudo.mapa.width}
                height={areaDeEstudo.mapa.height}
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="text-sm text-muted-foreground">
              Mapa da área de estudo com as Áreas de Preservação Permanente (APPs) e corpos d’água. Sistema de
              coordenadas WGS 84 / UTM 23S.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
