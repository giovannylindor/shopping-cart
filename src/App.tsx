import { Theme } from "@radix-ui/themes"
import { Navbar } from "./components/Navbar"
import { Outlet } from "react-router"

export default function App() {
  
  return (
    <>
    <html>
      <body>
        <Theme accentColor="blue" grayColor="gray" >
          <Navbar />
          <Outlet />
        </Theme>
      </body>
    </html>
    </>
  )
}
