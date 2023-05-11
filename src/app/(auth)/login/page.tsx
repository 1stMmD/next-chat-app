import AuthForm from "@/components/auth-form"
import { Icons } from "@/components/icons"

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
                ">
                    Enter your email to sign in to your account
                </p>

                <AuthForm/>
            </div>
        </main>
    )
}

export default Login