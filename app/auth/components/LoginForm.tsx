import { Center, Flex, Heading } from "@chakra-ui/react"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import PageWrapper from "app/core/layouts/PageWrapper"
import {
  AuthenticationError,
  Link as BlitzLink,
  PromiseReturnType,
  Routes,
  useMutation,
} from "blitz"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <PageWrapper>
      <Center flexDir="column">
        <Heading as="h1" size="3xl" mb="10vh">
          Welcome Home
        </Heading>

        <Form
          submitText="Login"
          schema={Login}
          initialValues={{ email: "", password: "" }}
          isLogin={true}
          onSubmit={async (values) => {
            try {
              const user = await loginMutation(values)
              props.onSuccess?.(user)
            } catch (error: any) {
              if (error instanceof AuthenticationError) {
                return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
              } else {
                return {
                  [FORM_ERROR]:
                    "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
                }
              }
            }
          }}
        >
          <Flex mt="20px">
            <LabeledTextField
              isLoginOrSignup={true}
              name="email"
              label="Email"
              placeholder="Email"
            />
          </Flex>
          <Flex mt="20px">
            <LabeledTextField
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              isLoginOrSignup={true}
            />
          </Flex>
        </Form>
        <Flex mt="20px" fontSize="15px" textDecoration="underline" color="blue.600">
          <BlitzLink href={Routes.ForgotPasswordPage()}>
            <a>Forgot your password?</a>
          </BlitzLink>
        </Flex>
      </Center>
    </PageWrapper>
  )
}

export default LoginForm
