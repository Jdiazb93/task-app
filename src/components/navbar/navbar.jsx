import Link from "next/link";
import { Navbar as NavbarOptions } from '@/utils/navbar'

export default function Navbar() {
  return (
    <section className="w-full bg-slate-900 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-4xl">
          <p>Tasks Manager</p>
        </div>
        <nav className="font-bold text-lg">
          <ul className="flex gap-5">
            {NavbarOptions.map((nav, index) => {
              return (
                <Link href={nav.path} key={index}>
                  <li className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer">
                    {nav.name}
                  </li>
                </Link>
              )
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
