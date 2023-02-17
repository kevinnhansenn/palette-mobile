import { Box, Text } from "../elements"
import { List } from "../storybook/helpers"
import { SpacingUnitDSValueNumber } from "../types"
import { useSpace } from "./hooks"
import { bullet } from "./text"

const SpaceLine = ({ space: theSpace }: { space: SpacingUnitDSValueNumber }) => {
  const space = useSpace()
  return (
    <Box>
      <Box width={space(theSpace)} borderBottomWidth={1} borderColor="black" marginBottom="4px" />
      <Text color="black">
        {typeof theSpace === "string"
          ? `${theSpace}`
          : `${theSpace} ${bullet} ${space(theSpace as any)}px`}
      </Text>
    </Box>
  )
}

export default {
  title: "space",
}

export const SpacingUnits = () => (
  <List style={{ marginLeft: 50 }} contentContainerStyle={{ alignItems: "flex-start" }}>
    <SpaceLine space={0.5} />
    <SpaceLine space={1} />
    <SpaceLine space={2} />
    <SpaceLine space={4} />
    <SpaceLine space={6} />
    <SpaceLine space={12} />
  </List>
)