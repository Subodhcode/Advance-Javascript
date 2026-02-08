import React from "react";
import { Link } from "react-router";
import { IoMdClose } from "react-icons/io";
export default function Header({ companyName, email, phone, user }) {
  console.log(user)
  //props obejct(key value pair) retun karta hai

  return (
    <header className="sticky top-0 left-0 w-full bg-[white]">
      <nav class="shadow-lg sticky top-0">
        <div class="max-w-[1320px] flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-7"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">
              {/* Flowbite*/}
              {/*{props.companyName}{/*props call karne ka tarika hai */}
              {companyName} | {email} | {phone}
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div class="md:static md:h-auto fixed h-screen bg-white  left-0 top-33 w-full md:block md:w-auto" id="navbar-default">
            <div className="md:hidden flex justify-between p-4 items-center">
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-16c774.svg" alt="" />

              <button className="cursor-pointer">
                <IoMdClose className="text-3xl " />
              </button>


            </div>
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <Link to={'/'}

                  class="block py-2 px-3  bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/about'}

                  class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to={'/Register'}

                  class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link to={'/login'}

                  class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link to={'/Product'}

                  class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
