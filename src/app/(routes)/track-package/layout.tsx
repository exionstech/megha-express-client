interface TrackPackageLayoutProps {
    children: React.ReactNode;
}
const TrackPackageLayout = (
    {children}: TrackPackageLayoutProps
) => {
  return (
    <div className="pt-14 w-full h-full">
      {children}
    </div>
  )
}

export default TrackPackageLayout;
