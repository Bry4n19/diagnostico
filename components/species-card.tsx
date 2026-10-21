import Image from 'next/image'
import type { Especie } from '@/lib/especies'

export function SpeciesCard({ especie }: { especie: Especie }) {
  const taxonomia = [especie.ordem, especie.familia].filter(Boolean).join(' · ')

  return (
    <article className="glass flex w-full flex-col overflow-hidden rounded-2xl p-2 text-white transition hover:-translate-y-0.5 hover:border-white/45">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white/10">
        <Image
          src={especie.foto || '/placeholder.svg'}
          alt={especie.descricaoFoto}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        {!especie.identificacaoConfirmada && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground shadow-sm">
            Identificação a confirmar
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 px-3 pb-3 pt-4">
        <h3 className="text-lg font-semibold leading-tight text-white text-balance">
          {especie.nomePopular}
        </h3>
        <p className="text-sm text-white/90">
          <i className="font-medium">{especie.nomeCientifico}</i>
          {especie.autoria && <span className="text-white/70"> ({especie.autoria})</span>}
        </p>
        {taxonomia && (
          <p className="mt-3 border-t border-white/20 pt-3 text-xs uppercase tracking-wide text-white/70">
            {taxonomia}
          </p>
        )}
      </div>
    </article>
  )
}
