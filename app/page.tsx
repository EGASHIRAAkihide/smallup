import { AsyncComponent } from '@/components/test/async-component';
import { signOut } from "@/auth"
import { ClientComponent } from '@/components/test/client-component';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <AsyncComponent />
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <ClientComponent />
        <button type="submit" className="cursor-pointer p-4 bg-green-50">Sign Out</button>
        <Link href="/profile">/profile</Link>
      </form>
    </div>
  );
}
