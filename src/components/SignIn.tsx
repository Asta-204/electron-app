import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';

export default function SignIn() {
  return (
    <AppProvider>
      <SignInPage
        providers={[...]}
        signIn={async (provider) => {
          // Your sign in logic
        }}
      />
    </AppProvider>
  );
}