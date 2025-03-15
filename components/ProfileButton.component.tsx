"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import Link from "next/link";


export function ProfileButton() {
  const { userData } = useUserContext();
  const router = useRouter();

  return (
    <div className="cont hover:cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="border-2 border-white/80 dark:border-yellow-400 hover:border-yellow-400 dark:hover:border-yellow-300 transition-colors">
            {userData?.src ? (
              <AvatarImage src={userData.src} alt={userData?.name || "User"} />
            ) : (
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            )}
            <AvatarFallback className="bg-yellow-500 text-black font-bold">
              {userData?.name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="ml-4 font-bold">
            {userData?.name || "User"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:bg-yellow-50 dark:hover:bg-yellow-900/20 cursor-pointer">
            <Link href="/" className="w-full">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-yellow-50 dark:hover:bg-yellow-900/20 cursor-pointer">
            <Link href="/profile" className="w-full">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-yellow-50 dark:hover:bg-yellow-900/20 cursor-pointer">
            <Link href="/admin" className="w-full">Admin</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {userData ? (
              <Button
                variant="outline"
                className="w-full border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-950/50"
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="default"
                className="w-full bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-black font-bold"
              >
                Login
              </Button>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button 
              className="w-full bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-black font-bold"
            >
              Get Started
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}