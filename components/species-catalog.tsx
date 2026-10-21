'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { especies, type Grupo } from '@/lib/especies'
import { SpeciesCard } from '@/components/species-card'
import { cn } from '@/lib/utils'

const grupos: { id: Grupo; rotulo: string; descricao: string }[] = [
  { id: 'avifauna', rotulo: 'Avifauna', descricao: 'Aves' },
  { id: 'mastofauna', rotulo: 'Mastofauna', descricao: 'Mamíferos' },
]

function normalizar(texto: string) {
  return texto.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
}

export function SpeciesCatalog() {
  const [grupo, setGrupo] = useState<Grupo>('avifauna')
  const [busca, setBusca] = useState('')

  const termo = normalizar(busca.trim())

  const resultados = useMemo(
    () =>
      especies
        .filter((e) => e.grupo === grupo)
        .filter(
          (e) =>
            !termo ||
            normalizar(e.nomePopular).includes(termo) ||
            normalizar(e.nomeCientifico).includes(termo),
        )
        .sort((a, b) => a.nomePopular.localeCompare(b.nomePopular, 'pt-BR')),
    [grupo, termo],
  )

  return (
    <section aria-labelledby="catalogo-titulo" className="flex flex-col gap-6">
      <h2 id="catalogo-titulo" className="sr-only">
        Espécies registradas
      </h2>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div
          role="tablist"
          aria-label="Grupo faunístico"
          className="inline-flex w-full rounded-full border border-border bg-card p-1 md:w-auto"
        >
          {grupos.map((g) => {
            const ativo = g.id === grupo
            const total = especies.filter((e) => e.grupo === g.id).length
            return (
              <button
                key={g.id}
                role="tab"
                type="button"
                aria-selected={ativo}
                onClick={() => setGrupo(g.id)}
                className={cn(
                  'flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors md:flex-none',
                  ativo
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary',
                )}
              >
                {g.rotulo}
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-xs',
                    ativo ? 'bg-accent text-accent-foreground' : 'bg-muted',
                  )}
                >
                  {total}
                </span>
              </button>
            )
          })}
        </div>

        <label className="relative w-full md:max-w-sm">
          <span className="sr-only">Buscar espécie por nome popular ou científico</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome popular ou científico"
            className="w-full rounded-full border border-border bg-card py-2.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
        </label>
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        {resultados.length}{' '}
        {resultados.length === 1 ? 'espécie' : 'espécies'} de{' '}
        {grupos.find((g) => g.id === grupo)?.descricao.toLowerCase()}
        {termo && <> para &ldquo;{busca.trim()}&rdquo;</>}
      </p>

      {resultados.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resultados.map((e) => (
            <li key={e.id} className="flex">
              <SpeciesCard especie={e} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
          Nenhuma espécie encontrada. Tente outro nome ou verifique a outra categoria.
        </div>
      )}
    </section>
  )
}
