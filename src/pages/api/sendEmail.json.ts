import type { APIRoute } from "astro"
import { Resend } from "resend"


const resend = new Resend(import.meta.env.RESEND_API_KEY)
export const POST: APIRoute = async ({ params, request }) => {
    const  body  = await request.json()

    const {
        firstName,
        lastName,
        companyEmail,
        company,
        phoneNumber,
        message
    } = body

    console.log(body)
    const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: "klausdev2@gmail.com",
        subject: "Planifiez une consultation gratuite",
        text:`Bonjour, je m'appelle ${firstName} ${lastName} et je travaille chez ${company}. Je suis intéressé par vos services et j'aimerais planifier une consultation gratuite. Voici mes coordonnées: Email: ${companyEmail} Téléphone: ${phoneNumber} Message: ${message}`
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