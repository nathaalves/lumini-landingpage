'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { cn } from '@/lib/cn'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }, [])

  return (
    <div
      className={cn(
        'fixed left-0 right-0 top-0 z-30 flex w-full items-center justify-between p-4 transition-all duration-500 ease-in-out',
        isScrolled
          ? 'bg-white bg-opacity-80 shadow-md backdrop-blur-3xl'
          : 'bg-transparent'
      )}
    >
      <Image
        src="/logo.svg"
        width={150}
        height={150}
        alt="Description of the image"
      />
      <Sheet>
        <SheetTrigger>
          <Menu className="h-10 w-10 stroke-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="hidden">
              Menu de navegação da landing page
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
