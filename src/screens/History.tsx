import { useState } from "react"
import { SectionList } from "react-native"
import { Heading, Text, VStack } from "@gluestack-ui/themed"

import { ScreenHeader } from "@components/ScreenHeader"
import { HistoryCard } from "@components/HistoryCard"

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "22.07.24",
      data: ["Remada Unilateral", "Desenvolvimento"],
    },
    {
      title: "23.07.24",
      data: ["Rosca Direta"],
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            fontFamily="$heading"
            color="$gray200"
            fontSize="$md"
            mt="$10"
            mb="$3"
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 22 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="$gray100" textAlign="center">
            Não há exercícios registrados. {"\n"}
            Vamos começar a treinar?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}
