import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ConsultationRequestEmailProps {
    userFirstname: string;
    userLastname: string;
    companyName: string;
    userEmail: string;
    phoneNumber: string;
    message: string;
}

export const ConsultationRequestEmail = ({
    userFirstname,
    userLastname,
    companyName,
    userEmail,
    phoneNumber,
    message,
}: ConsultationRequestEmailProps) => (
    <Tailwind>
        <Html>
            <Head />
            <Preview>Nouvelle demande de consultation gratuite</Preview>
            <Body
            className=" p-2"
            style={main}>
                <Container style={container}>
                    <a
                        className=" flex justify-start items-center gap-1"
                        href="/">
                        <Img
                            width={20}
                            height={20}
                            src="/icon.png"
                            alt="web site logo"
                        />
                        <h1 className="font-bold text-primary text-xl uppercase">Agency</h1>
                    </a>
                    <Text style={paragraph}>Bonjour,</Text>
                    <Text style={paragraph}>
                        Vous avez reçu une nouvelle demande de consultation gratuite de la part de <strong>{userFirstname} {userLastname}</strong> de l'entreprise <strong>{companyName}</strong>.
                    </Text>
                    <Text style={paragraph}>
                        Voici les détails de la demande :
                    </Text>
                    <Text style={paragraph}>
                        <strong>Email :</strong> {userEmail}
                        <br />
                        <strong>Téléphone :</strong> {phoneNumber}
                        <br />
                        <strong>Message :</strong> {message}
                    </Text>
                    <Section style={btnContainer}>
                        <Button
                            className="bg-primary group text-sm hover:outline outline-primary/80 outline-offset-2 lg:text-base text-slate-100 px-6 py-3 flex gap-2 justify-center items-center rounded-full"
                            href="mailto:support@votreentreprise.com?subject=Réponse à la consultation" // Replace with your company's support email
                        >
                            Répondre à la demande
                        </Button>
                    </Section>
                    <Text style={paragraph}>
                        Meilleures salutations,
                        <br />
                        L'équipe de Votre Entreprise
                    </Text>
                    <Hr style={hr} />
                    <Text style={footer}>
                        Vous recevez cet e-mail parce que vous avez reçu une nouvelle demande de consultation gratuite. Si vous ne souhaitez plus recevoir ce type de notifications, veuillez nous contacter à l'adresse
                    </Text>
                </Container>
            </Body>
        </Html>
    </Tailwind>
);



export default ConsultationRequestEmail;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};

const logo = {
    margin: "0 auto",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
};

const btnContainer = {
    textAlign: "center" as const,
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};
