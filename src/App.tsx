import { Theme } from "@radix-ui/themes"
import { Navbar } from "./components/Navbar"
import { Outlet } from "react-router"
import { CartProvider } from "./contexts/CartContext"




export default function App() {
  
  return (
    <>
    <html>
      <body>
        <Theme accentColor="blue" grayColor="gray" >
          <CartProvider>
            <Navbar />
            <Outlet />
          </CartProvider>
        </Theme>
      </body>
    </html>
    </>
  )
}
