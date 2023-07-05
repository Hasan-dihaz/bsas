import Layout from "../../../components/layout"
import Image from 'next/image'

import img1 from '../../../images/image 1.png'
export default function Contact() {
    return (
        <Layout>

            <div className="flex flex-col max-w-screen-xl mx-auto p-4">
                <div></div>
                <div className="flex flex-row justify-between"> 
                    <div className=" w-1/2 flex">
                        <div className=" flex flex-col m-auto">
                            <h1 className=" w-96 pb-4">Incorporation & Secretarial</h1>
                            <p className=" w-96">
                                Register your company whether you are a sole trader, partnership, or limited company. Thereafter, we can act as the company secretary to help ensure compliance with Singapore company law, from AGMs to filing of annual returns.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            src={img1}
                            alt="Landscape picture"
                            width={718}
                            height={523}
                        />
                    </div>
                </div>
                <div>
                    <p></p>
                    <img src="" alt="" />
                </div>
                <div>
                    <p></p>
                    <img src="" alt="" />
                </div>
                <div>
                    <p></p>
                    <img src="" alt="" />
                </div>
                <div>
                    <p></p>
                    <img src="" alt="" />
                </div>

            </div>
        </Layout>
    )

}


