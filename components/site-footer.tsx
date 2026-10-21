import { SiteLogo } from '@/components/site-header'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <SiteLogo className="h-8 w-auto" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          Registros obtidos por armadilhas fotográficas e vocalização. Nomenclatura conforme CBRO (2021), SBMz
          (2023) e Lista Vermelha da IUCN.
        </p>
      </div>
    </footer>
  )
}
