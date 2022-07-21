import { ColorModeScript } from "@chakra-ui/react"
import { BlitzScript, Document, DocumentHead, Html, Main } from "blitz"
import theme from "../core/theme/theme"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <DocumentHead />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
