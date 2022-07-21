import { Button, Flex, Heading } from "@chakra-ui/react"
import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { BlitzPage, Link as BlitzLink, Routes, useMutation } from "blitz"
import { Suspense } from "react"

const Header: BlitzPage = () => {
  const UserInfo = () => {
    const currentUser = useCurrentUser()
    const [logoutMutation] = useMutation(logout)

    if (currentUser) {
      return (
        <Flex flexDir="row" alignItems="center" width="100%" justifyContent="space-between">
          <Heading color="white" size="lg">
            {currentUser.name}
          </Heading>
          <Button
            size={"lg"}
            bg="#6700eb"
            onClick={async () => {
              await logoutMutation()
            }}
          >
            Logout
          </Button>
        </Flex>
      )
    } else {
      return (
        <Flex flexDir="row" alignItems="center" width="100%" justifyContent="end">
          <Button mr="10px" size={"lg"} bg="#6700eb">
            <BlitzLink href={Routes.SignupPage()}>
              <a className="button small">
                <strong>Sign Up</strong>
              </a>
            </BlitzLink>
          </Button>
          <Button ml="10px" px="35px" size={"lg"} bg="#6700eb">
            <BlitzLink href={Routes.LoginPage()}>
              <a className="button small">
                <strong>Login</strong>
              </a>
            </BlitzLink>
          </Button>
        </Flex>
      )
    }
  }

  return (
    <Flex width="100%" height="75px" bg="black" px="30px">
      <Suspense fallback="Loading...">
        <UserInfo />
      </Suspense>
    </Flex>
  )
}

export default Header
