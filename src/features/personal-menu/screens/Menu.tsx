import {Box, Center, Divider, Flex, ScrollView, Text} from 'native-base';
import React from 'react';
import { Header } from './common/Header';
import {MenuItem} from './common/MenuItem';

interface Props {}

export const Menu = (props: Props) => {
  return (
    <ScrollView>
      <Flex direction="column" bg="white">
        <Header></Header>
        <>
        <Divider my="1" />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
      
        </>
      </Flex>
    </ScrollView>
  );
};
