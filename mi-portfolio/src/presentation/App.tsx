import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import GridBg from "@/presentation/components/atoms/GridBg";
import ScrollProgress from "@/presentation/components/atoms/ScrollProgress";
import Router from "@/presentation/routes/router";

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
      <ScrollProgress />
      <Router />
      <Analytics />
    </>
  );
}

export default App;
