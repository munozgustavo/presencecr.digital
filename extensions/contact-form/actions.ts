'use server';

import { Resend } from 'resend';
import { siteConfig } from '../../config/site';

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState: unknown, formData: FormData) {
    // 1. Extract data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    // 2. Validate data
    if (!name || name.trim().length < 2) {
        return { success: false, message: 'El nombre es obligatorio.' };
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, message: 'El correo electrónico no es válido.' };
    }
    if (!phone || phone.trim().length < 8) {
        return { success: false, message: 'El teléfono es obligatorio.' };
    }

    // 3. Send email via Resend
    try {
        const { error } = await resend.emails.send({
            from: 'Formulario Web <onboarding@resend.dev>', // Update this if you have a verified domain
            to: siteConfig.contact.email,
            subject: `Nuevo contacto de: ${name}`,
            text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}\nFecha: ${new Date().toLocaleString()}`,
            html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, message: 'Error al enviar el correo. Intente más tarde.' };
        }

        return {
            success: true,
            message: 'Mensaje enviado correctamente.',
            data: { name, email, phone } // Return data to pre-fill WhatsApp
        };
    } catch (err) {
        console.error('Server Action Error:', err);
        return { success: false, message: 'Error interno del servidor.' };
    }
}
