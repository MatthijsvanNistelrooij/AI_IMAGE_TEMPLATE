import Link from "next/link"
import React from "react"

const Home = () => {
  return (
    <main className="w-screen items-center p-24 flex flex-col gap-2">
      <Link href="/sign-in" className="border border-gray-300 p-3 rounded-lg hover:bg-gray-200">
        SIGN IN{" "}
      </Link>
      <Link href="/sign-up" className="border border-gray-300 p-3 rounded-lg hover:bg-gray-200">
        SIGN UP
      </Link>
      <Link href="/profile" className="border border-gray-300 p-3 rounded-lg hover:bg-gray-200">
        PROFILE
      </Link>
      <Link href="/create" className="border border-gray-300 p-3 rounded-lg hover:bg-gray-200">
        CREATE
      </Link>
      <Link href="/credits" className="border border-gray-300 p-3 rounded-lg hover:bg-gray-200">
        CREDITS
      </Link>
    </main>
  )
}

export default Home
