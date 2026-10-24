import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FotoEspecie } from '@/components/foto-especie'
import type { Especie } from '@/lib/especies'
import { CreditoFoto, IucnBadge } from '@/components/species-meta'

export function SpeciesCard({ especie, query }: { especie: Especie; query: string }) {
  return (
    <article className="glass-soft group relative flex w-full flex-col overflow-hidden rounded-2xl p-2 text-on-glass transition duration-300 motion-safe:hover:-translate-y-0.5 hover:border-primary/40 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-primary">
      <figure className="flex flex-col gap-1.5">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-on-glass/10">
          <FotoEspecie
            src={especie.foto}
            alt={especie.descricaoFoto}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="transition duration-500 motion-safe:group-hover:scale-[1.03]"
          />
        </div>
        <figcaption className="px-1">
          <CreditoFoto credito={especie.credito} />
        </figcaption>
      </figure>

      <div className="flex flex-1 flex-col gap-1 px-3 pb-3 pt-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight text-on-glass text-balance">
            <Link
              href={`/especie/${especie.id}${query ? `?${query}` : ''}`}
              className="after:absolute after:inset-0 focus-visible:outline-none"
            >
              {especie.nomePopular}
            </Link>
          </h3>
          <IucnBadge status={especie.iucn} />
        </div>
        <p className="text-sm text-on-glass/90">
          <i className="font-medium">{especie.nomeCientifico}</i>{' '}
          <span className="text-on-glass/70">{especie.autoria}</span>
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-on-glass/20 pt-3 text-xs text-on-glass/70">
          <p className="uppercase tracking-wide">
            <span className="sr-only">Grupo: </span>
            {especie.grupo === 'avifauna' ? 'Ave' : 'Mamífero'} · <span className="sr-only">Família: </span>
            {especie.familia}
          </p>
          <span
            aria-hidden="true"
            className="flex items-center gap-1 font-medium text-on-glass/80 transition-colors group-hover:text-primary"
          >
            Ver ficha
            <ArrowRight className="size-3.5 transition-transform motion-safe:group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  )
}
