import { ScreenHeader } from "@components/ScreenHeader"
import { VStack, Text } from "@gluestack-ui/themed"
import React from "react"

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
    </VStack>
  )
}
