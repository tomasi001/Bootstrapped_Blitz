import { Flex } from "@chakra-ui/react"

const Main = ({ children }) => {
  return (
    <Flex
      p="5rem 1rem"
      flex="1"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      {children && children}
    </Flex>
  )
}

export default Main
