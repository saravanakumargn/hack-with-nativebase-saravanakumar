import React, { FC, ReactChild } from 'react';
import { VStack, Box, Stack, Hidden, ScrollView } from 'native-base';
import { Header, Sidebar } from './components';
import ViewContainer from '../components/view/ViewContainer';

export interface LayoutProps {
  children: ReactChild;
  isHideSideBar?: boolean;
}

export const Layout: FC<LayoutProps> = ({ children, isHideSideBar = false }) => {
  return (
    <ViewContainer>
      <Hidden from="base" till="sm">
        <Header />
      </Hidden>
      <ViewContainer>
        <Stack w="100%" h="100%" direction={{ base: 'column', md: 'row' }}>
          {!isHideSideBar && (
            <Hidden from="base" till="sm">
              <VStack flex={{ sm: 'none', md: 1 }}>
                <Sidebar />
              </VStack>
            </Hidden>
          )}
          <Box flex={{ base: 1, md: 3 }}>
            <ViewContainer isSecondaryBackground>
              <ScrollView showsHorizontalScrollIndicator={false}>{children}</ScrollView>
            </ViewContainer>
          </Box>
        </Stack>
      </ViewContainer>
    </ViewContainer>
  );
};
