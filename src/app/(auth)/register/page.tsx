import AuthForm from "@/components/auth-form"
import { Icons } from "@/components/icons"
import Link from "next/link"

const Register = () => {
  return (
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
                Create account
            </h1> 

            <p
            className="
            text-center
            text-neutral-800/60
            mt-2
            mb-6
            text-[14px]
            ">
                Enter your email to create your account
            </p>

            <AuthForm/>
            
            <p
            className="
            text-center
            text-neutral-800/60
            text-[14px]
            mt-4
            "> {"By clicking continue, you agree to our "}
                <Link
                className="
                transition-colors
                underline
                hover:text-neutral-800
                "
                href="/terms">
                    Terms
                </Link>
                {" of Service and "}
                <Link
                className="
                transition-colors
                underline
                hover:text-neutral-800
                "
                href="/policies">
                    Privacy Policy
                </Link>
                {" ."}
            </p>
        </div>
    </main>
  )
}

export default Register