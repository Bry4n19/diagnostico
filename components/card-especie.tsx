'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Especie } from '@/lib/especies'

const FOTO_FALLBACK = '/especies/placeholder.jpg'

const coresIucn: Record<string, { rotulo: string; classe: string }> = {
  LC: { rotulo: 'Pouco preocupante', classe: 'bg-green-600 text-white' },
  NT: { rotulo: 'Quase ameaçada', classe: 'bg-yellow-400 text-black' },
  VU: { rotulo: 'Vulnerável', classe: 'bg-orange-500 text-black' },
  EN: { rotulo: 'Em perigo', classe: 'bg-red-600 text-white' },
  CR: { rotulo: 'Criticamente em perigo', classe: 'bg-red-900 text-white' },
  DD: { rotulo: 'Dados insuficientes', classe: 'bg-gray-500 text-white' },
  NE: { rotulo: 'Não avaliada', classe: 'bg-gray-500 text-white' },
}

export function CardEspecie({ especie }: { especie: Especie }) {
  const [foto, setFoto] = useState(especie.foto || FOTO_FALLBACK)
  const iucn = coresIucn[especie.iucn] ?? coresIucn.NE

  return (
    <article className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-2 text-white transition hover:-translate-y-0.5 hover:border-primary/60 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-primary">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/10">
        <Image
          src={foto}
          alt={especie.descricaoFoto}
          fill
          loading="lazy"
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          onError={() => setFoto((atual) => (atual === FOTO_FALLBACK ? atual : FOTO_FALLBACK))}
        />
      </div>

      <div className="flex flex-1 flex-col gap-1 px-3 pb-3 pt-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight text-balance">
            <Link href={`/especie/${especie.id}`} className="after:absolute after:inset-0 focus-visible:outline-none">
              {especie.nomePopular}
            </Link>
          </h3>
          <span
            title={iucn.rotulo}
            className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${iucn.classe}`}
          >
            <span className="sr-only">Status IUCN: {iucn.rotulo} </span>
            <span aria-hidden="true">{especie.iucn}</span>
          </span>
        </div>
        <i className="text-sm text-white/90">{especie.nomeCientifico}</i>
        <p className="text-xs text-gray-500">{especie.autoria}</p>
        <p className="mt-auto border-t border-white/20 pt-2 text-xs text-white/70">{especie.familia}</p>
      </div>
    </article>
  )
}
