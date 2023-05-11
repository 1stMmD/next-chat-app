import AuthForm from "@/components/auth-form"
import UserInformation from "@/components/user-information"

const page = () => {
  return(
    <main
    className="
    w-full
    flex
    flex-col
    items-center
    ">
      <div
      className="
      relative
      w-[350px]
      flex items-start flex-col
      ">
        <AuthForm/>
      </div>
    </main>
  )
}

export default page