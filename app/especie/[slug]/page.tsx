import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { SpeciesDetail } from '@/components/species-detail'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BackToTop } from '@/components/back-to-top'
import { buscarEspecie, especies } from '@/lib/especies'

export function generateStaticParams() {
  return especies.map((e) => ({ slug: e.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const especie = buscarEspecie(slug)
  if (!especie) return {}
  return {
    title: `${especie.nomePopular} (${especie.nomeCientifico}) | Catálogo de Espécies da Fauna`,
    description: especie.visaoGeral,
  }
}

export default async function EspeciePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const especie = buscarEspecie(slug)
  if (!especie) notFound()

  return (
    <>
      <SiteHeader />
      <main id="inicio" className="min-h-screen bg-background">
        <Suspense>
          <SpeciesDetail especie={especie} />
        </Suspense>
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  )
}
