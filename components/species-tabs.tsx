'use client'

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type Aba = { id: string; rotulo: string; conteudo: ReactNode }

export function SpeciesTabs({ abas }: { abas: Aba[] }) {
  const [ativa, setAtiva] = useState(0)
  const botoes = useRef<(HTMLButtonElement | null)[]>([])
  const base = useId()

  function navegar(e: KeyboardEvent) {
    const destino =
      e.key === 'ArrowRight' ? (ativa + 1) % abas.length
      : e.key === 'ArrowLeft' ? (ativa - 1 + abas.length) % abas.length
      : e.key === 'Home' ? 0
      : e.key === 'End' ? abas.length - 1
      : null
    if (destino === null) return
    e.preventDefault()
    setAtiva(destino)
    botoes.current[destino]?.focus()
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
        <div
          role="tablist"
          aria-label="Informações da espécie"
          onKeyDown={navegar}
          className="flex min-w-max gap-1 border-b border-border"
        >
          {abas.map((aba, i) => (
            <button
              key={aba.id}
              ref={(el) => {
                botoes.current[i] = el
              }}
              role="tab"
              type="button"
              id={`${base}-tab-${aba.id}`}
              aria-selected={i === ativa}
              aria-controls={`${base}-painel-${aba.id}`}
              tabIndex={i === ativa ? 0 : -1}
              onClick={() => setAtiva(i)}
              className={cn(
                '-mb-px whitespace-nowrap border-b-2 px-3 py-3 text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary md:px-4',
                i === ativa
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground',
              )}
            >
              {aba.rotulo}
            </button>
          ))}
        </div>
      </div>

      {abas.map((aba, i) => (
        <div
          key={aba.id}
          role="tabpanel"
          id={`${base}-painel-${aba.id}`}
          aria-labelledby={`${base}-tab-${aba.id}`}
          hidden={i !== ativa}
          tabIndex={0}
          className="focus-visible:outline-none"
        >
          {aba.conteudo}
        </div>
      ))}
    </div>
  )
}
