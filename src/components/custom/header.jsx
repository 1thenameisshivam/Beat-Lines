import React from "react";
import { Music4 } from "lucide-react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = async () => {
  const { isAuthenticated } = getKindeServerSession();

  const isUserAuthenticated = await isAuthenticated();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Music4 className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Beat&gt;&gt;Lines
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Docs
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              variant="outline"
              className="inline-flex items-center"
              asChild
            >
              <Link href={"/dashboard/" + user?.id}>Dashboard</Link>
            </Button>
          </div>
          <nav className="flex items-center">
            {isUserAuthenticated ? (
              <LogoutLink>
                <Button variant="ghost" className="inline-flex items-center">
                  Log out
                </Button>
              </LogoutLink>
            ) : (
              <>
                <LoginLink>
                  <Button variant="ghost" className="inline-flex items-center">
                    Log in
                  </Button>
                </LoginLink>
                <RegisterLink>
                  <Button
                    variant="default"
                    className="inline-flex items-center"
                  >
                    Sign up
                  </Button>
                </RegisterLink>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
