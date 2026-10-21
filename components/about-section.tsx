import { Crosshair, Lightbulb, Target } from 'lucide-react'
import { especies } from '@/lib/especies'
import { site } from '@/lib/site'

export function AboutSection() {
  const { tema, objetivo, problema, proposta } = site.sobre
  const aves = especies.filter((e) => e.grupo === 'avifauna').length
  const mamiferos = especies.filter((e) => e.grupo === 'mastofauna').length

  const destaques = [
    { titulo: 'Objetivo', texto: objetivo, icone: Target },
    { titulo: 'Problema e relevância', texto: problema, icone: Crosshair },
    { titulo: 'Proposta e resultados', texto: proposta, icone: Lightbulb },
  ].filter((d) => d.texto.trim())

  const numeros = [
    { valor: especies.length, rotulo: 'espécies catalogadas' },
    { valor: aves, rotulo: aves === 1 ? 'ave' : 'aves' },
    { valor: mamiferos, rotulo: mamiferos === 1 ? 'mamífero' : 'mamíferos' },
  ]

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Sobre o TCC</p>
          <h2 id="sobre-titulo" className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            O que é este projeto
          </h2>
          <p className="max-w-prose leading-relaxed text-muted-foreground text-pretty">{tema}</p>
        </div>

        <div className="flex flex-col gap-6">
          <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {numeros.map((n) => (
              <div key={n.rotulo} className="flex flex-col gap-1 bg-card p-5">
                <dt className="order-2 text-xs uppercase tracking-wide text-muted-foreground">{n.rotulo}</dt>
                <dd className="order-1 text-3xl font-semibold text-primary md:text-4xl">{n.valor}</dd>
              </div>
            ))}
          </dl>

          {destaques.length > 0 && (
            <ul className="flex flex-col gap-4">
              {destaques.map(({ titulo, texto, icone: Icone }) => (
                <li key={titulo} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icone aria-hidden="true" className="size-5" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">{titulo}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
