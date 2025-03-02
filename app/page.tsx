import { SignOutForm } from '@/components/form/sign-out';
import { AsyncComponent } from '@/components/test/async-component';

export default function Home() {
  return (
    <div>
      <AsyncComponent />
      <SignOutForm />
    </div>
  );
}
