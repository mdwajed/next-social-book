import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="h-[calc(100vh-96px) flex justify-center items-center">
<SignIn />
    </div>
  
)
}