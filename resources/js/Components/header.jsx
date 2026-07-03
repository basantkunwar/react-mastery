import { Link } from "@inertiajs/react";
export default function Header() {
    return (
       <div className="flex justify-between bg-slate-900 text-white p-4 ">
            <h1 className="text-2xl font-bold">School Management</h1>
            <Link href="/login">Login</Link>
       </div>
    );
}
