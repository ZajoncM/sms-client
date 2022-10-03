import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./providers/UserProvider";
import { router } from "./routes/routes";
import { client } from "./utils/apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
