import { Button, Center, Flex, Link as ChakraUILink } from "@chakra-ui/react"
import { IoDocumentsSharp } from "@react-icons/all-files/io5/IoDocumentsSharp"
import { SiDiscord } from "@react-icons/all-files/si/SiDiscord"
import { VscGithub } from "@react-icons/all-files/vsc/VscGithub"
import ColorModeToggle from "../theme/ColorModeToggle"

const Footer = () => {
  return (
    <Center
      width="100vw"
      height="75px"
      bg="black"
      flexDirection="row"
      justifyContent="space-between"
      px="30px"
    >
      <Flex color="white">
        <Button size={"lg"} bg="#6700eb">
          <ChakraUILink
            href="https://blitzjs.com/docs/getting-started?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new"
            isExternal
          >
            <IoDocumentsSharp size="25px" />
          </ChakraUILink>
        </Button>
        <Button ml="10px" size={"lg"} bg="#6700eb">
          <ChakraUILink href="https://github.com/blitz-js/blitz" isExternal>
            <VscGithub size="25px" />
          </ChakraUILink>
        </Button>
        <Button ml="10px" size={"lg"} bg="#6700eb">
          <ChakraUILink href="https://discord.blitzjs.com" isExternal>
            <SiDiscord size="25px" />
          </ChakraUILink>
        </Button>
      </Flex>
      <ColorModeToggle />
    </Center>
  )
}

export default Footer
