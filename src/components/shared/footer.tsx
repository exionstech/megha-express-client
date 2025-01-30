import Link from "next/link"
import Logo from "./logo"

const footerLinks = [
    {
        name: "Privacy Policy",
        link: "#",
    },
    {
        name: "Terms of Use",
        link: "#",
    },
    {
        name: "Sales & Refunds",
        link: "#",
    },
    {
        name: "Legal",
        link: "#",
    }    
]

const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Track package", link: "/track" },
    { name: "Contact us", link: "/contact" }
];

const shipWithUs = [
    { name: "Book a shipment", link: "/book-shipment" },
    { name: "Track a shipment", link: "/track-shipment" },
    { name: "Business Enquiry", link: "/business-enquiry" }
];

const helpAndSupport = [
    { name: "Email us", link: "/email-us" },
    { name: "Locate us", link: "/locate" },
    { name: "Customer care", link: "/customer-care" }
];

const reachUs = [
    { name: "Email", value: "support@meghaexpress.com" },
    { name: "Phone", value: "+91 98765 41230" }
];

const Footer = () => {
  return (
    <section className='w-full bg-customBlue mt-14 py-10'>
        <div className="w-full max-w-screen-2xl px-5 md:px-14 mx-auto flex flex-col gap-5">
            <div className="w-full flex md:flex-row flex-col gap-8 md:justify-between">
                    <Logo/>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-y-8 gap-x-0 md:gap-x-5 overflow-hidden">
                    {/* Quick Links Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-lg">Quick Links</h3>
                        {quickLinks.map((item) => (
                            <Link key={item.name} href={item.link}>
                                <span className='text-customBlack hover:underline'>{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Ship with us Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-lg">Ship with us</h3>
                        {shipWithUs.map((item) => (
                            <Link key={item.name} href={item.link}>
                                <span className='text-customBlack hover:underline'>{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Help & Support Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-lg">Help & Support</h3>
                        {helpAndSupport.map((item) => (
                            <Link key={item.name} href={item.link}>
                                <span className='text-customBlack hover:underline'>{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Reach us Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-lg">Reach us</h3>
                        {reachUs.map((item) => (
                            <div key={item.name} className="flex flex-col">
                                <span className='text-customBlack text-sm md:hidden'>{item.value}</span>
                                <span className='text-customBlack md:flex hidden'>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full border-t-2 border-customBlack flex md:justify-end">
                <div className="lg:w-[40%] md:w-[70%] w-full flex justify-between mt-5">
                    {footerLinks.map((item) => (
                        <Link key={item.name} href={item.link}>
                            <span className='text-customBlack hover:underline text-sm'>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer