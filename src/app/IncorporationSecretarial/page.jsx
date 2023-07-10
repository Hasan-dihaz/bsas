import Layout from "../../components/layout"
import Button from '../../components/buttonComponent/button'
export default function Contact() {
    return (
        <Layout className="">
            <div>


                <div className="flex flex-col items-center w-full mt-20">
                    <h1 className=" text-center w-4/12">
                        Incorporation & Secretarial Services
                    </h1>
                    <h5 className=" w-6/12 text-center ">
                        Register your company whether you are a sole trader, partnership, or limited company. Thereafter, we can act as the company secretary to help ensure compliance with Singapore company law, from AGMs to filing of annual returns.
                    </h5>
                    <div className=" pt-5">
                        <Button props={'Get in Touch'} />
                    </div>
                </div>


                <div className=" w-10/12 mx-auto mt-20">
                    <h2 className=" text-center text-4xl pb-14">
                        Our Services
                    </h2>
                    <div className=" flex justify-between  pt-3">
                        <div className="w-2/5">
                            <ul className=" flex flex-col space-y-1 list-disc text-base pl-6">
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </li>
                                <li>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                            </ul>

                        </div>
                        <div className="w-2/5">
                            <ul className="flex flex-col space-y-1 list-disc text-base pl-6">
                                <li >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </li>
                                <li>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}


