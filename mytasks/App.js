import React from "react";
import { GlobalProvider } from "@/app/context/globalProvider";
import Tasks from "@/app/Components/Tasks/Tasks";

function App() {
  return (
    <GlobalProvider>
      <Tasks />
      {/* Other components */}
    </GlobalProvider>
  );
}

export default App;
