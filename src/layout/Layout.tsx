import React, { FC, ReactChild } from 'react';
import { VStack, Box, Stack, Hidden } from 'native-base';
import { Header, Sidebar } from './components';
import ViewContainer from '../components/view/ViewContainer';

export interface LayoutProps {
  children: ReactChild;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ViewContainer>
      <Hidden from="base" till="sm">
        <Header />
      </Hidden>
      <ViewContainer>
        <Stack w="100%" h="100%" direction={{ base: 'column', md: 'row' }}>
          <Hidden from="base" till="sm">
            <VStack flex={{ sm: 'none', md: 1 }}>
              <Sidebar />
            </VStack>
          </Hidden>
          <Box flex={{ base: 1, md: 3 }}>
            <ViewContainer>{children}</ViewContainer>
          </Box>
        </Stack>
      </ViewContainer>
    </ViewContainer>
  );
};
