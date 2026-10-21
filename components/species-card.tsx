import Image from 'next/image'
import Link from 'next/link'
import type { Especie } from '@/lib/especies'
import { CreditoFoto, IucnBadge } from '@/components/species-meta'

export function SpeciesCard({ especie, query }: { especie: Especie; query: string }) {
  return (
    <article className="glass group relative flex w-full flex-col overflow-hidden rounded-2xl p-2 text-white transition hover:-translate-y-0.5 hover:border-primary/60 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-primary">
      <figure className="flex flex-col gap-1.5">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white/10">
          <Image
            src={especie.foto || '/placeholder.svg'}
            alt={especie.descricaoFoto}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <figcaption className="px-1">
          <CreditoFoto credito={especie.credito} />
        </figcaption>
      </figure>

      <div className="flex flex-1 flex-col gap-1 px-3 pb-3 pt-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight text-white text-balance">
            <Link
              href={`/especie/${especie.id}${query ? `?${query}` : ''}`}
              className="after:absolute after:inset-0 focus-visible:outline-none"
            >
              {especie.nomePopular}
            </Link>
          </h3>
          <IucnBadge status={especie.iucn} />
        </div>
        <p className="text-sm text-white/90">
          <i className="font-medium">{especie.nomeCientifico}</i>{' '}
          <span className="text-white/70">{especie.autoria}</span>
        </p>
        <p className="mt-auto border-t border-white/20 pt-3 text-xs uppercase tracking-wide text-white/70">
          {especie.ordem} · {especie.familia}
        </p>
      </div>
    </article>
  )
}
