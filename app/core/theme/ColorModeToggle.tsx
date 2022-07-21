import { Flex, FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react"

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0" color={"white"}>
          {colorMode === "light" ? "Light" : "Dark"}
        </FormLabel>
        <Switch id="email-alerts" onChange={toggleColorMode} />
      </FormControl>
    </Flex>
  )
}

export default ColorModeToggle
