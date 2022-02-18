import {COLOR, SCREEN} from 'constants/ui';
import { LoadingActions } from 'hooks/loading/LoadingSlice';
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, { useEffect } from 'react';
import {Image, InteractionManager, StyleSheet} from 'react-native';
import { useAppSelector } from 'redux/hooks';
interface Props {
  navigation: any;
}
export const LoginPage = (props: Props) => {
  const {navigation} = props;
  const isLoading = useAppSelector(state => state.loading.loading)
  
   
  useEffect(() => {
    
  }, [isLoading]);

  if(isLoading) return (<Center><Text>Is Loading ... </Text></Center>)
  else
  return (
    <ScrollView>
      <Center bg="white" style={styles.container}>
        <Box
          w="100%"
          borderBottomRadius={35}
          bg={COLOR.MAIN_COLOR}
          style={styles.bg__top}></Box>
        <Box w="80%" borderRadius={20} mt={5} bg="white" style={styles.form}>
          <VStack>
            <Center>
              <Box w="50%" style={styles.box}></Box>
              <Box w="100%">
                <Image
                  source={require('../../../assets/login.png')}
                  style={styles.image__bg}
                />
              </Box>

              <Box mx={10} mt={4} mb={1} w="80%">
                <FormControl>
                  {/* <FormControl.Label>Username</FormControl.Label> */}
                  <Box py={4}>
                    <Input p={2} placeholder="Tài khoản" />
                  </Box>
                  {/* <FormControl.Label>Password</FormControl.Label> */}
                  <Box pb={6}>
                    <Input p={2} placeholder="Mật khẩu" />
                  </Box>
                </FormControl>
                <Button
                  borderRadius={50}
                  m={2}
                  bg={COLOR.MAIN_COLOR}
                  _pressed={{
                    backgroundColor: 'warning.500',
                  }}
                  onPress={() => {
                    LoadingActions.setIsLoadingSreens()
                    navigation.navigate('Home')}}>
                  <Text bold color="white">
                    ĐĂNG NHẬP
                  </Text>
                </Button>
                <Center>
                  <Button
                    borderRadius={50}
                    // m={2}
                    bg={COLOR.MAIN_COLOR}
                    opacity={0.8}
                    w="70%"
                    // colorScheme={COLOR.MAIN_COLOR}
                    _pressed={{
                      backgroundColor: 'warning.50',
                    }}
                    onPress={() => navigation.navigate('Index')}>
                    <Text bold italic color="white">
                      ĐĂNG KÝ
                    </Text>
                  </Button>
                </Center>

                <Button variant="ghost" pt={5}>
                  <Text italic color="warmGray.400">
                    Quên mật khẩu
                  </Text>
                </Button>
              </Box>
            </Center>
          </VStack>
        </Box>
        <Box
          w="100%"
          borderTopRadius={35}
          bg={COLOR.MAIN_COLOR}
          style={styles.bg__botton}></Box>
      </Center>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN.HEIGHT,
    flex: 1,
    // backgroundColor: COLOR.MAIN_COLOR
  },
  form: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6.68,

    elevation: 11,
  },

  box: {
    borderTopColor: COLOR.MAIN_COLOR,
    borderTopWidth: 1.8,
    height: 10,
  },
  image__bg: {
    height: SCREEN.WIDTH * 0.4,
    width: SCREEN.WIDTH * 0.8,
  },
  bg__top: {
    zIndex: -9999,
    height: SCREEN.HEIGHT * 0.4,
    marginBottom: -200,
  },
  bg__botton: {
    zIndex: -9999,
    height: SCREEN.HEIGHT * 0.4,
    marginTop: -150,
  },
});
