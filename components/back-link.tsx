'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export function BackLink() {
  const params = useSearchParams()
  const query = params.toString()

  return (
    <Link
      href={`/${query ? `?${query}` : ''}#catalogo`}
      className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <ArrowLeft aria-hidden="true" className="size-4" />
      Voltar ao catálogo
    </Link>
  )
}
