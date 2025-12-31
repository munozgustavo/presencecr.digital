'use server';

import { Resend } from 'resend';
import { siteConfig } from '../../config/site';
import { getDictionary } from '@/app/lib/getDictionary';

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState: unknown, formData: FormData) {
    // 1. Extract data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const lang = (formData.get('lang') as any) || siteConfig.lang;

    const t = getDictionary(lang);

    // 2. Validate data
    if (!name || name.trim().length < 2) {
        return { success: false, message: lang === 'en' ? 'Name is required.' : 'El nombre es obligatorio.' };
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, message: lang === 'en' ? 'Invalid email address.' : 'El correo electrónico no es válido.' };
    }
    if (!phone || phone.trim().length < 8) {
        return { success: false, message: lang === 'en' ? 'Phone is required.' : 'El teléfono es obligatorio.' };
    }

    // 3. Send email via Resend
    try {
        const { error } = await resend.emails.send({
            from: 'Formulario Web <onboarding@resend.dev>', // Update this if you have a verified domain
            to: siteConfig.contact.formRecipient,
            subject: `Nuevo contacto [${lang.toUpperCase()}] de: ${name}`,
            text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}\nFecha: ${new Date().toLocaleString()}`,
            html: `
        <h1>Nuevo mensaje de contacto (${lang.toUpperCase()})</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, message: lang === 'en' ? 'Error sending email. Please try later.' : 'Error al enviar el correo. Intente más tarde.' };
        }

        return {
            success: true,
            message: t.contact.form.success.title,
            data: { name, email, phone } // Return data to pre-fill WhatsApp
        };
    } catch (err) {
        console.error('Server Action Error:', err);
        return { success: false, message: lang === 'en' ? 'Internal server error.' : 'Error interno del servidor.' };
    }
}
