'use client'
import { useState, useEffect } from 'react'
import Link from "next/link";
import { Navbar as NavbarOptions } from '@/utils/navbar'
import { Switch } from '@nextui-org/react'
import { MoonIcon } from '../moonIcon/moonIcon'
import { SunIcon } from '../sunIcon/sunIcon'

export default function Navbar() {
  const [checked, setChecked] = useState(false)
  let defaultCheck = false

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    defaultCheck = localStorage.getItem('theme') === 'dark' ? true : false
  }

  useEffect(() => {
    setChecked(defaultCheck)
  }, [defaultCheck])

  const switchTheme = (value) => {
    if(value.target.checked) {
      localStorage.setItem('theme', 'dark')
      setChecked(true)
    }
    if(!value.target.checked) {
      localStorage.setItem('theme', 'light')
      setChecked(false)
    }
  }

  if(typeof window !== 'undefined'){
    if (checked) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <section className="w-full bg-blue-700 text-white dark:bg-slate-900 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-4xl">
          <p>Tasks Manager</p>
        </div>
        <nav className="font-bold text-lg flex">
          <Switch onChange={switchTheme} color="secondary" isSelected={checked} startContent={<MoonIcon />} endContent={<SunIcon />} />
          <ul className="flex gap-5">
            {NavbarOptions.map((nav, index) => {
              return (
                <Link href={nav.path} key={index}>
                  <li className="p-3 hover:bg-blue-800 dark:hover:bg-slate-800 rounded-lg cursor-pointer">
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
