'use client'

import React, { useEffect, useState } from "react";
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
        <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">

            <div className=" whitespace-nowrap text-black">
                <span className="text-2xl font-bold">
                    BSAS <br />
                </span>
                <span className="text-xl font-light">
                    A Member of Titan Corporate Services
                    Services
                </span>
            </div>

            <div className="w-full md:block md:w-auto flex items-center" >
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-black"
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
                                "text-base z-50 float-left py-2 list-none text-left rounded mt-1"
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 font-normal block whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-slate-700" : "text-white")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Action
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 font-normal block whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-slate-700" : "text-white")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Another action
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 font-normal block whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-slate-700" : "text-white")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Something else here
                            </a>
                            {/* <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" /> */}
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 font-normal block whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-slate-700" : "text-white")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Seprated link
                            </a>
                        </div>
                        {/* <!-- Dropdown menu --> */}
                        {/* <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                </div>
                            </div> */}
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:p-0 text-black dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Clients</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        // </nav>

    );
}