'use client'

import { useSyncExternalStore } from 'react'
import { Moon, Sun } from 'lucide-react'

type Tema = 'dark' | 'light'

export const CHAVE_TEMA = 'tema'

function lerTema(): Tema {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function assinar(aoMudar: () => void) {
  const observador = new MutationObserver(aoMudar)
  observador.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observador.disconnect()
}

export function ToggleTema() {
  const tema = useSyncExternalStore<Tema>(assinar, lerTema, () => 'dark')
  const proximo: Tema = tema === 'dark' ? 'light' : 'dark'

  function alternar() {
    document.documentElement.dataset.theme = proximo
    try {
      localStorage.setItem(CHAVE_TEMA, proximo)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={tema === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
    >
      {tema === 'dark' ? <Sun aria-hidden="true" className="size-4" /> : <Moon aria-hidden="true" className="size-4" />}
    </button>
  )
}
