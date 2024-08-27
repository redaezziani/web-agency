import type { APIRoute } from "astro"
import { Resend } from "resend"


const resend = new Resend(import.meta.env.RESEND_API_KEY)
export const POST: APIRoute = async ({request }) => {
    const  body  = await request.json()

    const {
        firstName,
        lastName,
        companyEmail,
        company,
        phoneNumber,
        message
    } = body

    const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: "klausdev2@gmail.com",
        subject: "Planifiez une consultation gratuite",
        html: `
            <html>
                <body>
                    <p>Bonjour, je m'appelle ${firstName} ${lastName} et je travaille chez ${company}.</p>
                    <p>Je suis intéressé par vos services et j'aimerais planifier une consultation gratuite.</p>
                    <p>Voici mes coordonnées:</p>
                    <ul>
                        <li>Email: ${companyEmail}</li>
                        <li>Téléphone: ${phoneNumber}</li>
                        <li>Message: ${message}</li>
                    </ul>
                </body>
            </html>
        `
    });


    if (data) {
        return new Response(
            JSON.stringify({
                message: data
            }),
            {
                status: 200,
                statusText: "OK"
            }
        )
    }

    return new Response(
        JSON.stringify({
            message: error?.message
        }),
        {
            status: 500,
            statusText: "Internal Server Error"
        }
    )
}