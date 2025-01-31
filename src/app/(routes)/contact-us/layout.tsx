interface ContactUsLayoutProps {
    children: React.ReactNode;
}
const ContactUsLayout = (
    {children}: ContactUsLayoutProps
) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ContactUsLayout;
