'use client'

import { useState } from 'react'
import { Check, Copy, Link2 } from 'lucide-react'

type Props = {
  rotulo: string
  /** Texto fixo a copiar. Se omitido, copia o endereço da página atual. */
  texto?: string
  icone?: 'copiar' | 'link'
}

export function CopyButton({ rotulo, texto, icone = 'copiar' }: Props) {
  const [copiado, setCopiado] = useState(false)
  const Icone = copiado ? Check : icone === 'link' ? Link2 : Copy

  async function copiar() {
    const valor = texto ?? `${window.location.origin}${window.location.pathname}`
    try {
      await navigator.clipboard.writeText(valor)
    } catch {
      const campo = document.createElement('textarea')
      campo.value = valor
      document.body.appendChild(campo)
      campo.select()
      document.execCommand('copy')
      campo.remove()
    }
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copiar}
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <Icone aria-hidden="true" className="size-4" />
      <span>{copiado ? 'Copiado!' : rotulo}</span>
      <span className="sr-only" aria-live="polite">
        {copiado ? 'Copiado para a área de transferência' : ''}
      </span>
    </button>
  )
}
