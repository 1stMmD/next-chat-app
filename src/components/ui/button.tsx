import { cn } from '@/lib/utils'
import React from 'react'

interface props extends React.ComponentPropsWithoutRef<"button"> {
    secondary? : boolean,
    block? : boolean,
}

const Button = React.forwardRef<
    React.ElementRef<"button">,
    props
>(({secondary = false, block = false, className, ...props},ref) => {
  return (
    <button
    ref={ref}
    className={cn(
        "px-2.5 py-2 text-[14px] rounded-md flex gap-1 items-center justify-center",
        secondary ?"text-neutral-800 bg-white hover:bg-neutral-800/5 border-[1px] border-neutral-400" :
        "bg-neutral-800 text-white hover:bg-neutral-800/90",
        block ? "w-full" : "w-fit",
        className
    )}
    {...props}
    />
  )
})

Button.displayName = "Button"

export default Button