import { COLOR } from 'constants/ui';
import { Box, Center, HStack, Icon, IconButton } from 'native-base';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

interface Props {
  navigation: any;
}

const AppBar = (props: Props) => {
  const {navigation} = props;
  const {canGoBack, goBack, navigate} = navigation;
  const isCanGoBack = canGoBack();
  const isShowSearch: boolean = false

  return (
    <Center >
      <HStack w="100%" backgroundColor={COLOR.MAIN_COLOR}>
        {isCanGoBack ? (
          <IconButton
            w="10%"
            onPress={() => navigation.goBack()}
            icon={
              <Icon
                size="sm"
                as={<Entypo name="chevron-left" />}
                color="white"
              />
            }
          />
        ) : (
          <Box w="10%"></Box>
        )}
        {/* <Box w="80%" style={{alignItems: 'center'}}>
          <IconButton
            onPress={() => navigation.navigate('search-home')}
            icon={
              <Icon
                size="sm"
                as={<VectorIcon name={'search'} />}
                color="white"
              />
            }
          />
        </Box> */}
      </HStack>
    </Center>
  );
};

export default AppBar;
