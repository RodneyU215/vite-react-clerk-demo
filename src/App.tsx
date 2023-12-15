import './App.css';
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  useClerk,
  useSession,
} from '@clerk/clerk-react';

function App() {
  return (
    <>
      <SignedIn>
        <Welcome />
      </SignedIn>
      <SignedOut>
        <CustomSignIn />
      </SignedOut>
    </>
  );
}

function CustomSignIn() {
  const clerk = useClerk();

  return (
    <button onClick={() => clerk.openSignIn({})}>Sign in</button>
  );
}

function Welcome() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { session } = useSession();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <div>Hello {user.firstName}, welcome to Clerk!</div>
      <UserButton />
      <p>
        This session has been active since{' '}
        {session?.lastActiveAt.toLocaleString()}
      </p>
    </>
  );
}

export default App;
