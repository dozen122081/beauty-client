"use client"
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

const BookingForm = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <div className='py-24'>
            <div className='flex flex-col w-full items-center gap-7'>
                <span className='text-light text-3xl text-primary'>APPOINTMENT</span>
                <div className='text-5xl text-center'>
                    <h2>Make An Appointment</h2>
                </div>
            </div>
            <div className='flex w-full justify-center py-20'>
                <div className='flex flex-col gap-2 items-center w-full max-w-[30rem]'>
                    <div className='w-full'>
                        <Input
                            placeholder='Full Name'
                        />
                    </div>
                    <div className='w-full'>
                        <Input
                            placeholder='Phone number'
                        />
                    </div>
                    <div className='w-full '>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Input
                                    placeholder='Phone number'
                                />
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border shadow"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className='w-full'>
                        <Textarea placeholder="Type your message here." />
                    </div>
                    <Button className='w-full font-semibold my-3'>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default BookingForm
