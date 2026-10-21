'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { especies } from '@/lib/especies'
import { CardEspecie } from '@/components/card-especie'

const aves = especies.filter((e) => e.grupo === 'avifauna')
const mamiferos = especies.filter((e) => e.grupo === 'mastofauna')
const todas = [...aves, ...mamiferos]

function normalizar(texto: string) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

export function ListaEspecies() {
  const [busca, setBusca] = useState('')

  const filtradas = useMemo(() => {
    const termo = normalizar(busca.trim())
    if (!termo) return todas
    return todas.filter(
      (e) => normalizar(e.nomePopular).includes(termo) || normalizar(e.nomeCientifico).includes(termo),
    )
  }, [busca])

  const total = filtradas.length

  return (
    <section aria-labelledby="lista-especies-titulo" className="flex flex-col gap-6">
      <h2 id="lista-especies-titulo" className="sr-only">
        Lista de espécies
      </h2>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative w-full sm:max-w-md">
          <span className="sr-only">Buscar por nome popular ou científico</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/60" aria-hidden="true" />
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome popular ou científico"
            className="glass h-11 w-full rounded-full pl-10 pr-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </label>
        <p role="status" aria-live="polite" className="text-sm text-white/80">
          {total} {total === 1 ? 'espécie encontrada' : 'espécies encontradas'}
        </p>
      </div>

      {total > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtradas.map((e) => (
            <li key={e.id}>
              <CardEspecie especie={e} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="glass rounded-2xl p-6 text-center text-white/80">
          Nenhuma espécie corresponde a &quot;{busca}&quot;.
        </p>
      )}
    </section>
  )
}
