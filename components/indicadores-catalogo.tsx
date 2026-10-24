import { especies } from '@/lib/especies'
import { cn } from '@/lib/utils'

export function IndicadoresCatalogo({ className }: { className?: string }) {
  const aves = especies.filter((e) => e.grupo === 'avifauna').length
  const mamiferos = especies.filter((e) => e.grupo === 'mastofauna').length

  const numeros = [
    { valor: especies.length, rotulo: especies.length === 1 ? 'espécie registrada' : 'espécies registradas' },
    { valor: aves, rotulo: aves === 1 ? 'ave' : 'aves' },
    { valor: mamiferos, rotulo: mamiferos === 1 ? 'mamífero' : 'mamíferos' },
  ]

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
        {numeros.map((n) => (
          <div key={n.rotulo} className="flex flex-col gap-1 bg-card p-4 md:p-5">
            <dt className="order-2 text-xs uppercase tracking-wide text-muted-foreground">{n.rotulo}</dt>
            <dd className="order-1 text-3xl font-semibold text-primary md:text-4xl">{n.valor}</dd>
          </div>
        ))}
      </dl>
      <p className="text-xs text-muted-foreground">
        Contagem das espécies incluídas no levantamento deste TCC, não da riqueza total da fauna na área.
      </p>
    </div>
  )
}
