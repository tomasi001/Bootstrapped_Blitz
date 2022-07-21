import { ComponentPropsWithoutRef, forwardRef, PropsWithoutRef } from "react"
import { useFormContext } from "react-hook-form"

import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"

export interface LabeledTextFieldProps extends ComponentPropsWithoutRef<typeof Input> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  isLoginOrSignup?: boolean
}

export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ label, outerProps, labelProps, name, isLoginOrSignup, ...props }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext()
    const error = Array.isArray(errors[name])

    return (
      <FormControl {...outerProps} width={isLoginOrSignup ? "25vw" : ""}>
        <FormLabel {...labelProps}>
          {label}
          <Input disabled={isSubmitting} {...register(name)} {...props} />
        </FormLabel>
        {error && (
          <div role="alert" style={{ color: "red" }}>
            {error}
          </div>
        )}
      </FormControl>
    )
  }
)

export default LabeledTextField
