import { getUserById } from "@/lib/actions/user.actions"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import React from "react"

const Profile = async ({ searchParams }: SearchParamProps) => {
  // const page = Number(searchParams?.page) || 1
  const { userId } = auth()

  if (!userId) redirect("/sign-in")
  const user = await getUserById(userId)

  return (
    <div>
      Profile
      <div>
        {/* <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2> */}
      </div>
    </div>
  )
}

export default Profile
