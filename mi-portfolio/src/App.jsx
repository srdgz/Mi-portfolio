import Router from "./routes/router.jsx";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import GlowBg from "./components/GlowBg.jsx";

function App() {
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "var(--color-card)",
            color: "var(--color-ink)",
            border: "1px solid var(--color-line)",
          },
        }}
      />
      <GlowBg />
      <Router />
      <Analytics />
    </>
  );
}

export default App;
