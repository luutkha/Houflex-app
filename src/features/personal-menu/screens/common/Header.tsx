import {Box, Divider, View, VStack} from 'native-base';
import React from 'react';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';

const image = {
  uri: 'https://image.freepik.com/free-vector/copy-space-gradient-orange-background_23-2148845473.jpg',
};

export const Header = (props: Props) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <Box borderBottomRadius="0" mb={5}>
      <View>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <VStack space="4" divider={<Divider />}></VStack>
        </ImageBackground>
      </View>
    </Box>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    // flex: 1,
    justifyContent: 'center',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    // borderBottomStartRadius: 200,
    width: Dimensions.get('window').width,
    height: 150,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
