
import React from 'react'
import { cn } from './utils';

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}
const MaxWidthWrapper = ({
  children,
  className,
}: MaxWidthWrapperProps) => {
  return (
    <div className={cn(
      'mx-auto relative w-full max-w-screen-xl px-2.5 md:px-20 h-full',
      className,
    )}>
      {children}
    </div>
  )
}
export default MaxWidthWrapper
