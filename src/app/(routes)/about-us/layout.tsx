interface AboutLayoutProps {
    children: React.ReactNode;
}
const AboutLayout = (
    {children}: AboutLayoutProps
) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default AboutLayout;
