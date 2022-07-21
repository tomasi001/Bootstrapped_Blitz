import { Flex } from "@chakra-ui/react"

const Container = ({ children }) => {
  return (
    <Flex
      minH="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      px={0}
      py={0}
    >
      {children}
    </Flex>
  )
}

export default Container
