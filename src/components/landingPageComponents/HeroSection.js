import MaxWidthWrapper from '../MaxWidthWrapper'
import { ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import Image from 'next/image';

function HeroSection() {
    return (
        <section className='bg-slate-50'>
            <MaxWidthWrapper className="pt-10 !px-2 lg:!px-10 lg:grid lg:grid-cols-2 lg:gap-x-0 lg:pt-24 lg:pb-20">
                <div className="col-span-1 px-2 lg:px-0">
                    <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h1 className="relative w-fit tracking-tighter text-balance font-bold !leading-tight text-gray-900 text-5xl md:text-6xl">
                        Soluciones digitales al instante 🚀
                        </h1>

                        <p className="mt-8 text-balance text-lg max-w-prose text-center font-semibold lg:pr-10 md:text-wrap lg:text-left">
                        Más que software, ofrecemos herramientas que simplifican tu día a día. Soluciones personalizadas, fáciles de usar y listas para impulsar tu negocio.
                        </p>

                        <ul className="hidden mt-8 text-left font-medium md:flex flex-col items-center sm:items-start">
                            <div className="space-y-2">
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Menús Digitales para Restaurantes
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Gestión Simple para PYMES
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Soluciones por Industria
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Automatiza sin Programar
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Herramientas Express
                                </li>
                            </div>
                        </ul>

                        {/* CTA button */}
                        <Link href='#' className={cn(buttonVariants({ size: 'lg' }), "flex items-center justify-center mt-8 group")}>
                            <span>Más información</span>
                            <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </Link>

                        <div className="mt-12 flex flex-col sm:flex-row sm:items-start items-center gap-5">
                            <div className="flex -space-x-3">
                                <img src="/users/user-1.png" alt="user image" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 bg-white" />
                                <img src="/users/user-2.png" alt="user image" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 bg-white" />
                                <img src="/users/user-3.png" alt="user image" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 bg-white" />
                                <img src="/users/user-4.png" alt="user image" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 bg-white" />
                                <img src="/users/user-5.png" alt="user image" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-200 bg-white" />
                            </div>

                            <div className="flex flex-col justify-between items-center sm:items-start">
                                <div className="flex gap-1">
                                    {Array(5).fill().map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>

                                <p><span className="font-semibold">+5</span> Usuarios felices</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-full mt-14 md:mt-0 lg:col-span-1">
                    <div className="w-full h-60 lg:h-full rounded-3xl flex items-center justify-center relative">
                    <Image src='/mascota1.png' alt="Descripción de la imagen" layout="responsive" width={600} height={400} />
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default HeroSection