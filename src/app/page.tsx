import { Menu } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-4">
        <Image
          src="/logo-icon.png"
          width={50}
          height={50}
          alt="Description of the image"
        />
        <Menu className="h-10 w-10" />
      </div>
      <div className="mx-20 mt-10 flex flex-col text-center">
        <p className="text-5xl">Economize 95%</p>
        <p className="text-4xl">da sua conta de energia</p>
        <p className="my-6">
          Chegou a hora de reduzir seus gastos fixos com energia elétrica. Faça
          uma simulação e descubra em poucos segundos o valor do seu
          investimento.
        </p>
        <p className="font-semibold">
          Qual o gasto mensal médio da sua conta de energia?
        </p>
        <Input className="mb-4 mt-2" placeholder="R$ 300,00" />
        <Button className="mx-4 text-xs">FAZER UMA SIMULAÇÃO</Button>
      </div>
    </div>
  )
}
