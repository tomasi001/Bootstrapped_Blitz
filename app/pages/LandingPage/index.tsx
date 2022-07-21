import { Flex, Heading } from "@chakra-ui/react"
import { FC } from "react"

type LandingPageProps = {
  userId: number | null
}

const index: FC<LandingPageProps> = ({ userId }) => {
  return (
    <Flex flexDir="column" alignItems="center" bg="">
      <Heading as="h1" size="4xl" textAlign={"center"}>
        {userId ? "Well Done, You Have Logged In" : "Welcome To A Fresh Blitz Project"}
      </Heading>
      <Heading as="h2" size="lg" mt="40px">
        {userId
          ? "Make yourself at home"
          : " This project template has been bootstrapped to use Typescript and Chakra UI"}
      </Heading>
      <Heading as="h3" size="md" mt="40px">
        {userId
          ? ""
          : "Please feel free to submit pull requests and correct anything I have done wrong"}
      </Heading>
    </Flex>
  )
}

export default index
