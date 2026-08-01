'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'lg'
  className?: string
}

export default function Logo({ size = 'lg', className }: LogoProps) {
  const isLg = size === 'lg'

  return (
    <div className={cn('flex flex-col leading-none', className)}>
      <span
        className={cn(
          'font-logo text-forest-900 inline-flex items-center',
          isLg ? 'text-3xl uppercase' : 'text-2xl',
          className
        )}
      >
        <span>Ina</span>
        <Image
          src={isLg ? '/images/leaf3.png' : '/images/leaf.png'}
          alt=""
          width={isLg ? 20 : 12}
          height={isLg ? 20 : 12}
          className={cn(
            'select-none pointer-events-none',
            isLg ? '-translate-y-1' : '-translate-y-2.5 rotate-12'
          )}
        />
        <span className={isLg ? '-ml-1.5' : '-ml-1'}>s</span>
      </span>
      <span
        className={cn(
          'flex items-center justify-center gap-2 font-semibold tracking-[0.1em] text-gold-600 uppercase',
          isLg ? 'text-[10px] mt-1' : 'text-[9px] -mt-1 ml-0.5'
        )}
      >
        <span className="h-px w-4 bg-gradient-to-r from-transparent to-gold-600/60" />
        Drink
        <span className="h-px w-4 bg-gradient-to-l from-transparent to-gold-600/60" />
      </span>
    </div>
  )
}
