import Link from "next/link";

export default function AppNavbar() {
  return (
    <nav
      className="bg-primary shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        <div>
          <Link href="./" className="font-bold text-xl">
            SaavnPlyr
          </Link>
        </div>
        <div>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </nav>
  );
}
