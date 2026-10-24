import { site } from '@/lib/site'
import { SiteLogo } from '@/components/site-header'

const links = [
  { href: '/#catalogo', rotulo: 'Catálogo' },
  { href: '/#sobre', rotulo: 'Sobre o TCC' },
  { href: '/#area-de-estudo', rotulo: 'Área de estudo' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <SiteLogo className="h-8 w-auto" />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Trabalho de Conclusão de Curso · {site.areaDeEstudo.nome}, {site.areaDeEstudo.local}.
            </p>
          </div>
          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {l.rotulo}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Instagram {site.instagramUsuario}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          Registros obtidos por armadilhas fotográficas e vocalização. Nomenclatura conforme CBRO (2021), SBMz
          (2023) e Lista Vermelha da IUCN.
        </p>
      </div>
    </footer>
  )
}
