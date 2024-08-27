import{ ConsultationRequestEmail } from './emails/ContactEmail'
function EmailForm() {
  return (
    <ConsultationRequestEmail 
        userFirstname="Klaus"
        userLastname="Von"
        companyName="Resend"
        userEmail="client@test.com"
        phoneNumber="1234567890"
        message="Hello, I would like to schedule a free consultation."
    />
  )
}

export default EmailForm