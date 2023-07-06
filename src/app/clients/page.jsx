import Layout from "../../components/layout"
import Image from 'next/image'
import img14 from '../../../images/image 14.png'
import img15 from '../../../images/image 15.png'
import img16 from '../../../images/image 16.png'
import img17 from '../../../images/image 17.png'
import img18 from '../../../images/image 18.png'
import img19 from '../../../images/image 19.png'
export default function Contact() {
    return (
        <Layout >
            <div className=" mx-auto text-center h-96 pt-20 w-full">
                <h1 className=" pb-2">
                    Who our clients are
                </h1>
                <p className=" text-base pb-12">
                    Our clients operate in a diverse range of industries.
                </p>
                <div className=" w-full flex flex-row justify-between">
                    <div className=" w-44 h-48 flex flex-col items-center">
                        <div className="h-2/3">
                            <Image
                                src={img14}
                                alt="picture"
                                className="h-full w-full"
                            />
                        </div>
                        <h2 className=" py-1">F&B</h2>
                        <p className=" text-center text-base px-0">
                            Restaurants,
                            Food Processing
                        </p>
                    </div>
                    <div className=" w-44 h-48  flex flex-col items-center">
                        <div className="h-2/3">
                            <Image
                                src={img15}
                                alt="picture"
                                className="h-full w-full"
                            />
                        </div>
                        <h2 className=" py-1">Healthcare</h2>
                        <p className=" text-center text-base px-0">
                            Traditional Chinese Medicine
                        </p>
                    </div>
                    <div className=" w-44 h-48  flex flex-col items-center">
                        <div className="h-2/3">
                            <Image
                                src={img18}
                                alt="picture"
                                className="h-full w-full"
                            />
                        </div>
                        <h2 className=" py-1">Manufacturing</h2>
                        <p className=" text-center text-base px-0">
                            Production, Packaging
                        </p>
                    </div>
                    <div className=" w-44 h-48  flex flex-col items-center">
                        <div className="h-2/3">
                            <Image
                                src={img16}
                                alt="picture"
                                className="h-full w-full"
                            />
                        </div>
                        <h2 className=" py-1">Technology</h2>
                        <p className=" text-center text-base px-0">
                            IT Services,
                            Software Development
                        </p>
                    </div>
                    <div className=" w-44 h-48  flex flex-col items-center">
                        <div className="h-2/3">
                            <Image
                                src={img19}
                                alt="picture"
                                className="h-full w-full"
                            />
                        </div>
                        <h2 className=" py-1">Retail</h2>
                        <p className=" text-center text-base px-0">
                        </p>
                    </div>
                    <div className=" w-44 h-48  flex flex-col items-center">
                        <div className="h-2/3">
                            <Image
                                src={img17}
                                alt="picture"
                                className="h-full w-full"
                            />
                        </div>
                        <h2 className=" py-1">Investment</h2>
                        <p className=" text-center text-base px-0">
                            Funds, Family Offices, REITs
                        </p>
                    </div>
                </div>

            </div>
            <div className=" w-6/12 mx-auto my-24">
                <h1 className=" text-center">
                    What our clients say
                </h1>
                <div className=" my-5">
                    <h2> Matthew P.</h2>
                    <h3> Car Repair Shop Owner</h3>
                </div>

                <p className=" text-base text-justify">
                    I enlisted BSA to provide fund administration services for my new fund. I was impressed with their high quality of work that ensured strong investor engagement, allowing me to focus on managing my portfolio.
                </p>
            </div>
        </Layout>
    )

}


