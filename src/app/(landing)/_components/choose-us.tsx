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

const ChooseUs = () => {
  return (
    <section className='w-full bg-customBlue py-5'>
        <div className="w-full max-w-screen-2xl px-5 md:px-14 mx-auto flex flex-col md:flex-row items-center gap-5">
            <div className="md:w-1/2 w-full overflow-hidden">
                <Image
                    src='/landing/choose-us/car.png'
                    width={500}
                    height={500}
                    alt='choose us'
                    className='select-none pointer-events-none shrink-0'
                />
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-5">
                <h1 className='text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack select-none pointer-events-none'>Why Choose Us</h1>
                <div className="grid grid-cols-3 gap-3">
                    {data.map((item) => (
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
        </div>
    </section>
  )
}

export default ChooseUs
