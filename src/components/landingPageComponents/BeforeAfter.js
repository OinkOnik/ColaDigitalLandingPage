import React from 'react';
import { Check, Star, X } from 'lucide-react';
import MaxWidthWrapper from '../MaxWidthWrapper';

function BeforeAfter() {
    return (
        <section className='bg-white/80'>
            <MaxWidthWrapper className='pb-10 pt-20'>
                <div className='max-w-3xl mx-auto tracking-tight flex flex-col items-center justify-center gap-5'>
                    <div className="flex items-center justify-center gap-1.5">
                        <X className='w-8 h-8 sm:w-6 sm:h-6 text-red-600' />
                        <h2 className='font-bold text-xl md:text-3xl text-center'>
                        Problemas con otras opciones
                        </h2>
                    </div>

                    <div className="flex items-center justify-center gap-1.5">
                        <Check className='w-8 h-8 sm:w-6 sm:h-6 text-green-600' />
                        <h2 className='font-bold text-xl md:text-3xl text-center text-balance'>
                        Ventajas de elegir nuestra solución
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col gap-10 lg:flex-row lg:max-w-5xl lg:mx-auto items-stretch justify-center lg:gap-14 my-16">
                    <div className='flex w-full sm:flex-1 flex-col bg-primary-foreground rounded-2xl shadow-md p-8'>
                        <ul className="w-full">
                            <div className="space-y-6 tracking-wide text-xl">
                                <h3 className='font-bold text-2xl mb-8'>Problema</h3>

                                <li className="flex gap-3 items-start">
                                    <X className="h-5 w-5 shrink-0 text-red-500 mt-1" />
                                    <span className="flex-1">Software genérico que no se adapta.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <X className="h-5 w-5 shrink-0 text-red-500 mt-1" />
                                    <span className="flex-1">Menús QR obsoletos y costosos de actualizar.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <X className="h-5 w-5 shrink-0 text-red-500 mt-1" />
                                    <span className="flex-1">Soporte técnico lento y ausente.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <X className="h-5 w-5 shrink-0 text-red-500 mt-1" />
                                    <span className="flex-1">Actualizaciones caras o inexistentes.</span>
                                </li>
                            </div>
                        </ul>
                    </div>

                    <div className='flex w-full sm:flex-1 flex-col bg-primary/10 rounded-2xl shadow-md p-8'>
                        <ul className="w-full">
                            <div className="space-y-6 tracking-wide text-xl">
                                <h3 className='font-bold text-2xl mb-8'>Solución</h3>

                                <li className="flex gap-3 items-start">
                                    <Check className="h-5 w-5 shrink-0 text-green-600 mt-1" />
                                    <span className="flex-1">Software a medida para tus procesos.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Check className="h-5 w-5 shrink-0 text-green-600 mt-1" />
                                    <span className="flex-1">Menús QR personalizables al instante.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Check className="h-5 w-5 shrink-0 text-green-600 mt-1" />
                                    <span className="flex-1">Soporte técnico rápido y constante.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Check className="h-5 w-5 shrink-0 text-green-600 mt-1" />
                                    <span className="flex-1">Mejoras accesibles sin letra pequeña.</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="max-w-lg mx-auto my-20 flex flex-col items-center sm:items-start">
                    <div className="mx-auto flex items-center justify-center gap-1 mb-4">
                        {Array(5).fill().map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>

                    <div className='text-center font-semibold text-balance text-gray-800'>
                    "Hemos optimizado nuestra empresa con <span className='bg-yellow-200'>nuestra plataforma de gestión</span>. Ahora gestionamos pedidos, cuentas y empleados con precisión y sin errores. Una solución clave para nuestro crecimiento."</div>
                    <div className='flex mx-auto items-center justify-center gap-4 my-6'>
                        <img src="/users/fema.png" alt="user" className="inline-block pointer-events-none object-cover h-12 w-12 rounded-full ring-2 ring-gray-300" />
                        <div className="flex flex-col">
                            <p className='font-semibold'>Fema Industrial</p>
                            <p className='text-sm'>Cartago, Costa Rica</p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default BeforeAfter;