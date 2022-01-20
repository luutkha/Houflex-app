import {Box, Center, Divider, Flex, ScrollView, Text} from 'native-base';
import React from 'react';
import {Header} from './common/Header';
import {MenuItem} from './common/MenuItem';

interface Props {
  navigation: any;
}

export const Menu = (props: Props) => {
  const {navigation} = props;
  return (
    <ScrollView>
      <Flex direction="column" bg="white">
        <Header></Header>
        <>
          <Divider my="1" />
          <MenuItem navigation={navigation} />
        </>
      </Flex>
    </ScrollView>
  );
};
