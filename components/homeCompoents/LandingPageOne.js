import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AspectRatio, Box, Button, Heading, Image, Stack } from 'native-base'
import Carousel from 'react-native-snap-carousel'
const LandingPageOne = () => {
  return (
    <Box alignItems='center' mt='20'>
      {/* card */}
      <Box maxW='80' rounded='lg' overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
        <Box>
          <AspectRatio w='100%' ratio={16 / 9} backgroundColor={'primary.100'}>
            <Image
              source={require('../../assets/images/card1.png')}
              alt='card img'
            ></Image>
          </AspectRatio>
        </Box>
        <Stack p="3" space={3} backgroundColor='primary.100'>
          <Stack space={2} alignItems='center'>
            <Button size="sm">
              40% off
            </Button>
            <Heading size={'md'} ml='-1'>
              Whole Body Checkup
            </Heading>
            <Text jus fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
              Take Full Advantage of discount offer and perfom a whole body checkup
            </Text>
            <Text fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
              WBC Count Test
            </Text>
            <Text fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
              Body Sugar Count
            </Text>
            <Text fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
              Urine Sample Test
            </Text>
            <Button size="md" m={4}>
              PRIMARY
            </Button>
          </Stack>

        </Stack>
      </Box>


      {/* carousel example */}
      <Carousel></Carousel>
    </Box>
  )
}

export default LandingPageOne

const styles = StyleSheet.create({})