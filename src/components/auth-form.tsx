"use client"

import React from 'react'
import Input from './ui/input'
import Button from './ui/button'
import { Icons } from './icons'
import { signIn } from 'next-auth/react'

const AuthForm = () => {

    return (
        <div
        className='
        flex
        flex-col
        gap-4
        w-full
        relative
        '>
            <form
            className='
            relative
            flex
            flex-col
            w-full
            gap-2
            '>
                <Input
                placeholder='david@edgerunners.com'
                />
                <Button block>
                    Sign In With Email
                </Button>
            </form>

            <div
            className='
            relative
            flex items-center justify-center
            gap-3
            text-[12px]
            '>
                <span className='inline-block w-full h-[1px] flex-shrink bg-neutral-300'/>
                <span className='flex-shrink-0 whitespace-nowrap text-neutral-300'>OR CONTINUE WITH</span>
                <span className='inline-block w-full h-[1px] flex-shrink bg-neutral-300'/>
            </div>

            <div
            className='
            flex
            flex-col
            gap-2
            '>
                {providers.map((provider, idx) => {
                    const Icon = Icons[(provider as "linkedin" | "github")]
                    return (
                    <Button
                    onClick={() => {
                        signIn(provider)
                    }}
                    block secondary 
                    key={idx}>
                        <Icon strokeWidth={1.5} size={16} stroke="currentColor" fill="none"/>
                        
                        <span
                        className='
                        capitalize
                        '>
                            {provider}
                        </span>
                    </Button>
                )})}
            </div>
        </div>
    )
}

export default AuthForm

const providers = [
    "linkedin",
    "github"
]