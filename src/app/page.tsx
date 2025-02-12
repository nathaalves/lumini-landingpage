import { Menu } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-4">
        <Image
          src="/logo-icon.png"
          width={50}
          height={50}
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
      <div className="relative h-dvh pt-32">
        <Image
          src="/background-2.jpg"
          fill={true}
          className="-z-10 h-full w-auto object-cover"
          alt=""
        />
        <div className="mx-16 flex flex-col text-center text-white">
          <p className="text-5xl font-bold text-[#fba800]">Economize 95%</p>
          <p className="text-4xl">da sua conta de energia</p>
          <p className="my-6">
            Chegou a hora de reduzir seus gastos fixos com energia elétrica.
            Faça uma simulação e descubra em poucos segundos o valor do seu
            investimento.
          </p>
          <p className="font-semibold">
            Qual o gasto mensal médio da sua conta de energia?
          </p>
          <Input
            className="mb-4 mt-2 bg-white focus-visible:ring-2 focus-visible:ring-[#fba800]"
            placeholder="R$ 300,00"
          />
          <Button className="mx-4 bg-gradient-to-r from-[#fba800] to-[#fa7600] text-xs">
            FAZER UMA SIMULAÇÃO
          </Button>
        </div>
      </div>
    </div>
  )
}
