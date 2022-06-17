import { useNavigation } from '@react-navigation/native';
import {
  Badge,
  Box,
  Button,
  Center,
  Hidden,
  HStack,
  Progress,
  useColorModeValue,
  View,
  VStack,
} from 'native-base';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import React, { FC, memo, ReactElement } from 'react';
import { Icon } from '../components/icon';
import { BodyTypography } from '../components/typography';
import { GroupedView, ViewContainer } from '../components/view';
import { Layout } from '../layout';
import { Card } from '../components/card';
import { BORDER_RADIUS } from '../utils';
import { DarkTheme, LightTheme } from '../theme/theme';

type TableRow = {
  name: string;
  investment: string;
  currentValue: string;
  returns: string;
  isHeader?: boolean;
  isLastRow?: boolean;
};

export const PortfolioScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <Layout isHideSideBar>
      <ViewContainer isSecondaryBackground>
        <Box alignItems={'center'} flex={1}>
          <Box flex={1} width={['100%', '70%']}>
            <GroupedView
              headerLabel="Mutual Fund Portfolio"
              headerIconName="arrow-back"
              flexGrow={['unset', 1]}
              onClickHeader={function () {
                navigation.goBack();
              }}>
              <Box alignItems={'center'}>
                <VStack width={['98%', '90%']}>
                  <HStack space={4}>
                    <PriceCard
                      title="$15303.00"
                      value="Total Invested"
                      color={useColorModeValue('violet.800', 'violet.600')}
                    />
                    <PriceCard
                      title="$45303.00"
                      value="14% Return"
                      color={useColorModeValue('#288655', '#35af6e')}
                    />
                  </HStack>

                  <Hidden from="base" till="sm">
                    <Box mt={4}>
                      <TableRow
                        name={TableData.header?.[0].label}
                        investment={TableData.header?.[1].label}
                        currentValue={TableData.header?.[2].label}
                        returns={TableData.header?.[3].label}
                        isHeader
                      />
                      {TableData?.data.map((row: TableRow, index: number) => (
                        <TableRow
                          key={row.name}
                          name={row.name}
                          investment={row.investment}
                          currentValue={row.currentValue}
                          returns={row.returns}
                          isLastRow={TableData.data.length === index + 1}
                        />
                      ))}
                    </Box>
                  </Hidden>
                  <Hidden from="sm">
                    <Box>
                      {TableData?.data.map((row: TableRow, index: number) => (
                        <MobileListCard
                          key={row.name}
                          name={row.name}
                          investment={row.investment}
                          currentValue={row.currentValue}
                          returns={row.returns}
                          isLastRow={TableData.data.length === index + 1}
                        />
                      ))}
                    </Box>
                  </Hidden>
                </VStack>
              </Box>
            </GroupedView>
          </Box>
        </Box>
      </ViewContainer>
    </Layout>
  );
};

const MobileListCard: FC<TableRow> = memo(({ name, investment, currentValue, returns }) => {
  return (
    <Card isSecondaryBackground my={3} alignItems="flex-start">
      <BodyTypography fontSize="md">{name}</BodyTypography>
      <Box mt={2}>
        <Badge
          alignSelf="center"
          _text={{
            color: useColorModeValue('#f0f1f3', '#181f2a'),
          }}
          backgroundColor={useColorModeValue('#35af6e', '#35af6e')}>
          SIP X 6
        </Badge>
      </Box>
      <Box flex={1} width="100%" mt={4} mb={2}>
        <HStack space={2} justifyContent="space-between">
          <VStack>
            <BodyTypography fontSize="sm" isSecondaryText>
              Investment
            </BodyTypography>
            <BodyTypography>{investment}</BodyTypography>
          </VStack>
          <VStack>
            <BodyTypography fontSize="sm" isSecondaryText>
              Current Value
            </BodyTypography>
            <BodyTypography>{currentValue}</BodyTypography>
          </VStack>
          <VStack>
            <BodyTypography fontSize="sm" isSecondaryText>
              Returns
            </BodyTypography>
            <BodyTypography color={useColorModeValue('#288655', '#35af6e')}>
              {returns}
            </BodyTypography>
          </VStack>
        </HStack>
      </Box>
    </Card>
  );
});

