import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Aboutus = () => {
    return (
        <div className='flex justify-between h-[85vh] gap-[7rem]'>
            <div className='flex items-center justify-center'>
                <div className='h-[25rem] w-[20rem] relative'>
                    <div className='h-[10rem] w-[10rem] absolute -bottom-[55%] -right-[20%]'>
                        <Image
                            src={"/assets/about/aboutS2.jpg"}
                            alt='about image'
                            height={920}
                            width={736}
                            className='object-fill rounded-md'
                        />
                    </div>
                    <div className='h-[10rem] w-[10rem] absolute -left-[30%] -top-[35%]'>
                        <Image
                            src={"/assets/about/aboutS1.jpg"}
                            alt='about image'
                            height={920}
                            width={736}
                            className='object-contain rounded-md'
                        />
                    </div>
                    <Image
                        src={"/assets/about/aboutHero.jpg"}
                        alt='about image'
                        height={1299}
                        width={736}
                        className='object-fill rounded-md'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-10 flex-1 py-20 justify-center'>
                <span className='text-light text-3xl text-primary'>About us</span>
                <div className='flex flex-col gap-1 text-6xl leading-[4.25rem]'>
                    <h2>Beauty is about being</h2>
                    <h2>comfortable in your</h2>
                    <h2>own skin</h2>
                </div>
                <div className='text-muted'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae fugiat, eius reprehenderit obcaecati aliquam et unde amet omnis cum suscipit delectus dolore quis consectetur dicta possimus cumque natus accusantium? Et a quia ipsa?</p>
                </div>
                <Button className=' w-fit p-7 text-2xl font-semibold'>
                    Learn More
                </Button>
            </div>
        </div>
    )
}

export default Aboutus
