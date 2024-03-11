import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Benifits = () => {
  return (
    <div className='py-[10rem] h-screen  flex flex-col gap-10 '>
      <div className='flex justify-center items-center relative'>
        <div className='h-[35rem] relative rounded-[15rem] w-[40rem] bg-secondary'>
          <div className='h-[50rem] w-[35rem] absolute overflow-hidden bottom-0 rounded-[12rem] left-1/2 -translate-x-1/2'>
            <Image
              src={"/assets/benifits/benifitHero.png"}
              alt='benifit hero'
              height={873}
              width={593}
              className='object-contain'
            />
          </div>
        </div>
        <div className='absolute -top-20  left-0 border rounded-md flex flex-col gap-2 p-4 w-full max-w-[20rem]'>
          <h3 className='font-bold'>Benifit 1</h3>
          <p className='w-full p-0 m-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reprehenderit.</p>
        </div>
        <div className='absolute backdrop-blur-lg -top-10 right-0 border rounded-md flex flex-col gap-2 p-4 w-full max-w-[20rem]'>
          <h3 className='font-bold'>Benifit 2</h3>
          <p className='w-full p-0 m-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reprehenderit.</p>
        </div>
        <div className='absolute -bottom-10 -right-10 border rounded-md flex flex-col gap-2 p-4 w-full max-w-[20rem]'>
          <h3 className='font-bold'>Benifit 3</h3>
          <p className='w-full p-0 m-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reprehenderit.</p>
        </div>
        <div className='absolute backdrop-blur-md bottom-10 -left-10 border rounded-md flex flex-col gap-2 p-4 w-full max-w-[20rem]'>
          <h3 className='font-bold'>Benifit 4</h3>
          <p className='w-full p-0 m-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reprehenderit.</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button className='text-2xl p-5 py-7 font-semibold'>Ask Now</Button>
      </div>
    </div>
  )
}

export default Benifits
