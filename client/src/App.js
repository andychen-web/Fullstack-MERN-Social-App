import { AuthContextProvider } from "./context/AuthContext";
import Router from "./Router";

function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </div>
  );
}

export default App;
