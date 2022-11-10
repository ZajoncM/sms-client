import { createContext, PropsWithChildren, useContext } from "react";
import { MeFieldsFragment, useMeQuery } from "../generated/graphql";

const UserContext = createContext<MeFieldsFragment | undefined>(undefined);

export const useUserContext = () => {
  return useContext(UserContext);
};

type ProviderProps = PropsWithChildren;

const UserProvider = ({ children }: ProviderProps) => {
  const { data, loading } = useMeQuery();

  if (loading) return <div>loading</div>;

  return (
    <UserContext.Provider value={data?.currentUser}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
