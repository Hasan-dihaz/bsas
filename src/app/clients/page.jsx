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
                <h1 className="">
                    Who our clients are
                </h1>
                <h5 className=" text-base pb-12">
                    Our clients operate in a diverse range of industries.
                </h5>
                <div className=" w-full flex flex-row justify-between">
                    <div className=" w-44 h-48 flex flex-col items-center">
                        <div className="h-2/3">
                            <Image
                                src={img14}
                                alt="picture"
                                className="h-full w-full"
                            />
                        </div>
                        <h4 className="">F&B</h4>
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
                        <h4 className=" ">Healthcare</h4>
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
                        <h4 className=" ">Manufacturing</h4>
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
                        <h4 className=" ">Technology</h4>
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
                        <h4 className=" ">Retail</h4>
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
                        <h4 className=" ">Investment</h4>
                        <p className=" text-center text-base px-0">
                            Funds, Family Offices, REITs
                        </p>
                    </div>
                </div>

            </div>
            <div className=" w-6/12 mx-auto mt-36">
                <h2 className=" text-center">
                    What our clients say
                </h2>
                <div className=" mt-8 mb-3">
                    <h3> Matthew P.</h3>
                    <p className=" text-left text-base"> Car Repair Shop Owner</p>
                </div>

                <p className=" text-justify">
                    I enlisted BSA to provide fund administration services for my new fund. I was impressed with their high quality of work that ensured strong investor engagement, allowing me to focus on managing my portfolio.
                </p>

                <div className=" flex justify-center mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="16" viewBox="0 0 184 16" fill="none">
                        <circle cx="8" cy="8" r="6" fill="#2639ED" />
                        <circle cx="50" cy="8" r="6" fill="#E7F0FC" />
                        <circle cx="92" cy="8" r="6" fill="#E7F0FC" />
                        <circle cx="134" cy="8" r="6" fill="#E7F0FC" />
                        <circle cx="176" cy="8" r="6" fill="#E7F0FC" />
                    </svg>
                </div>
            </div>
        </Layout>
    )

}


