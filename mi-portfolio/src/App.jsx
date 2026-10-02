import Router from "./routes/router.jsx";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import GridBg from "./components/GridBg.jsx";

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
      <GridBg />
      <div
        className="scroll-progress fixed inset-x-0 top-0 z-50 h-0.5 bg-warm"
        aria-hidden="true"
      ></div>
      <Router />
      <Analytics />
    </>
  );
}

export default App;
