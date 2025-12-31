import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Form from "./components/Form";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  useEffect(async () => {
    const response = await fetch('https://whitelist-backend-coral.vercel.app/api/view', {
      method: 'POST',
    })
  },[]);
  
  return (
    <>
      <Hero onOpenForm={() => setIsFormOpen(true)} />
      {isFormOpen && (
        <Form
          onOpenWallet={() => setIsWalletOpen(true)}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </>
  );
}

export default App;
