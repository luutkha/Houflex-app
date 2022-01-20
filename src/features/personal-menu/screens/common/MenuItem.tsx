import { Box, Center, Divider, HStack, Image, Text, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {}

export const MenuItem = (props: Props) => {
  const handleMenuItemPress =()=>{
    console.log('xxx')
  }
  return (
    <TouchableOpacity onPress={()=>handleMenuItemPress()}>
      <Box flex={1} bg="white" >
        <VStack flex={1} p={2}>
          <Center>
            <HStack space={3}>
              <Image
                source={require('../../../../assets/icons/logout.png')}
                alt="Alternate Text"
                size="8"
              />
              <Text w="80%">Item</Text>

            </HStack>
          </Center>
        </VStack>
        <Divider my="1" />
      </Box>
    </TouchableOpacity>
  );
};
