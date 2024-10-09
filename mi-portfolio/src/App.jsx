import Router from "./routes/router.jsx";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import BlurBg from "./components/BlurBg.jsx";

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <BlurBg />
      <Router />
      <Analytics />
    </>
  );
}

export default App;
