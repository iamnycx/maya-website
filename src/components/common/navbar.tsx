import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute inset-x-0">
      <div className="mx-auto flex max-w-[92vw] items-center justify-between py-4">
        <Link href="" className="text-4xl font-semibold">
          Dr. Maya Reynolds
        </Link>
        <div className="flex gap-8">
          <Link href="/about" className="text-2xl">
            Blog
          </Link>
          <Link href="/about" className="text-2xl">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
