'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageOff } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  src: string
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}

export function FotoEspecie({ src, alt, sizes, priority = false, className }: Props) {
  const [falhou, setFalhou] = useState(!src)

  if (falhou) {
    return (
      <div
        role="img"
        aria-label={`Imagem indisponível. ${alt}`}
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted text-muted-foreground"
      >
        <ImageOff aria-hidden="true" className="size-6" />
        <span className="text-xs">Imagem indisponível</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      sizes={sizes}
      onError={() => setFalhou(true)}
      className={cn('object-cover', className)}
    />
  )
}
