import { SCREEN } from 'constants/ui';
import { Box, Center, Container, Text, VStack } from 'native-base';
import React from 'react';
import { Image, ListRenderItemInfo, StyleSheet, TouchableOpacity, View } from 'react-native';
import { IDistrict } from 'types';

interface Props {
  value: ListRenderItemInfo<IDistrict>;
  navigation: any;
}
export const RoomCard = (props: Props) => {
  const {value, navigation} = props;

  const handleDistrictCardPress = () => {
    navigation.navigate('district-detail', {
      district: value,
    });
  };
  return (
    <TouchableOpacity
      onPress={() => handleDistrictCardPress()}
      style={styles.container}>
      <View>
        <Container>
          <Box bg="warmGray.50">
            <Image
              source={{
                uri: value.item.imgUrl,
              }}
              style={{
                width: SCREEN.WIDTH-16 ,
                height: 180,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
            <Center px={3} bg="lightBlue.100">
              <VStack>
                <Text bold>Phòng {value.item.title}</Text>
                <Text>{value.item.description}</Text>
              </VStack>
            </Center>
          </Box>
        </Container>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    container: {
      width: SCREEN.WIDTH-16 ,
      margin: 8,
      borderRadius: 20,
    },
  });