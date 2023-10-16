'use client'
import { useState, useEffect } from 'react'
import { Switch, Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { NavbarOptions } from '@/utils/navbar'
import { MoonIcon } from '../moonIcon/moonIcon'
import { SunIcon } from '../sunIcon/sunIcon'
import Link from "next/link";

export default function WebNavbar() {
  const [checked, setChecked] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  let defaultCheck = false

  if (typeof window !== 'undefined') {
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

  const path = usePathname()

  return (
      <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-blue-700 dark:bg-slate-950 text-white">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <div className="font-bold text-4xl">
            <p>Tasks Manager</p>
          </div>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <Switch onChange={switchTheme} color="secondary" isSelected={checked} startContent={<MoonIcon />} endContent={<SunIcon />} />
          {NavbarOptions.map((nav, index) => {
            return (
              <Link href={nav.path} key={index} className="text-white">
                <NavbarItem isActive={path === nav.path} key={index} className={`${path === nav.path && 'bg-blue-900 dark:bg-slate-800'} hover:bg-blue-800 dark:hover:bg-slate-700 p-3 rounded-lg`}>
                  {nav.name}
                </NavbarItem>
              </Link>
            )
          })}
        </NavbarContent>
        <NavbarMenu className='bg-white'>
          {NavbarOptions.map((nav, index) => {
              return (
                <Link href={nav.path} key={index} className={`${path === nav.path ? 'text-blue-600' : 'text-black'}`}>
                  <NavbarItem isActive={path === nav.path} key={index} onClick={() => setIsMenuOpen(false)}>
                    {nav.name}
                  </NavbarItem>
                </Link>
              )
          })}
        </NavbarMenu>
      </Navbar>
  );
}
