import Layout from "../../components/layout"
import Image from 'next/image'
import Button from '../../components/buttonComponent/button'
import img1 from '../../../images/image 1.png'
import img2 from '../../../images/image 2.png'
import img3 from '../../../images/image 3.png'
import img4 from '../../../images/image 4.png'
import img5 from '../../../images/image 5.png'
export default function Contact() {
    return (
        <Layout>
            {/* <div className="flex flex-col max-w-screen-xl mx-auto p-4"> */}
            <div className="flex flex-col items-center w-full mt-20">
                <h1 className=" text-center  w-7/12">
                    Comprehensive Accounting, Corporate
                    & Fund Administration Services
                </h1>
                <h5 className=" w-6/12 text-lg text-center">
                    We offer a suite of services spanning corporate secretarial, accounting, HR, fund administration, and management consulting.
                </h5>
                <div className=" pt-5">
                    <Button props={'Get in Touch'} />
                </div>
            </div>
            <div className="flex flex-row justify-between mt-20">
                <div className=" w-1/2 flex">
                    <div className=" flex flex-col my-auto">
                        <h2 className=" w-96">Incorporation & Secretarial</h2>
                        <h6 className=" w-[400px]">
                            Register your company whether you are a sole trader, partnership, or limited company. Thereafter, we can act as the company secretary to help ensure compliance with Singapore company law, from AGMs to filing of annual returns.
                        </h6>
                    </div>
                </div>
                <div className="w-1/2">
                    <Image
                        src={img1}
                        alt="Landscape picture"
                        className=" h-96 w-full"
                    // width={718}
                    // height={523}
                    />
                </div>
            </div>


            <div className="flex flex-row justify-between mt-20">
                <div className="w-1/2">
                    <Image
                        src={img2}
                        alt="Landscape picture"
                        className="h-full w-full"
                    />
                </div>
                <div className=" w-1/2 flex justify-end">
                    <div className=" flex flex-col my-auto">
                        <h2 className=" w-96 ">Accounting, GST & Tax Filing</h2>
                        <h6 className="w-[400px]">
                            Save time and resources by entrusting us with your bookkeeping, financial statement preparation, GST, and tax filing tasks. We are also happy to assist with opening bank accounts and providing escrow services.
                        </h6>
                    </div>
                </div>
            </div>


            <div className="flex flex-row justify-between mt-20">
                <div className=" w-1/2 flex">
                    <div className=" flex flex-col my-auto">
                        <h2 className=" w-96 ">HR & Payroll</h2>
                        <div className=" w-96">
                            <ul className="list-disc text-base pl-6 pt-3">
                                <li>Employment pass application</li>
                                <li>Recruitment and termination</li>
                                <li>Leave and benefits</li>
                                <li>Salary processing</li>
                                <li>Bonus payments</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <Image
                        src={img3}
                        alt="Landscape picture"
                        className="h-full w-full"
                    />
                </div>
            </div>


            <div className="flex flex-row justify-between mt-20">
                <div className="w-1/2">
                    <Image
                        src={img4}
                        alt="Landscape picture"
                        className="h-full w-full"
                    />
                </div>
                <div className=" w-1/2 flex justify-end">
                    <div className=" flex flex-col my-auto">
                        <h2 className=" w-96 ">Fund Administration</h2>

                        <div className=" w-96">
                            <ul className="list-disc text-base pl-6 pt-3">
                                <li >Portfolio accounting in accordance with IFRS</li>
                                <li>Fund valuation</li>
                                <li>Tracking of investor commitments, capital calls, and distributions</li>
                                <li>Communication with investors, including confirmations and monthly statements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-row justify-between mt-20">
                <div className=" w-1/2 flex">
                    <div className=" flex flex-col my-auto">
                        <h2 className=" w-96">Management Consulting</h2>
                        <div className=" w-96">
                            <ul className="list-disc text-base pl-6 pt-3">
                                <li >Mergers and Acquisitions</li>
                                <li>Improvements in process efficiency</li>
                                <li>Formalisation of policies and procedures</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <Image
                        src={img5}
                        alt="Landscape picture"
                        className="h-full w-full"
                    />
                </div>
            </div>

            {/* </div> */}
        </Layout>
    )

}


