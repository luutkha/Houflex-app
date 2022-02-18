import {COLOR, SCREEN} from 'constants/ui';
import {Box, Center, Container, Text, VStack} from 'native-base';
import React from 'react';
import {Image, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {IDistrict} from 'types';
import {useNavigation} from '@react-navigation/native';

interface Props {
  value: ListRenderItemInfo<IDistrict>;
  navigation: any;
}

export const DistrictCard = (props: Props) => {
  const {value, navigation} = props;

  const handleDistrictCardPress = () => {
    navigation.navigate('district-detail',{
      district: value
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
                width: SCREEN.WIDTH * 0.8,
                height: SCREEN.WIDTH*0.5,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
            <Center px={3} bg={COLOR.MAIN_COLOR} >
              <VStack>
                <Text color="white" bold>{value.item.title}</Text>
                <Text color="white" >{value.item.description}</Text>
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
    width: SCREEN.WIDTH * 0.8,
    margin: 8,
  },
});
