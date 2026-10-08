// importing from react
import Link from "next/link";
import Image from "next/image";
// importing assets
import logo from "/public/images/logo.svg";

export function NavLogo() {
    return (
        <>
            <Link className="mr-6 flex items-center space-x-2" href="/">
                <Image
                    src={logo}
                    alt="logo"
                    className="w-[140px] md:w-[200px]"
                />
            </Link>
        </>
    );
}