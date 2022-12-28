import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Apollo } from "./utils/apollo";

function App() {
  return (
    <Apollo>
      <RouterProvider router={router} />
    </Apollo>
  );
}

export default App;
