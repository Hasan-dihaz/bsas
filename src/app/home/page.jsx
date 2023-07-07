import Layout from "../../components/layout"
import Image from 'next/image'
import Button from '../../components/buttonComponent/button'
import img8 from '../../../images/image 8.png'
import img9 from '../../../images/image 9.png'
import img10 from '../../../images/image 10.png'
import img11 from '../../../images/image 11.png'
import img12 from '../../../images/image 12.png'
import img13 from '../../../images/image 13.png'

export default function Home() {

    return (
        <Layout>
            <div className=" flex flex-col max-w-screen-2xl  p-4">
                <div className="flex flex-row justify-between mt-20">
                    <div className=" w-1/2 flex">
                        <div className=" flex flex-col my-auto">
                            <h1 className=" w-[624px]">Comprehensive Accounting, Corporate & Fund Administration Services</h1>
                            <p className=" w-[530px] text-lg text-justify pt-4">
                                We offer a suite of services spanning corporate secretarial, accounting, fund administration, and management consulting.
                            </p>
                            <div className=" pt-10">
                                <Button props={'Get in Touch'} />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Image
                            src={img8}
                            alt="Landscape picture"
                            className="h-full w-full"
                        // width={718}
                        // height={523}
                        />
                    </div>
                </div>

                <div className=" aspect-square w-full flex items-center">
                    <div className=" absolute left-0 aspect-square w-5/12 z-10 flex items-center justify-center rounded-full bg-[#FFF5DB]">
                        <div className=" flex flex-col my-auto">
                            <h1 className="">How we can help</h1>
                            <p className=" w-80 text-base text-justify">
                                Relieve your administrative burdens and focus on running your business.
                            </p>
                            <div className=" pt-3">
                                <Button props={'Explore all Services'} />
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 aspect-square w-8/12 rounded-full bg-[#DAE9FF] ">
                        <div className="relative right-20 flex items-center h-full w-fit mx-auto">
                            <div className=" h-fit pr-3">
                                <div className="w-48 h-60 bg-[#FFFFFF] rounded-xl mb-3 flex flex-col justify-evenly items-center px-4">
                                    <div className="h-1/3">
                                        <Image
                                            src={img12}
                                            alt="picture"
                                            className="h-full w-full"
                                        // width={718}
                                        // height={523}
                                        />
                                    </div>
                                    <div className="">
                                        <h2 className="text-center">Incorporation & Secretarial</h2>
                                    </div>
                                    <div className=" ">
                                        <p className="text-center">
                                            Leave your company administration to us.
                                        </p>
                                    </div>
                                </div>
                                <div className=" w-48 h-60 bg-[#FFFFFF] rounded-xl mb-3 flex flex-col justify-evenly items-center px-4">
                                    <div className="h-1/3">
                                        <Image
                                            src={img13}
                                            alt="picture"
                                            className="h-full w-full"
                                        // width={718}
                                        // height={523}
                                        />
                                    </div>
                                    <div className="">
                                        <h2 className="text-center">Fund Administration</h2>
                                    </div>
                                    <div className=" ">
                                        <p className="text-center">
                                            Focus on managing your portfolio and let us take care of the rest.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-fit">
                                <div className=" w-48 h-60 bg-[#FFFFFF] rounded-xl mb-3 flex flex-col justify-evenly items-center px-4">
                                    <div className="h-1/3">
                                        <Image
                                            src={img10}
                                            alt="picture"
                                            className="h-full w-full"
                                        // width={718}
                                        // height={523}
                                        />
                                    </div>
                                    <div className="">
                                        <h2 className="text-center">Accounting, GST & Tax Filing</h2>
                                    </div>
                                    <div className=" ">
                                        <p className="text-center">
                                            Bookkeeping, financial reporting, and tax filing - all taken care of.
                                        </p>
                                    </div>

                                </div>
                                <div className=" w-48 h-60 bg-[#FFFFFF] rounded-xl mb-3 flex flex-col justify-evenly items-center px-4">
                                    <div className="h-1/3">
                                        <Image
                                            src={img11}
                                            alt="picture"
                                            className="h-full w-full"
                                        // width={718}
                                        // height={523}
                                        />
                                    </div>
                                    <div className="">
                                        <h2 className="text-center">HR & Payroll</h2>
                                    </div>
                                    <div className=" ">
                                        <p className="text-center">
                                            Outsource all employment-related responsibilities to us.
                                        </p>
                                    </div>
                                </div>
                                <div className=" w-48 h-60 bg-[#FFFFFF] rounded-xl mb-3 flex flex-col justify-evenly items-center px-4">
                                    <div className="h-1/3">
                                        <Image
                                            src={img11}
                                            alt="picture"
                                            className="h-full w-full"
                                        // width={718}
                                        // height={523}
                                        />
                                    </div>
                                    <div className="">
                                        <h2 className="text-center">Management Consulting</h2>
                                    </div>
                                    <div className="">
                                        <p className="text-center">
                                            Consulting for M&As and internal company policies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="flex flex-row justify-between max-w-7xl mx-auto">
                    <div className="w-1/2">
                        <Image
                            src={img9}
                            alt="Landscape picture"
                            className="h-full w-full"
                        />
                    </div>
                    <div className=" w-1/2 flex justify-end">
                        <div className=" flex flex-col my-auto ">
                            <h1 className="  pb-4 text-4xl w-96">Over 30 years of combined experience</h1>
                            <p className=" w-96 text-base text-justify">
                                We draw on our extensive knowledge and experience to manage the administrative and accounting functions in your business. We are here to help improve your business’ productivity and profitability so you can focus on operating and growing it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}