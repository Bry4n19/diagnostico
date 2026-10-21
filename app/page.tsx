import { Suspense } from 'react'
import { SpeciesCatalog } from '@/components/species-catalog'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AboutSection } from '@/components/about-section'
import { InstagramSection } from '@/components/instagram-section'
import { BackToTop } from '@/components/back-to-top'
import { AvisoMetodologico } from '@/components/methodology-note'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="inicio" className="min-h-screen bg-background">
        <section className="hero-glow">
          <div className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pb-16 md:pt-24">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Diagnóstico de fauna · TCC
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Catálogo de Espécies da <span className="text-primary">Fauna</span>
            </h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
              Aves e mamíferos registrados no levantamento de campo. Cada card apresenta o nome
              popular e o nome científico da espécie, com autoria e classificação taxonômica.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalogo"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px] hover:shadow-primary/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Ver espécies
              </a>
              <a
                href="#sobre"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Sobre o TCC
              </a>
            </div>
            <AvisoMetodologico className="mt-10 max-w-3xl" />
          </div>
        </section>

        <div id="catalogo" className="glass-stage scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <Suspense>
              <SpeciesCatalog />
            </Suspense>
          </div>
        </div>

        <AboutSection />
        <InstagramSection />
      </main>

      <SiteFooter />
      <BackToTop />
    </>
  )
}
