interface ShipWithUsLayoutProps {
        children: React.ReactNode;
    }
    const ShipWithUs = (
        {children}: ShipWithUsLayoutProps
    ) => {
      return (
        <div className="pt-14 w-full h-full">
          {children}
        </div>
      )
    }
    
    export default ShipWithUs;
    