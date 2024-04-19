import React from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
const initialOptions = {
  "client-id": "ARyP9BrZmef9l1HWiEFz9pwOXZPydBqMWYeopZQVehJI4s2vvANRK9SVcsSYCStc8qZaVdESRaCsu5r4",
  currency: "USD",
  intent: "capture",
};
function App() {
  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
      <Layout/>
</PayPalScriptProvider>
     
    </div>
  )
}

export default App