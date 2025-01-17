"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BiMenu } from "react-icons/bi";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { Truculenta } from "next/font/google";
import { useFacility } from "./ContextAPI/FacilityContext";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import { useSignUp } from './ContextAPI/SignUpContext'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const { toggleFacility } = useFacility();
  const { toggleSignUp } = useSignUp();

  const click = () => {
    setOpen(true);
  };

  const facilityfunc = () => {
    useRouter.push("/");
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-3 top-2 ml-0 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon
                            className="h-6 w-6 text-sblack"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6"></div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6  ">
                        <ul className="flex flex-col gap-10 justify-center items-center ">
                          <div className="flex">
                            <div className="text-[#0479CE] font-700  text-[40px] leading-28 font-poppins ">
                              HISC{" "}
                            </div>
                            <div className="text-[6px] leading-[9px] mt-0 w-[50px] md:hidden text-[#1F1F1F]">
                              Heartfulness International <br /> Sports Center
                            </div>
                          </div>

                          <div className=" mt-20 font-roboto font-500 text-26 leading-80 flex flex-col justify-center items-center text-center">
                            <Link
                              href="/"
                              className="cursor-pointer text-sblack"
                            >
                              Home
                            </Link>
                            <Link
                              href="about"
                              className="cursor-pointer text-sblack"
                            >
                              About Us
                            </Link>
                            <Link
                              href=""
                              onClick={(e) => {
                                e.preventDefault();
                                // facilityfunc();
                                // useRouter.push("/");
                                toggleFacility();
                                setOpen(false);
                              }}
                              className="cursor-pointer text-sblack"
                            >
                              Facility
                            </Link>
                          </div>

                          <li
                            className="bg-[#0479CE]  text-white text-center flex items-center justify-center  text-13.85 font-500 font-roboto leading-16.23 rounded-3xl w-175 h-52  mt-[65px]"
                            onClick={() => toggleSignUp(true)}
                          >
                            SIGN UP NOW
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <nav className="flex justify-between max-sm:z-30 relative">
        <div className="flex gap-1 lg:gap-2 mt-2">
          <div className="text-[#0479CE] text-[50px] mt-2.5 font-700 md:mt-0 md:text-80 font-poppins">
            HISC{" "}
          </div>
          <div className="text-[8px] leading-[10px] mt-8 w-[50px] md:hidden lg:block lg:mt-9 text-[#1F1F1F] lg:w-[110px] lg:h-[54px] font-custom font-400 lg:text-[16px] lg:leading-[18px]">
            Heartfulness International Sports Center
          </div>
        </div>

        <ul className="hidden  md:flex gap-10 mt-16  font-roboto font-500 text-[20px]   ">
          <li className="mt-1 cursor-pointer ">
            <Link href="/">
              <h1 className="group text-sblack">
                Home{" "}
                <p
                  className="group-hover:border-b-4 h-1 w-7 border-b-[#0479CE]"
                ></p>
              </h1>
            </Link>
          </li>
          <li className="mt-1 cursor-pointer ">
            <Link href="about">
              <h1 className="group text-sblack">
                About us{" "}
                <p className="group-hover:border-b-4 h-1 w-7 border-b-[#0479CE]"></p>
              </h1>
            </Link>
          </li>
          <li className="mt-1 cursor-pointer ">
            <Link href="/#facility" scroll={false}>
              <h1 className="group text-sblack">
                Facility{" "}
                <p className="group-hover:border-b-4 h-1 w-7 border-b-[#0479CE]"></p>
              </h1>
            </Link>
          </li>
          <li
            className="bg-[#0479CE] cursor-pointer text-white flex justify-center items-center text-center rounded-full w-[120px] h-[40px]  font-roboto font-500 text-16 hover:bg-white hover:text-[#0479CE]"
            onClick={() => toggleSignUp(true)}
          >
            Sign up
          </li>
        </ul>
        <div
          className="bg-white shadow p-2 rounded-2xl flex items-center justify-center w-[2.8rem] h-[2.8rem] md:hidden mt-8 cursor-pointer"
          onClick={click}
        >
          <Bars3BottomRightIcon
            className="h-10 w-10 text-grey"
            aria-hidden="true"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
