import {
  Building2,
  ChartNoAxesCombined,
  CircleChevronRight,
  Factory,
  HandCoins,
  House,
  MapPinHouse,
  Menu,
  Sun,
  Tractor
} from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
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
      <div className="relative h-svh pt-32">
        <Image
          src="/background-2.jpg"
          fill
          className="-z-10 h-full w-auto object-cover"
          alt=""
        />
        <div className="mx-16 flex flex-col items-center text-center text-white">
          <p className="inline-block w-fit bg-gradient-to-r from-[#fba800] to-[#fa7600] bg-clip-text text-5xl font-bold text-transparent">
            Economize 95%
          </p>
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
            className="mb-4 mt-2 bg-white focus-visible:outline-4 focus-visible:outline-[#fba7007a] focus-visible:ring-2 focus-visible:ring-[#fba800]"
            placeholder="R$ 300,00"
          />
          <Button className="mx-4 bg-gradient-to-r from-[#fba800] to-[#fa7600] text-xs">
            FAZER UMA SIMULAÇÃO
          </Button>
        </div>
      </div>
      <div className="w-full bg-[#003f59] px-16">
        <div className="flex w-full -translate-y-20 flex-col gap-10 rounded-[50px] bg-gradient-to-br from-[#fba800] to-[#fa7600] px-8 py-10 text-center text-white">
          <div className="flex flex-col items-center">
            <div>
              <Sun className="h-16 w-16 stroke-white" />
            </div>
            <div className="flex flex-col items-center">
              <p className="my-2 text-lg font-semibold">95% de economia</p>
              <p>
                Com energia solar você reduz seus gastos com conta de energia em
                até 95%.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <ChartNoAxesCombined className="h-16 w-16 stroke-white" />
            </div>
            <div className="flex flex-col items-center">
              <p className="my-2 text-lg font-semibold">Alta Rentabilidade</p>
              <p>Tenha o retorno do seu investimento em até 4 anos.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <House className="h-16 w-16 stroke-white" />
            </div>
            <div className="flex flex-col items-center">
              <p className="my-2 text-lg font-semibold">Valorize seu imóvel</p>
              <p>
                Instalar um sistema de energia solar traz uma valorização
                significativa do imóvel.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-[#003f59] px-16 pb-16">
        <div className="w-full">
          <div className="text-white">
            <div className="flex gap-1">
              <CircleChevronRight className="stroke-[#fba800]" />
              <p>
                <span className="font-semibold">Lumini</span>sol
              </p>
            </div>
            <p className="text-4xl font-bold">
              Conheça a <span className="text-[#fba800]">Luminisol</span>
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-6 text-justify text-white">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              natus corrupti sint earum aperiam vero? Tempore libero quo
              voluptate culpa molestias fugit autem odio voluptatum voluptas
              consectetur, doloremque ex incidunt!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sit
              ipsa quis molestiae repellat? Nulla suscipit possimus a laudantium
              ratione quos rerum pariatur explicabo, nihil maiores quod
              recusandae accusamus asperiores.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-16 pb-16 pt-8 text-[#003f59]">
        <div className="flex gap-1">
          <CircleChevronRight className="stroke-[#fba800]" />
          <p className="font-semibold">Projetos</p>
        </div>
        <div className="mt-8 flex w-full justify-center text-center">
          <p className="text-3xl font-bold">
            Projetos{' '}
            <span className="text-center text-[#fba800]">personalizados</span>{' '}
            para você!
          </p>
        </div>
        <div className="mt-8 flex w-full flex-wrap gap-6 font-semibold text-white">
          <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
            <Image
              src="/background-mobile.jpg"
              fill
              className="-z-10 h-auto w-full object-cover"
              alt=""
            />
            <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-2">
              <div className="w-fit rounded-lg border-2 border-[#fba800] px-2 py-1 text-xs">
                <p>+30 módulos</p>
                <p>900 kWh de geração</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fba800]">
                  <HandCoins />
                </div>
                <p className="w-36 text-xs">
                  R$ 3.500,00{' '}
                  <span className="text-[#fba800]">de economia ao ano</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
            <Image
              src="/background-mobile.jpg"
              fill
              className="-z-10 h-auto w-full object-cover"
              alt=""
            />
            <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-2">
              <div className="w-fit rounded-lg border-2 border-[#fba800] px-2 py-1 text-xs">
                <p>+30 módulos</p>
                <p>900 kWh de geração</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fba800]">
                  <HandCoins />
                </div>
                <p className="w-36 text-xs">
                  R$ 3.500,00{' '}
                  <span className="text-[#fba800]">de economia ao ano</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
            <Image
              src="/background-mobile.jpg"
              fill
              className="-z-10 h-auto w-full object-cover"
              alt=""
            />
            <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-2">
              <div className="w-fit rounded-lg border-2 border-[#fba800] px-2 py-1 text-xs">
                <p>+30 módulos</p>
                <p>900 kWh de geração</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fba800]">
                  <HandCoins />
                </div>
                <p className="w-36 text-xs">
                  R$ 3.500,00{' '}
                  <span className="text-[#fba800]">de economia ao ano</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
            <Image
              src="/background-mobile.jpg"
              fill
              className="-z-10 h-auto w-full object-cover"
              alt=""
            />
            <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-2">
              <div className="w-fit rounded-lg border-2 border-[#fba800] px-2 py-1 text-xs">
                <p>+30 módulos</p>
                <p>900 kWh de geração</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fba800]">
                  <HandCoins />
                </div>
                <p className="w-36 text-xs">
                  R$ 3.500,00{' '}
                  <span className="text-[#fba800]">de economia ao ano</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-16 pb-8">
        <div className="text-white">
          <div className="flex gap-1">
            <CircleChevronRight className="stroke-[#fba800]" />
            <p className="font-semibold text-[#003f59]">Soluções</p>
          </div>
          <p className="w-28 text-4xl font-bold text-[#fba800]">
            Nossas <span className="text-[#003f59]">Soluçẽs</span>
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-6 text-xs font-semibold text-white">
          <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
            <Image
              src="/background-mobile.jpg"
              fill
              className="-z-10 h-auto w-full object-cover"
              alt=""
            />
            <div className="shadow-internal absolute inset-0 z-10 flex items-end justify-center gap-2">
              <div className="mb-4 flex w-full items-center justify-center gap-2">
                <div>
                  <MapPinHouse className="h-9 w-9" />
                </div>
                <p className="w-28">Residências e condomínios</p>
              </div>
            </div>
          </div>
          <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
            <Image
              src="/background-mobile.jpg"
              fill
              className="-z-10 h-auto w-full object-cover"
              alt=""
            />
            <div className="shadow-internal absolute inset-0 z-10 flex items-end justify-center gap-2">
              <div className="mb-4 flex w-full items-center justify-center gap-2">
                <div>
                  <Building2 className="h-9 w-9" />
                </div>
                <p className="w-28">Empresas e comércios</p>
              </div>
            </div>
          </div>
          <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
            <Image
              src="/background-mobile.jpg"
              fill
              className="-z-10 h-auto w-full object-cover"
              alt=""
            />
            <div className="shadow-internal absolute inset-0 z-10 flex items-end justify-center gap-2">
              <div className="mb-4 flex w-full items-center justify-center gap-2">
                <div>
                  <Factory className="h-9 w-9" />
                </div>
                <p className="max-w-28">Indústrias</p>
              </div>
            </div>
          </div>
          <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
            <Image
              src="/background-mobile.jpg"
              fill
              className="-z-10 h-auto w-full object-cover"
              alt=""
            />
            <div className="shadow-internal absolute inset-0 z-10 flex items-end justify-center gap-2">
              <div className="mb-4 flex w-full items-center justify-center gap-2">
                <div>
                  <Tractor className="h-9 w-9" />
                </div>
                <p className="max-w-28">Agronegócios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
