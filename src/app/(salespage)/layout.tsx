import React from 'react'
import Navbar from './_components/Navbar/Navbar'
import MaxWidthWrapper from '@/lib/MaxWidthWrapper'

const SalespageLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <MaxWidthWrapper>
            <Navbar />
            {children}
        </MaxWidthWrapper>
    )
}

export default SalespageLayout
