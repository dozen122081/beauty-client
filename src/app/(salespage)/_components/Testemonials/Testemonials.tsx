import Image from 'next/image';
import React from 'react'

const Testemonials = () => {
    return (
        <div className='flex flex-col items-center gap-14'>
            <div className='flex flex-col w-full items-center gap-7'>
                <span className='text-light text-3xl text-primary'>About us</span>
                <div className='text-5xl text-center'>
                    <h2>What people say about</h2>
                    <h2>our services</h2>
                </div>
            </div>
            <div className='flex gap-10'>
                <div>
                    <div>
                        <div className='h-[10rem] w-[10rem] relative'>
                            <Image
                                src={"/assets/about/aboutS2.jpg"}
                                alt='about image'
                                height={920}
                                width={736}
                                className='object-fill rounded-md'
                            />
                            <div className='h-[12.5rem] rounded-md -z-10 w-[10rem] absolute top-2 bg-accent -right-2' />
                        </div>

                    </div>
                </div>
                <div className='max-w-[30rem] flex flex-col gap-4'>
                    <div>
                        <h3 className='text-xl font-medium'>Client name</h3>
                        <span className='text-muted text-sm'>post of business</span>
                    </div>
                    <div className=''>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat non ratione blanditiis sunt, officia commodi quae illo. Rerum itaque dolores quas consequuntur eaque?</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testemonials;
