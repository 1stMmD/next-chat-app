"use client"

import { useSession, signIn , signOut } from "next-auth/react"
import Image from "next/image"

function UserInformation() {
    const { data, status } = useSession()

    if(status === "loading") return <p>Loading...</p>

    if(status === "unauthenticated") return (
        <div>
            {"user doesn't exists"} <br/>
            <button
            onClick={() => {
                signIn("linkedin")
            }}>
                SignIn
            </button>
        </div>
    )

    return (
        <div>
            <Image src={data?.user?.image ?? ""} alt="" width={100} height={100} className="rounded-full"/>

            <br/>

            <button
            onClick={() => {
                signOut()
            }}>
                SignOut
            </button>
        </div>
    )
}

export default UserInformation