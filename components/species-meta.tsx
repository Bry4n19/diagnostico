import { statusIUCN, type Credito, type StatusIUCN } from '@/lib/especies'
import { cn } from '@/lib/utils'

export function IucnBadge({ status, completo = false }: { status: StatusIUCN; completo?: boolean }) {
  const info = statusIUCN[status]
  return (
    <span
      title={`IUCN: ${info.rotulo}`}
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset',
        info.classe,
      )}
    >
      <span aria-hidden="true">{status}</span>
      <span className={completo ? '' : 'sr-only'}>
        {completo ? `· ${info.rotulo}` : `Status IUCN: ${info.rotulo}`}
      </span>
    </span>
  )
}

export function CreditoFoto({ credito, className }: { credito?: Credito; className?: string }) {
  if (!credito) {
    return <p className={cn('text-xs text-white/60', className)}>Crédito da foto: origem a confirmar</p>
  }
  return (
    <p className={cn('text-xs text-white/60', className)}>
      Foto:{' '}
      {credito.url ? (
        <a href={credito.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">
          {credito.autor}
        </a>
      ) : (
        credito.autor
      )}{' '}
      · {credito.licenca}
    </p>
  )
}
