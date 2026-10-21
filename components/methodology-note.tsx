import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export const textoAvisoMetodologico =
  'Este catálogo representa os registros obtidos durante o período de estudo, e não a totalidade da fauna local. A identificação por vocalização possui limite de confiança e está sujeita a validação.'

export function AvisoMetodologico({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        'flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4 text-sm leading-relaxed text-muted-foreground text-pretty',
        className,
      )}
    >
      <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
      <span>
        <strong className="font-semibold text-foreground">Aviso metodológico:</strong> {textoAvisoMetodologico}
      </span>
    </p>
  )
}
