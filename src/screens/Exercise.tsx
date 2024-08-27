import { TouchableOpacity } from "react-native"
import { ArrowLeft } from "lucide-react-native"
import {
  VStack,
  Icon,
  HStack,
  Heading,
  Text,
  Image,
} from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"

import { AppNavigatorRoutesProps } from "../../routes/app.routes"

import BodySvg from "@assets/body.svg"

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px="$8" bg="$gray600" pt="$12">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" size="xl" />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt="$4"
          mb="$8"
        >
          <Heading
            color="$gray100"
            fontFamily="$heading"
            fontSize="$lg"
            flexShrink={1}
          >
            Remada Unilateral
          </Heading>
          <HStack alignItems="center">
            <BodySvg />

            <Text color="$gray200" ml="$1" textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <VStack p="$8">
        <Image
          source={{
            uri: "https://blog.totalpass.com.br/wp-content/uploads/2022/12/treino-de-costas-remada-unilateral.jpg",
          }}
          alt="Imagem do exercício"
          mb="$3"
          resizeMode="cover"
          rounded="$lg"
          w="$full"
          h="$80"
        />
      </VStack>
    </VStack>
  )
}
