import Router from "./routes/router.jsx";
import { Toaster } from "react-hot-toast";

import BlurBg from "./components/BlurBg.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <BlurBg />
      <Router />
    </>
  );
}

export default App;
