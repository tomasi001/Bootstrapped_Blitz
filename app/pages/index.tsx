import Container from "app/core/components/Container"
import Main from "app/core/components/Main"
import Footer from "app/core/layouts/Footer"
import Header from "app/core/layouts/Header"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, useSession } from "blitz"
import LandingPage from "./LandingPage"

const Home: BlitzPage = () => {
  const session = useSession({ suspense: false })
  return (
    <Container>
      <Header />
      <Main>
        <LandingPage userId={session.userId} />
      </Main>
      <Footer />
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;700&display=swap");

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Libre Franklin", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }

          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box;
          }
        `}
      </style>
    </Container>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
