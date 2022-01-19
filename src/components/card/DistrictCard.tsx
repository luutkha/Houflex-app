import {SCREEN} from 'constants/ui';
import {Box, Center, Container, Text, VStack} from 'native-base';
import React from 'react';
import {Image, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import { IDistrict } from 'types';



interface Props {
  value: ListRenderItemInfo<IDistrict>;
}

export const DistrictCard = (props: Props) => {
  const {value} = props;
  return (
    <View style={styles.container}>
      <Container borderRadius={10}>
        <Box  bg="warmGray.50">
          <Image
            source={{
              uri: value.item.imgUrl,
            }}
            style={{
              width: SCREEN.WIDTH * 0.8,
              height: 180,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <Center px={3} bg="white">
            <VStack>
              <Text bold>{value.item.title}</Text>
              <Text>
               {value.item.description}
              </Text>
            </VStack>
          </Center>
        </Box>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN.WIDTH * 0.8,
    margin: 8,
    borderRadius: 10
  },
  
});
