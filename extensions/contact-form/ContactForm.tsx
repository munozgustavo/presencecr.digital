'use client';

import { useActionState } from 'react';
import { siteConfig } from '../../config/site';
import { submitContactForm } from './actions';

export function ContactForm() {
    const [state, action, isPending] = useActionState(submitContactForm, null);

    // Generate WhatsApp Link dynamically if submission was successful
    let whatsappLink = '#';
    if (state?.success && state.data && siteConfig.whatsappNumber) {
        const { name, email, phone } = state.data;
        const message = `Hola, soy ${name}.\nEstoy interesado en sus servicios.\nMi correo es ${email}\nMi teléfono es ${phone}`;
        const encodedMessage = encodeURIComponent(message);
        whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
    }

    // Success State
    if (state?.success) {
        return (
            <div className="space-y-6 text-center animate-in fade-in zoom-in duration-300 py-8">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
                    <h3 className="text-green-800 font-bold text-xl mb-1">Mensaje enviado correctamente.</h3>
                    <p className="text-green-700 mb-6">Hemos recibido tus datos correctamente.</p>
                </div>

                {siteConfig.whatsappNumber && (
                    <div className="pt-2">
                        <p className="text-muted-foreground mb-3 text-sm">
                            ¿Quieres una respuesta más rápida?
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-md transition-colors shadow-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0 1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                            </svg>
                            Contactar por WhatsApp
                        </a>
                    </div>
                )}
            </div>
        );
    }

    // Form State
    return (
        <form action={action} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Tu nombre"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Tu teléfono"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="correo@ejemplo.com"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="¿Cómo podemos ayudarte?"
                    className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
            </div>

            {state?.message && !state.success && (
                <p className="text-red-500 text-sm">{state.message}</p>
            )}

            <button
                type="submit"
                disabled={isPending}
                className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50"
            >
                {isPending ? 'Enviando...' : 'Solicitar información'}
            </button>

            <p className="text-xs text-center text-muted-foreground mt-4">
                Al enviar este formulario aceptas nuestra política de privacidad.
            </p>
        </form>
    );
}
