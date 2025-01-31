interface TrackPackageLayoutProps {
    children: React.ReactNode;
}
const TrackPackageLayout = (
    {children}: TrackPackageLayoutProps
) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default TrackPackageLayout;
