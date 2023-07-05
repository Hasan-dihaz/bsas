import Layout from "../../components/layout"
import Image from 'next/image'
import Button from '../../components/buttonComponent/button'
import img8 from '../../../images/image 8.png'
import img9 from '../../../images/image 9.png'

export default function Home() {

    return (
        <Layout>

            <div className="flex flex-col max-w-screen-xl mx-auto p-4">
                <div></div>
                <div className="flex flex-row justify-between pt-20">
                    <div className=" w-1/2 flex">
                        <div className=" flex flex-col my-auto">
                            <h1 className="text-4xl">Comprehensive Accounting, Corporate & Fund Administration Services</h1>
                            <p className=" w-96 text-base">
                                We offer a suite of services spanning corporate secretarial, accounting, fund administration, and management consulting.
                            </p>
                            <div className=" pt-3">
                                <Button props={'Get in Touch'}/>
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


                <div className="flex flex-row justify-between max-w-7xl mx-auto pt-20">
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
                            <p className=" w-96 text-base">
                                We draw on our extensive knowledge and experience to manage the administrative and accounting functions in your business. We are here to help improve your business’ productivity and profitability so you can focus on operating and growing it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}