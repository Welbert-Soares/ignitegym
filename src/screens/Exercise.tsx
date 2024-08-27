import { TouchableOpacity } from "react-native"
import { ArrowLeft } from "lucide-react-native"
import { VStack, Icon } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"

import { AppNavigatorRoutesProps } from "../../routes/app.routes"

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
      </VStack>
    </VStack>
  )
}
