import { auth } from "@/auth"
import Image from 'next/image'

export async function AsyncComponent() {
  const session = await auth()
 
  if (!session?.user) return null
  const user = session.user
 
  return (
    <div>
      <div className="p-4 bg-amber-50 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">User Info</h1>
        <div>{user.email}</div>
        <div>{user.id}</div>
        <div>{user.name}</div>
        {user.image && (
          <div className="relative w-12 h-12">
            <Image src={user.image} alt={user.name || 'name'} sizes="100vw" fill />
          </div>
        )}
      </div>
    </div>
  )
}