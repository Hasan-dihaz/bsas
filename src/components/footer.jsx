'use client'

import React, { useEffect, useState } from "react";
import Link from 'next/link'
// import { createPopper } from "@popperjs/core";

export default function Footer({ color }) {
    const [navbarOpen, setNavbarOpen] = useState(false);


    // !========================
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState();
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();

    // const openDropdownPopover = () => {
    //     createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
    //         placement: "bottom-start",
    //     });
    //     setDropdownPopoverShow(true);
    // };
    // const closeDropdownPopover = () => {
    //     setDropdownPopoverShow(false);
    // };

    // useEffect(() => {
    //     openDropdownPopover();
    // }, [])
    // bg colors
    let bgColor;
    color === "white"
        ? (bgColor = "bg-slate-700")
        : (bgColor = "bg-" + color + "-500");
    // !========================
    return (

        // <nav className="bg-white border-gray-200 ">
        <div className=" w-full mx-auto 2xl: mt-20">
            <div className=" border w-11/12 mx-auto "></div>
            <div className=" w-full mx-auto 2xl: flex justify-between p-4">
                <div className=" whitespace-nowrap text-black">
                    <span className="text-2xl font-bold">
                        BSAS <br />
                    </span>
                    <span className="text-base font-light">
                        A Member of Titan Corporate Services
                    </span>
                </div>

                <div className="w-full md:block md:w-auto" >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-20 md:mt-0 md:border-0 ">
                        <li className="">
                            <Link href="#" className="block py-2 pl-3 pr-4 text-lg font-medium text-black rounded md:bg-transparent md:p-0  md:dark:bg-transparent" aria-current="page">Home</Link>
                        </li>
                        <li className="w-20">
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-lg font-medium text-black"
                                type="button"
                                ref={btnDropdownRef}
                                onClick={() => {
                                    dropdownPopoverShow
                                        ? closeDropdownPopover()
                                        : openDropdownPopover();
                                }}>

                                Services
                            </button>

                            <div
                                // ref={popoverDropdownRef}
                                className={
                                    // (dropdownPopoverShow ? "block " : "hidden ") +
                                    "block " +
                                    (color === "white" ? "bg-white " : bgColor + " ") +
                                    "text-base z-50 py-2 list-none text-left rounded mt-1 "
                                }
                                style={{ minWidth: "12rem" }}
                            >
                                <Link
                                    href="/services"
                                    className={
                                        "text-sm py-2 font-normal block whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-slate-700" : "text-white")
                                    }
                                // onClick={e => e.preventDefault()}
                                >
                                    Overview
                                </Link>
                                <Link
                                    href="#pablo"
                                    className={
                                        "text-sm py-2 font-normal block whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-slate-700" : "text-white")
                                    }
                                    onClick={e => e.preventDefault()}
                                >
                                    Incorporation & Secretarial
                                </Link>
                                <Link
                                    href="#pablo"
                                    className={
                                        " hover:cursor-default text-sm py-2 font-normal block whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-slate-700" : "text-white")
                                    }
                                    onClick={e => e.preventDefault()}
                                >
                                    Accounting, GST & Tax Filing
                                </Link>
                                {/* <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" /> */}
                                <Link
                                    href="#pablo"
                                    className={
                                        " hover:cursor-default text-sm py-2 font-normal block whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-slate-700" : "text-white")
                                    }
                                    onClick={e => e.preventDefault()}
                                >
                                    HR & Payroll
                                </Link>
                                <Link
                                    href="#pablo"
                                    className={
                                        " hover:cursor-default text-sm py-2 font-normal block whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-slate-700" : "text-white")
                                    }
                                    onClick={e => e.preventDefault()}
                                >
                                    Fund Administration
                                </Link>
                                <Link
                                    href="#pablo"
                                    className={
                                        " hover:cursor-default text-sm py-2 font-normal block whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-slate-700" : "text-white")
                                    }
                                    onClick={e => e.preventDefault()}
                                >
                                    Management Consulting
                                </Link>
                            </div>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:p-0 text-lg font-medium text-black dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Clients</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-lg font-medium">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-lg font-medium text-black">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">
                <p className="text-center">Copyright © 2023 BSAS.</p>
            </div>
        </div>
        // </nav>

    );
}