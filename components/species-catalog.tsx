'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AudioLines, Search } from 'lucide-react'
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
  const params = useSearchParams()
  const [grupo, setGrupoState] = useState<Grupo>(
    params.get('grupo') === 'mastofauna' ? 'mastofauna' : 'avifauna',
  )
  const [busca, setBuscaState] = useState(params.get('q') ?? '')

  const query = useMemo(() => {
    const p = new URLSearchParams()
    if (grupo !== 'avifauna') p.set('grupo', grupo)
    if (busca.trim()) p.set('q', busca.trim())
    return p.toString()
  }, [grupo, busca])

  function sincronizarUrl(novoGrupo: Grupo, novaBusca: string) {
    const p = new URLSearchParams()
    if (novoGrupo !== 'avifauna') p.set('grupo', novoGrupo)
    if (novaBusca.trim()) p.set('q', novaBusca.trim())
    const qs = p.toString()
    window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`)
  }

  function setGrupo(g: Grupo) {
    setGrupoState(g)
    sincronizarUrl(g, busca)
  }

  function setBusca(b: string) {
    setBuscaState(b)
    sincronizarUrl(grupo, b)
  }

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
          className="glass inline-flex w-full rounded-full p-1 md:w-auto"
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
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-on-glass/75 hover:bg-[var(--glass-hover)] hover:text-primary',
                )}
              >
                {g.rotulo}
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-xs',
                    ativo ? 'bg-primary-foreground/15 text-primary-foreground' : 'bg-on-glass/15 text-on-glass',
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
            className="pointer-events-none absolute left-4 top-1/2 z-10 size-4 -translate-y-1/2 text-on-glass/80"
          />
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome popular ou científico"
            className="glass w-full rounded-full py-2.5 pl-11 pr-4 text-sm text-on-glass placeholder:text-on-glass/65 focus:outline-none focus:ring-2 focus:ring-primary/70"
          />
        </label>
      </div>

      <p className="text-sm text-on-glass/80" aria-live="polite">
        {resultados.length}{' '}
        {resultados.length === 1 ? 'espécie' : 'espécies'} de{' '}
        {grupos.find((g) => g.id === grupo)?.descricao.toLowerCase()}
        {termo && <> para &ldquo;{busca.trim()}&rdquo;</>}
      </p>

      {grupo === 'avifauna' && (
        <div className="glass flex items-start gap-3 rounded-2xl p-4 text-sm text-on-glass/90">
          <AudioLines aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="leading-relaxed text-pretty">
            As aves foram identificadas por meio do som (vocalizações e cantos), com o auxílio dos aplicativos{' '}
            <span className="font-semibold text-on-glass">eBird</span> e{' '}
            <span className="font-semibold text-on-glass">Merlin Bird ID</span>.
          </p>
        </div>
      )}

      {resultados.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resultados.map((e) => (
            <li key={e.id} className="flex">
              <SpeciesCard especie={e} query={query} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="glass rounded-2xl p-10 text-center text-sm text-on-glass/80">
          Nenhuma espécie encontrada. Tente outro nome ou verifique a outra categoria.
        </div>
      )}
    </section>
  )
}
