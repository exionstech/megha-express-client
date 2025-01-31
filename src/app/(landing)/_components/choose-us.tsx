import Image from 'next/image'


const data = [
    {
        name: "Retail Price",
        discount: "84%",
    },
    {
        name: "Shipping Express",
        discount: "75%",
    },
    {
        name: "Daily Rates",
        discount: "65%",
    }    
]


const LargeScreen = () => {
    return (
        <div className="w-full max-w-screen-2xl px-14 mx-auto md:flex flex-row items-center gap-5 hidden">
            <div className="w-1/2 overflow-hidden">
                <Image
                    src='/landing/choose-us/car.png'
                    width={500}
                    height={500}
                    alt='choose us'
                    className='select-none pointer-events-none shrink-0'
                />
            </div>
            <div className="w-1/2 flex flex-col gap-5">
                <h1 className='text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack select-none pointer-events-none text-center md:text-start'>Why Choose Us</h1>
                <div className="grid grid-cols-3 gap-3">
                    {data.map((item) => (
                        <div key={item.name} className='flex flex-col gap-2 select-none pointer-events-none'>
                            <h1 className='text-customBlack'>Up to</h1>
                            <h2 className='md:text-3xl text-2xl font-bold text-customBlack'>
                                {item.discount}
                                <span className='ml-2 text-sm font-normal'>OFF</span>
                            </h2>
                            <h3 className='text-red md:text-sm text-xs font-medium'>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


const SmallScreen = () => {
    return (
        <div className="w-full max-w-screen-2xl px-5 flex flex-col gap-5 md:hidden">
            <h1 className='text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack select-none pointer-events-none text-center md:text-start'>Why Choose Us</h1>
            <div className="w-full overflow-hidden">
                <Image
                    src='/landing/choose-us/car.png'
                    width={500}
                    height={500}
                    alt='choose us'
                    className='select-none pointer-events-none shrink-0'
                />
            </div>
            <div className="w-full flex justify-between items-center px-8">
                {data.slice(0,2).map((item) => (
                    <div key={item.name} className='flex flex-col gap-2 select-none pointer-events-none'>
                        <h1 className='text-customBlack'>Up to</h1>
                        <h2 className='text-3xl font-bold text-customBlack'>
                            {item.discount}
                            <span className='ml-2 text-sm font-normal'>OFF</span>
                        </h2>
                        <h3 className='text-red text-sm font-medium'>{item.name}</h3>
                    </div>
                ))}
            </div>    
            <div className="w-full flex justify-center items-center px-8">
                {data.slice(2).map((item) => (
                    <div key={item.name} className='flex flex-col gap-2 select-none pointer-events-none'>
                        <h1 className='text-customBlack'>Up to</h1>
                        <h2 className='text-3xl font-bold text-customBlack'>
                            {item.discount}
                            <span className='ml-2 text-sm font-normal'>OFF</span>
                        </h2>
                        <h3 className='text-red text-sm font-medium'>{item.name}</h3>
                    </div>
                ))}
            </div>    
        </div>
    )
}

const ChooseUs = () => {
  return (
    <section className='w-full bg-customBlue py-5'>
        <LargeScreen/>
        <SmallScreen/>
    </section>
  )
}

export default ChooseUs
