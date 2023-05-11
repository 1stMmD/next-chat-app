import { cn } from '@/lib/utils'
import React from 'react'

interface props extends React.ComponentPropsWithoutRef<"input"> {
    error? : string,
    label? : string,
}

const Input = React.forwardRef<
    React.ElementRef<"button">,
    props
>(({className, error, label, ...props}, ref) => {
  return (
    <div
    className='
    relative
    flex
    flex-col
    gap-3
    w-full
    '>
        { label ? 
        <p
        className='
        text-[14px]
        font-medium
        '>
            {label}
        </p> : ""}

        <div
        className='
        transition-colors
        relative py-2 px-4
        border-[1px]
        border-neutral-400
        focus-within:border-neutral-400
        focus-within:shadow-[0px_0px_0px_2px]
        focus-within:shadow-neutral-500/10
        flex items-center justify-center
        rounded-md w-full
        '>
            <input
            className={cn(
                "text-[14px] w-full outline-none text-neutral-800",
                className
            )}
            {...props}
            />
        </div>
    </div>
  )
})

Input.displayName = "Input"

export default Input