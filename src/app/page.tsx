import {
  Building2,
  ChartNoAxesCombined,
  CircleChevronRight,
  Factory,
  HandCoins,
  House,
  Instagram,
  Mail,
  MapPinHouse,
  MessageCircleMore,
  Sun,
  Tractor
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { Header } from './_components/Header'

export default function HomePage() {
  return (
    <div className="w-full">
      <Header />
      <div className="relative h-svh pt-32">
        <Image
          src="/background-2.jpg"
          fill
          className="-z-10 h-full w-auto object-cover"
          alt=""
        />
        <div className="mx-10 flex flex-col items-center text-center text-white">
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
      <div className="w-full bg-[#003f59] px-10">
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
      <div className="flex w-full justify-center bg-[#003f59] px-10 pb-16">
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
      <div className="w-full px-10 pb-16 pt-8 text-[#003f59]">
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
      <div className="w-full px-10 pb-8">
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
            <div className="absolute inset-0 z-10 flex items-end justify-center gap-2 shadow-internal">
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
            <div className="absolute inset-0 z-10 flex items-end justify-center gap-2 shadow-internal">
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
            <div className="absolute inset-0 z-10 flex items-end justify-center gap-2 shadow-internal">
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
            <div className="absolute inset-0 z-10 flex items-end justify-center gap-2 shadow-internal">
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
      <div className="flex w-full justify-center px-10 py-8 text-center text-[#003f59]">
        <div>
          <p>
            A{' '}
            <span className="font-semibold text-[#fba800]">
              Luminisol Energia Solar
            </span>{' '}
            é para você!
          </p>
          <p>
            você que quer{' '}
            <span className="font-semibold text-[#003f59]">segurança</span> e{' '}
            <span className="font-semibold text-[#003f59]">economia</span> todos
            os meses.
          </p>
          <p className="mt-8 text-sm">Qual o gasto médio mensal da</p>
          <p className="text-sm">sua conta de energia</p>
          <Input
            className="mb-4 mt-2 bg-white focus-visible:outline-4 focus-visible:outline-[#fba7007a] focus-visible:ring-2 focus-visible:ring-[#fba800]"
            placeholder="R$ 300,00"
          />
          <Button className="mx-4 bg-gradient-to-r from-[#fba800] to-[#fa7600] text-xs">
            FAZER UMA SIMULAÇÃO
          </Button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden px-10 py-20 text-center text-white">
        <Image
          src="/background-2.webp"
          fill
          className="-z-10 h-full w-auto object-cover"
          alt=""
        />
        <p className="text-3xl font-bold">
          <span className="text-[#003f59]">Com energia solar você tem até</span>{' '}
          95% de economia
        </p>
        <p className="mt-4">
          Mais economia, rentabilidade, segurança e conforto para você e para a
          sua família.
        </p>
      </div>
      <div className="w-full px-10 py-8 text-white">
        <div className="text-[#003f59]">
          <div className="flex gap-1">
            <CircleChevronRight className="stroke-[#fba800]" />
            <p className="font-semibold">FAQ</p>
          </div>
          <p className="w-28 text-4xl font-bold">Dúvidas frequentes</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mt-8 flex w-full flex-col gap-3"
        >
          <AccordionItem
            value="item-1"
            className="rounded-3xl bg-gradient-to-r from-[#fba800] to-[#fa7600] px-4"
          >
            <AccordionTrigger>
              <p>
                Quais os benefícios da energia solar proporcionados pela{' '}
                <span className="font-semibold">Luminisol</span>
              </p>
            </AccordionTrigger>
            <AccordionContent>
              A energia solar ofericida pela <span>Luminisol</span> reduz
              significamente os custos de eletricidade, é ambientalmente
              amigável, requer manutenção mínima e aumenta o valor de sua
              propriedade.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="rounded-3xl bg-gradient-to-r from-[#fba800] to-[#fa7600] px-4"
          >
            <AccordionTrigger>
              Por que usar energia solar fotovoltaica?
            </AccordionTrigger>
            <AccordionContent>
              É fato que, através do uso de energia solar fotovoltaica, seus
              gastos com conta de luz são reduzidos. Isto quer dizer que se você
              não consumir toda energia gerada, o sistema fornecerá seu
              excedente à rede elétrica e gerará créditos energéticos que podem
              ser usados em até 60 meses.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="rounded-3xl bg-gradient-to-r from-[#fba800] to-[#fa7600] px-4"
          >
            <AccordionTrigger>Energia solar pode ser vendida?</AccordionTrigger>
            <AccordionContent>
              Sim. Uma forma de vendê-la é através da instalação de um sistema
              solar fotovoltaico na sua residência ou estabelecimento,
              tornando-se um produtor de energia. Feito isso, caso não utilize
              toda a energia produzida, você poderá vender o excesso para as
              distribuidoras de energia elétrica do seu estado.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="rounded-3xl bg-gradient-to-r from-[#fba800] to-[#fa7600] px-4"
          >
            <AccordionTrigger>
              Como funciona a Energia solar com chuva?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Como é esperado, a produção de energia solar em dias chuvosos
                ocorre de modo inferior aos dias ensolarados. Isto acontece
                porque os painéis solares necessitam da incidência solar direta,
                logo, com a sua diminuição em dias de chuva, reduz-se a geração
                de energia solar.
              </p>
              <p className="mt-4">
                Entretanto, é muito importante destacar que a diminuição não
                significa que seu sistema fotovoltaico parará de funcionar. Além
                disso, a chuva também contribui para a manutenção dos seus
                painéis solares, retirando toda a sujeira e outros elementos que
                possam prejudicar a operação. Sendo assim, mesmo com a baixa
                luminosidade causada por períodos chuvosos, seu sistema
                continuará funcionando de modo mais lento, mas ainda favorável.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="rounded-3xl bg-gradient-to-r from-[#fba800] to-[#fa7600] px-4"
          >
            <AccordionTrigger>
              A Energia solar funciona em dias nublados?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Assim como a geração de energia solar em período de chuva, em
                dias nublados também há uma baixa no seu funcionamento. Desta
                forma, a grande formação de nuvens torna a incidência solar nos
                painéis difusa, o que minimiza a produção de energia.
              </p>
              <p className="mt-4">
                Porém, existem painéis solares desenvolvidos especialmente para
                situações como esta, uma vez que são capazes de aproveitar a
                incidência solar mesmo com a difusão causada por nuvens. Em
                vista disso, com a geração de energia produzida pelo sol atrás
                das nuvens, torna-se mais fácil o aproveitamento regular, não só
                com a irradiação direta.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className="rounded-3xl bg-gradient-to-r from-[#fba800] to-[#fa7600] px-4"
          >
            <AccordionTrigger>
              Por que instalar Energia Solar vale a pena?
            </AccordionTrigger>
            <AccordionContent>
              Além de possuir fácil instalação, o sistema de energia solar
              garante eficiência, segurança e economia através da geração de
              eletricidade. Desta forma, a fonte de energia é captada de forma
              simples e rápida por meio de um recurso renovável (luz solar) e é
              convertida em energia elétrica para todo o seu imóvel. Por conta
              disso, a energia solar vale a pena por ser uma opção sustentável,
              econômica e limpa.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex w-full flex-wrap bg-[#003f59] px-10 py-8 text-sm text-white">
        <Image
          src="/logo.svg"
          width={150}
          height={150}
          alt="Description of the image"
          className="mb-4"
        />
        <div className="mb-4 flex flex-col gap-1">
          <p className="text-xl font-bold">Entre em contato</p>
          <Link
            href="https://wa.me/5582936180098?text=Olá,%20tenho%20interesse%20em%20energia%20solar!"
            className="flex items-center gap-2"
          >
            <MessageCircleMore />
            <p>(82) 93618-0098</p>
          </Link>
          <Link
            href="https://www.instagram.com/luminisolenergia"
            className="flex items-center gap-2"
          >
            <Instagram />
            <p>@luminisolenergia</p>
          </Link>
          <Link
            href="mailto:contato@luminisol.com.br?subject=Informações%20sobre%20energia%20solar&body=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20energia%20solar!"
            className="flex items-center gap-2"
          >
            <Mail /> <p>contato@luminisol.com.br</p>
          </Link>
        </div>
        <div>
          <p className="mb-1 text-xl font-bold">Horário de atendimento</p>
          <p>Segunda a sexta: 08:00 às 18:00</p>
          <p>Sábado: 08:00 às 12:00</p>
        </div>
        <p className="mt-4">
          &copy; Todos os direis reservados | Luminisol 2025, CNPJ
          12.123.123/0001-12
        </p>
      </div>
      <div className="fixed bottom-5 right-5 z-20">
        <Link href="https://wa.me/5582936180098?text=Olá,%20tenho%20interesse%20em%20energia%20solar!">
          <Image src="/whatsapp-96.svg" alt="WhatsApp" width={60} height={60} />
        </Link>
      </div>
    </div>
  )
}
