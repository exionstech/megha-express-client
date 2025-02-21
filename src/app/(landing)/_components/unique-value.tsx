import Heading from "@/components/shared/heading"
import { MapPinned, UserCheck, ShieldCheck, Globe, CreditCard } from "lucide-react"

const secondColumn = [
    {
        icon: <ShieldCheck className="bg-rose-200 p-2 rounded-full size-8"/>,
        title: 'Secure and Reliable',
        content: 'Ensure safe delivery with robust security features and trusted shipping partners to minimize risk.'
    },
    {
        icon: <Globe className="bg-rose-200 p-2 rounded-full size-8"/>,
        title: 'Global Coverage',
        content: 'Ship to any destination worldwide, with seamless international logistics and customs management.'
    },
    {
        icon: <CreditCard className="bg-rose-200 p-2 rounded-full size-8"/>,
        title: 'Cost-Effective ',
        content: 'Offer competitive pricing with flexible shipping options, including discounts for bulk shipments & many more.'
    }
]

const UniqueValue = () => {
  return (
    <section className='w-full max-w-screen-2xl px-5 md:px-14 2xl:px-20 mx-auto flex flex-col gap-10 items-center mt-16'>
        <Heading title={"Our Unique Value Proposition"}/>
        <div className="w-full flex flex-col gap-5">
            <div className="flex md:flex-row flex-col gap-5">
                {/* card 1 */}
                <div className="w-full md:w-[65%] border rounded-xl px-5 py-10 select-none pointer-events-none">
                    <div className="flex items-center gap-3 text-red">
                        <MapPinned className="bg-rose-200 p-2 rounded-full size-8"/>
                        <h1 className="text-lg font-bold text-customBlack">Real-Time Tracking</h1>
                    </div>
                    <p className="text-customBlack mt-3">Track shipments in real time with accurate updates on location, delivery status, and estimated arrival times.</p>
                </div>
                {/* card 2 */}
                <div className="w-full md:w-[35%] border rounded-xl px-5 py-10 select-none pointer-events-none">
                <div className="flex items-center gap-5 text-red">
                        <UserCheck className="bg-rose-200 p-2 rounded-full size-8"/>
                        <h1 className="text-lg font-bold text-customBlack">User-Friendly Interface</h1>
                    </div>
                    <p className="text-customBlack mt-3">Simplify the shipping process with an intuitive, easy-to-use platform that streamlines booking and managing shipments.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {secondColumn.map((item) => (
                    <div key={item.title} className="w-full border rounded-xl px-5 py-10 select-none pointer-events-none">
                        <div className="flex items-center gap-5 text-red">
                            {item.icon}
                            <h1 className="text-lg font-bold text-customBlack">{item.title}</h1>
                        </div>
                        <p className="text-customBlack mt-3">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default UniqueValue
