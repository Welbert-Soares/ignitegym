import {
  Input as GlueStackInput,
  InputField,
  FormControl,
  FormControlError,
  FormControlErrorText,
} from "@gluestack-ui/themed"
import { ComponentProps } from "react"

type Props = ComponentProps<typeof InputField> & {
  errorMenssage?: string | null
  isInvalid?: boolean
  isReadOnly?: boolean
}

export function Input({
  isReadOnly = false,
  errorMenssage = null,
  isInvalid = false,
  ...rest
}: Props) {
  const invalid = !!errorMenssage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb="$4" w="$full">
      <GlueStackInput
        h="$14"
        borderWidth="$0"
        borderRadius="$md"
        $focus={{
          borderWidth: 1,
          borderColor: "$green500",
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
      >
        <InputField
          px="$4"
          bg="$gray700"
          color="$white"
          fontFamily="$body"
          placeholderTextColor="$gray300"
          {...rest}
        />
      </GlueStackInput>
      <FormControlError>
        <FormControlErrorText color="$red500">
          {errorMenssage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}
