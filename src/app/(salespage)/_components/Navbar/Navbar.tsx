import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { oswald } from '@/lib/constants/useFonts'
const Navbar = () => {
  return (
    <nav className='flex justify-between py-4 items-center'>
      <div className='flex items-center'>
        <Link href="/" className={`${oswald.className}`}>
            Hello Beauty
        </Link>
      </div>
      <div className='flex gap-7 items-center'>
        <div className='flex gap-4 items-center'>
            <Link href='#services'>
                About
            </Link>
            <Link href='#services'>
                Services
            </Link>
        </div>
        <div className='flex items-center'>
            <Button>
                Book Now
            </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
