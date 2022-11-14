import AuthProvider from "./providers/AuthContext";
import PostProvider from "./providers/PostContext";
import Routes from "./routes";
import GlobalBase from "./styles/base";
import GlobalReset from "./styles/reset";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <GlobalBase />
        <GlobalReset />
        <Toaster position="top-right" reverseOrder={false} />
        <Routes />
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
