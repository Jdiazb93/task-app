import Link from "next/link";

export default function Navbar() {
  return (
    <section className="w-full bg-slate-900 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-4xl">
          <p>Tasks Manager</p>
        </div>
        <nav className="font-bold text-lg">
          <ul className="flex gap-5">
            <Link href="/">
              <li className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/tasks">
              <li className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer">
                Tasks
              </li>
            </Link>
            <Link href="/new">
              <li className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer">
                New Task
              </li>
            </Link>
            <Link href="/about">
              <li className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer">
                About
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
}
