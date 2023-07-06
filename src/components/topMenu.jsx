'use client'

import React, { useState } from "react";
import { arrow, createPopper } from "@popperjs/core";
import Link from 'next/link'

export default function Navbar({ color }) {


    // !========================
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    // bg colors
    let bgColor;
    color === "white"
        ? (bgColor = "bg-slate-700")
        : (bgColor = "bg-" + color + "-500");
    // !========================
    return (

        <nav className="bg-white border-gray-200 ">
            <div className="max-w-screen-xl mx-auto 2xl:max-w-screen-2xl 2xl:mx-auto flex flex-wrap items-center justify-between p-4">
                <Link href="#" className="flex items-center">
                    <div className="self-center whitespace-nowrap text-black">
                        <span className="text-2xl font-bold">
                            BSAS <br />
                        </span>
                        <span className="text-base font-light">
                            A Member of Titan Corporate Services
                        </span>
                    </div>
                </Link>
                <div className="w-full md:block md:w-auto" >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <Link href="/home" className="block py-2 px-4 pl-3 pr-4 text-black text-lg font-medium bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-4 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-black text-lg font-medium"
                                type="button"
                                ref={btnDropdownRef}
                                onClick={() => {
                                    dropdownPopoverShow
                                        ? closeDropdownPopover()
                                        : openDropdownPopover();
                                }}>

                                Services
                                {!dropdownPopoverShow && (<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>)
                                }
                            </button>

                            <div
                                ref={popoverDropdownRef}
                                className={
                                    (dropdownPopoverShow ? "block " : "hidden ") +
                                    (color === "white" ? "bg-white " : bgColor + " ") +
                                    "text-base z-50 float-left py-2 px-4 list-none text-left rounded shadow-lg mt-1"
                                }
                                style={{ minWidth: "12rem" }}
                            >
                                <Link
                                    href="/services"
                                    className={
                                        " py-2 px-4 font-normal block whitespace-nowrap bg-transparent hover:text-[#2639ED]" +
                                        (color === "white" ? " text-slate-700" : "text-white")
                                    }
                                // onClick={e => e.preventDefault()}
                                >
                                    Overview
                                </Link>
                                <Link
                                    href="/IncorporationSecretarial"
                                    className={
                                        " py-2 px-4 font-normal block whitespace-nowrap bg-transparent hover:text-[#2639ED]" +
                                        (color === "white" ? " text-slate-700" : "text-white")
                                    }
                                // onClick={e => e.preventDefault()}
                                >
                                    Incorporation & Secretarial
                                </Link>
                                <Link
                                    href="#pablo"
                                    className={
                                        " hover:cursor-default py-2 px-4 font-normal block whitespace-nowrap bg-transparent hover:text-[#2639ED]" +
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
                                        " hover:cursor-default py-2 px-4 font-normal block whitespace-nowrap bg-transparent hover:text-[#2639ED]" +
                                        (color === "white" ? " text-slate-700" : "text-white")
                                    }
                                    onClick={e => e.preventDefault()}
                                >
                                    HR & Payroll
                                </Link>
                                <Link
                                    href="#pablo"
                                    className={
                                        " hover:cursor-default  py-2 px-4 font-normal block whitespace-nowrap bg-transparent hover:text-[#2639ED]" +
                                        (color === "white" ? " text-slate-700" : "text-white")
                                    }
                                    onClick={e => e.preventDefault()}
                                >
                                    Fund Administration
                                </Link>
                                <Link
                                    href="#pablo"
                                    className={
                                        " hover:cursor-default  py-2 px-4 font-normal block whitespace-nowrap bg-transparent hover:text-[#2639ED]" +
                                        (color === "white" ? " text-slate-700" : "text-white")
                                    }
                                    onClick={e => e.preventDefault()}
                                >
                                    Management Consulting
                                </Link>
                            </div>
                            {/* <!-- Dropdown menu --> */}
                            {/* <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 px-4 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link href="#" className="block px-4 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-4 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-4 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <Link href="#" className="block px-4 py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</Link>
                                </div>
                            </div> */}
                        </li>
                        <li>
                            <Link href="/clients" className="block py-2 px-4 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:p-0 text-black text-lg font-medium dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Clients</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 px-4 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-black text-lg font-medium">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block py-2 px-4 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-black text-lg font-medium">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}