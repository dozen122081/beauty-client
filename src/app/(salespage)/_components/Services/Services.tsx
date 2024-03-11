import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='flex flex-col gap-20 py-20'>
            <div className='w-full gap-5 flex justify-center'>
                <header className='flex flex-col gap-2 items-center'>
                    <span className='text-light text-3xl text-primary'>Services</span>
                    <div className='flex flex-col items-center text-5xl'>
                        <h2>We experienced in making</h2>
                        <h2>you more beautiful</h2>
                    </div>
                </header>
            </div>
            <div className='flex gap-5 justify-around'>
                <div className='flex flex-col gap-4 max-w-[15rem]'>
                    <div className='flex flex-col gap-4 items-center'>
                        <Image
                            src={'/assets/services/hairDress.svg'}
                            alt='makeup'
                            height={80}
                            width={80}
                            className='object-contain'
                        />
                        <div>
                            <h2 className='font-semibold text-lg'>HAIR TREATMENT</h2>
                        </div>
                    </div>
                    <div className='text-center text-muted'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 max-w-[15rem]'>
                    <div className='flex flex-col gap-4 items-center'>
                        <Image
                            src={'/assets/services/makeup.svg'}
                            alt='makeup'
                            height={80}
                            width={80}
                            className='object-contain'
                        />
                        <div>
                            <h2 className='font-semibold text-lg'>MAKEUP</h2>
                        </div>
                    </div>
                    <div className='text-center text-muted'>
                        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 max-w-[15rem]'>
                    <div className='flex flex-col gap-4 items-center'>
                        <Image
                            src={'/assets/services/pedi.svg'}
                            alt='makeup'
                            height={80}
                            width={80}
                            className='object-contain'
                        />
                        <div>
                            <h2 className='font-semibold text-lg'>PEDICURE</h2>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='text-center text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
