import Container from "../components/Container"
import Main from "../components/Main"
import Footer from "./Footer"
import Header from "./Header"

const PageWrapper = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default PageWrapper
