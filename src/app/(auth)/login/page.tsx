import AuthForm from "@/components/auth-form"
import { Icons } from "@/components/icons"
import Link from "next/link"

interface props {
    
}

const Login = ({

}) => {
    return(
        <main
        className="
        flex
        flex-col
        items-center
        justify-center
        py-8
        px-8
        h-full
        font-inherit
        ">
            <nav>
                
            </nav>

            <div
            className="
            w-[min(100%,350px)]
            flex
            flex-col
            items-center
            ">
                <Icons.logo size={32}/>

                <h1
                className="
                text-center
                text-neutral-800
                text-[24px]
                font-bold
                mt-2
                ">
                    Welcome back
                </h1> 

                <p
                className="
                text-center
                text-neutral-800/60
                mt-2
                mb-6
                text-[14px]
                ">
                    Enter your email to sign in to your account
                </p>

                <AuthForm/>

                <Link 
                className="
                transition-colors
                mt-4
                text-[14px]
                underline
                text-neutral-800/60
                hover:text-neutral-800
                "
                href="/register">
                   {"Don't have an account? Sign up"}
                </Link>
            </div>
        </main>
    )
}

export default Login