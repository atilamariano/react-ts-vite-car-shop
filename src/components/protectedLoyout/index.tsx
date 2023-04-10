import { UseAuth } from "../../context/AuthProvider/use.Auth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = UseAuth();

  if (!auth.email) {
    return <h1>You don´t have access</h1>;
  }

  return children
}