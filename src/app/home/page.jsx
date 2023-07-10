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
                            <h5 className=" w-[530px] text-justify">
                                We offer a suite of services spanning corporate secretarial, accounting, fund administration, and management consulting.
                            </h5>
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
                            <h2 className="">How we can help</h2>
                            <h6 className=" w-80 text-justify">
                                Relieve your administrative burdens and focus on running your business.
                            </h6>
                            <div className=" pt-6">
                                <Button props={'Explore all Services'} />
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 aspect-square w-8/12 rounded-full bg-[#DAE9FF] ">
                        <div className="relative right-20 flex items-center h-full w-fit mx-auto">
                            <div className=" h-fit pr-4">


                                <div className=" card">
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
                                        <h3 className="text-center">Incorporation & Secretarial</h3>
                                    </div>
                                    <div className=" ">
                                        <p className=" ">
                                            Leave your company administration to us.
                                        </p>
                                    </div>
                                </div>


                                <div className=" card">
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
                                        <h3 className="text-center w-40">Fund Administration</h3>
                                    </div>
                                    <div className=" ">
                                        <p className="">
                                            Focus on managing your portfolio and let us take care of the rest.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-fit">
                                <div className=" card">
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
                                        <h3 className="text-center">Accounting, GST & Tax Filing</h3>
                                    </div>
                                    <div className=" ">
                                        <p className="">
                                            Bookkeeping, financial reporting, and tax filing - all taken care of.
                                        </p>
                                    </div>

                                </div>
                                <div className=" card">
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
                                        <h3 className="text-center">HR & Payroll</h3>
                                    </div>
                                    <div className=" ">
                                        <p className="">
                                            Outsource all employment-related responsibilities to us.
                                        </p>
                                    </div>
                                </div>
                                <div className=" card">
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
                                        <h3 className="text-center">Management Consulting</h3>
                                    </div>
                                    <div className="">
                                        <p className="">
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
                            <h2 className="  pb-4 w-96">Over 30 years of combined experience</h2>
                            <h6 className=" w-96 ">
                                We draw on our extensive knowledge and experience to manage the administrative and accounting functions in your business. We are here to help improve your business’ productivity and profitability so you can focus on operating and growing it.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}