import Image from 'next/image'
import type { Especie } from '@/lib/especies'

export function SpeciesCard({ especie }: { especie: Especie }) {
  const taxonomia = [especie.ordem, especie.familia].filter(Boolean).join(' · ')

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] bg-muted">
        <Image
          src={especie.foto || '/placeholder.svg'}
          alt={especie.descricaoFoto}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        {!especie.identificacaoConfirmada && (
          <span className="absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur">
            Identificação a confirmar
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-5">
        <h3 className="text-lg font-semibold leading-tight text-primary text-balance">
          {especie.nomePopular}
        </h3>
        <p className="text-sm text-foreground">
          <i className="font-medium">{especie.nomeCientifico}</i>
          {especie.autoria && (
            <span className="text-muted-foreground"> ({especie.autoria})</span>
          )}
        </p>
        {taxonomia && (
          <p className="mt-3 border-t border-border pt-3 text-xs uppercase tracking-wide text-muted-foreground">
            {taxonomia}
          </p>
        )}
      </div>
    </article>
  )
}
