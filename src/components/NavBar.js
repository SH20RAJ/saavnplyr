import Link from "next/link";

export default function AppNavbar() {
  return (
    <nav className="  p-4 shadow-sm  text-2xl ">
      <span className=" text-xl text-fuchsia-500 ">Hi, there</span> <br /><Link className=" bg-gradient-to-r from-fuchsia-200  to-teal-100 inline-block text-transparent bg-clip-text" href="/user"><>Sh</></Link>
    </nav>
  );
}