const TableRow: FC<TableRow> = memo(
  ({ name, investment, currentValue, returns, isLastRow, isHeader }) => {
    return (
      <HStack
        borderColor={useColorModeValue(LightTheme.SeparatorColor, DarkTheme.SeparatorColor)}
        borderBottomWidth={isLastRow ? 1 : 0}
        borderWidth={1}
        p={4}
        borderTopRadius={isHeader ? BORDER_RADIUS : 0}
        borderBottomRadius={isLastRow ? BORDER_RADIUS : 0}>
        <View w="60%">
          <BodyTypography isSecondaryText={isHeader}>{name}</BodyTypography>
        </View>
        <View w="15%">
          <BodyTypography isSecondaryText={isHeader}>{investment}</BodyTypography>
        </View>
        <View w="15%">
          <BodyTypography isSecondaryText={isHeader}>{currentValue}</BodyTypography>
        </View>
        <View w="10%">
          <BodyTypography
            isSecondaryText={isHeader}
            {...(!isHeader && {
              color: useColorModeValue('#288655', '#35af6e'),
            })}>
            {returns}
          </BodyTypography>
        </View>
      </HStack>
    );
  }
);

const PriceCard: FC<{
  value: string;
  title: string;
  color?: string;
}> = memo(({ value, title, color }) => {
  return (
    <Box
      borderWidth={1}
      borderColor={color}
      flex={1}
      my={[2, 4]}
      borderRadius={BORDER_RADIUS}
      p={4}>
      <Center>
        <BodyTypography color={color}>{title}</BodyTypography>
        <BodyTypography color={color} fontSize="sm">
          {value}
        </BodyTypography>
      </Center>
    </Box>
  );
});

const TableData = {
  header: [
    {
      label: 'Company Name',
    },
    {
      label: 'Investment',
    },
    {
      label: 'Current Value',
    },
    {
      label: 'Returns',
    },
  ],
  data: [
    {
      id: 1,
      name: 'Aditya Birla Sun Life Flexi Cap- Fund',
      investment: '$50.000',
      currentValue: '$4.351.50',
      returns: '14%',
    },
    {
      id: 2,
      name: 'Axis Sun Life Flexi Cap- Fund',
      investment: '$782.01',
      currentValue: '$473.85',
      returns: '12%',
    },
    {
      id: 3,
      name: 'Aditya Birla Blue Chip- Fund',
      investment: '$779.58',
      currentValue: '$293.01',
      returns: '10%',
    },
    {
      id: 4,
      name: 'Axis Midcap Fund - Direct Plan - Growth',
      investment: '$479.58',
      currentValue: '$593.01',
      returns: '12%',
    },
    {
      id: 5,
      name: 'Axis Midcap Fund - Direct Plan - Growth',
      investment: '$701.77',
      currentValue: '$943.17',
      returns: '11%',
    },
    {
      id: 6,
      name: 'DSP Midcap Fund - Direct Plan - Growth',
      investment: '$779.58',
      currentValue: '$293.01',
      returns: '10%',
    },
    {
      id: 7,
      name: 'Invesco India Mid Cap Fund - Direct Plan - Growth',
      investment: '$779.58',
      currentValue: '$293.01',
      returns: '10%',
    },
    {
      id: 8,
      name: 'Kotak Emerging Equity - Direct Plan - Growth',
      investment: '$779.58',
      currentValue: '$293.01',
      returns: '10%',
    },
    {
      id: 9,
      name: 'Axis Small Cap Fund - Direct Plan - Growth',
      investment: '$779.58',
      currentValue: '$293.01',
      returns: '10%',
    },
    {
      id: 10,
      name: 'SBI Small Cap Fund - Direct Plan - Growth',
      investment: '$779.58',
      currentValue: '$293.01',
      returns: '10%',
    },
    {
      id: 13,
      name: 'Canara Robeco Equity Tax Saver - Direct Plan - Growth',
      investment: '$779.58',
      currentValue: '$293.01',
      returns: '10%',
    },
    {
      id: 11,
      name: 'Kotak Emerging Equity - Direct Plan - Growth',
      investment: '$779.58',
      currentValue: '$293.01',
      returns: '10%',
    },
  ],
};
