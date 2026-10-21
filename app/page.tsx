import { SpeciesCatalog } from '@/components/species-catalog'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Diagnóstico de fauna · TCC
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            Catálogo de Espécies da Fauna
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-primary-foreground/80 text-pretty">
            Aves e mamíferos registrados no levantamento de campo. Cada card apresenta o nome
            popular e o nome científico da espécie, com autoria e classificação taxonômica.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <SpeciesCatalog />
      </div>

      <footer className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs leading-relaxed text-muted-foreground">
          Registros obtidos por armadilhas fotográficas. Nomenclatura conforme listas de referência
          vigentes; espécies marcadas como &ldquo;Identificação a confirmar&rdquo; aguardam validação.
        </p>
      </footer>
    </main>
  )
}
