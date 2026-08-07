import { Home } from "./pages/Home"
import { Theme } from "@radix-ui/themes"

export default function App() {
  
  return (
    <>
    <html>
      <body>
        <Theme accentColor="blue" grayColor="gray">
          <Home /> 
        </Theme>
      </body>
    </html>
    </>
  )
}
