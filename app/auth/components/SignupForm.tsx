import { Center, Flex, Heading } from "@chakra-ui/react"
import signup from "app/auth/mutations/signup"
import { Signup } from "app/auth/validations"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import PageWrapper from "app/core/layouts/PageWrapper"
import { useMutation } from "blitz"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)

  return (
    <PageWrapper>
      <Center flexDir="column">
        <Heading as="h1" size="3xl" mb="3vh">
          Create an Account
        </Heading>

        <Form
          submitText="Create Account"
          schema={Signup}
          initialValues={{ email: "", password: "", firstName: "", secondName: "" }}
          isSignUp={true}
          onSubmit={async (values) => {
            try {
              await signupMutation(values)
              props.onSuccess?.()
            } catch (error: any) {
              if (error.code === "P2002" && error.meta?.target?.includes("email")) {
                // This error comes from Prisma
                return { email: "This email is already being used" }
              } else {
                return { [FORM_ERROR]: error.toString() }
              }
            }
          }}
        >
          <Flex mt="20px">
            <LabeledTextField
              name="firstName"
              label="First Name"
              placeholder="First Name"
              isLoginOrSignup={true}
            />
          </Flex>
          <Flex mt="20px">
            <LabeledTextField
              name="secondName"
              label="Second Name"
              placeholder="Second Name"
              isLoginOrSignup={true}
            />
          </Flex>
          <Flex mt="20px">
            <LabeledTextField
              name="email"
              label="Email"
              placeholder="Email"
              isLoginOrSignup={true}
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
      </Center>
    </PageWrapper>
  )
}

export default SignupForm
