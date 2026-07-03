import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white shadow">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <h1 className="text-2xl font-bold">
                    Nexora
                </h1>

                <div className="flex items-center gap-6">

                    <Link
                        href="/"
                        className="hover:text-yellow-300 transition"
                    >
                        Home
                    </Link>

                    <Link
                        href="/About"
                        className="hover:text-yellow-300 transition"
                    >
                        About
                    </Link>

                    <Link
                        href={route("profile")}
                        className="hover:text-yellow-300 transition"
                    >
                        profile
                    </Link>

                    <Link
                        href={route("notice.create")}
                        className="hover:text-yellow-300 transition"
                    >
                        NOTICE
                    </Link>
                    <Link href={route("portfolio")} className="hover:text-yellow-300 transition">
                        Portfolio
                    </Link>
                    <Link href={route("Products")} className="hover:text-yellow-300transition">
                        Products</Link>


                </div>

            </div>
        </nav>
    );
}