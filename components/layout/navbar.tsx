"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { useState } from "react";

export default function NavBar({ session }: { session?: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  const [showPersonal, setShowPersonal] = useState(false);

  const [sesson, setSession] = useState({
    user: {
      name: "Corn",
      email: "1234567@qq.com",
    },
  });

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center font-display text-2xl">
              <Image
                src="/logo.png"
                alt="Precedent logo"
                width="30"
                height="30"
                className="mr-2 rounded-sm"
              ></Image>
              <p>Vip</p>
            </Link>

            <Link className="ml-4 font-bold lg:ml-10" href="/">
              Home
            </Link>

            <Link className="ml-4 font-bold lg:ml-10" href="/level">
              Level
            </Link>
          </div>

          <div>
            {showPersonal ? (
              <UserDropdown session={sesson} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => {
                  // setShowSignInModal(true);
                  setShowPersonal(true);
                }}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
