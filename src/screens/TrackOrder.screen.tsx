import { useNavigation } from "@react-navigation/native";
import {
  Badge,
  Box,
  Center,
  Circle,
  Divider,
  HStack,
  Image,
  Spacer,
  View,
  VStack,
} from "native-base";
import React, { FC, memo, ReactElement, useMemo } from "react";
import { StyleSheet } from "react-native";
import { Card } from "../components/card";
import { Icon } from "../components/icon";
import { BodyTypography, Text } from "../components/typography";
import { GroupedView, ViewContainer } from "../components/view";
import { Layout } from "../layout";
import { BORDER_RADIUS } from "../utils";

type TimeLine = {
  title: string;
  desc?: string;
  time?: string;
  isCompleted?: boolean;
  isLastItem?: boolean;
};

export const TrackOrderScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <ViewContainer isSecondaryBackground>
        <GroupedView
          headerLabel="Track Order"
          headerIconName="arrow-back"
          flexGrow={["unset", 1]}
          onClickHeader={function () {
            navigation.goBack();
          }}
        >
          <Box alignItems={"center"}>
            <VStack width={['95%', '80%']}>
          <Card isSecondaryBackground mt={[2, 8]} mb={8}>
            <HStack>
              <Image
                source={{
                  uri: "https://i.pravatar.cc/150?img=41",
                }}
                alt="Alternate Text"
                size="lg"
                borderRadius={BORDER_RADIUS}
              />
              <VStack ml={4}>
                <BodyTypography fontSize={"md"}>Sweater dress</BodyTypography>
                <BodyTypography isSecondaryText fontSize={"sm"} mt={"0.5"}>
                  Girls self design
                </BodyTypography>
                <Spacer />
                <BodyTypography fontSize={"md"}>&#8377; 1,199</BodyTypography>
              </VStack>
            </HStack>
          </Card>

          <TimeLine
            title="Order Placed"
            desc="We nave received your Order on 28-May-2021."
            time="5:38 pm"
          />

          <TimeLine
            title="Order Packed"
            desc="Seller has processed your order on 29th. Your item had been picked up by courier partner on 30 May-2021. Seller has processed your order on 29th. Your item had been picked up by courier partner on 30 May-2021."
            time="5:38 pm"
          />

          <TimeLine
            title="Shipped"
            desc="Your item has been picked up not yet shipped."
            isCompleted={false}
          />

          <TimeLine
            title="Out for Delivery"
            desc="Your order is out for delivery."
            isCompleted={false}
            isLastItem
          />
          </VStack>
          </Box>
        </GroupedView>
      </ViewContainer>
    </Layout>
  );
};

const TimeLine: FC<TimeLine> = memo(
  ({ title, desc, time, isCompleted = true, isLastItem = false }) => {
    const lineStyle = useMemo(
      () => ({
        width: 0.5,
        height: "100%",
        borderRadius: 1,
        borderWidth: 0.5,
        borderStyle: isCompleted ? "solid" : "dashed",
      }),
      [isCompleted]
    );

    const opacity = useMemo(() => (isCompleted ? 1 : 0.5), [isCompleted]);

    return (
      <HStack opacity={opacity}>
        <Box>
          <Circle
            size="26px"
            bg="violet.600"
            _dark={{
              backgroundColor: isCompleted ? "violet.600" : "gray.100",
            }}
          >
            <Icon
              name="checkmark"
              color="white"
              _dark={{
                color: "gray.900",
              }}
            />
          </Circle>
          {!isLastItem && (
            <Box alignItems={"center"} flex={1}>
              <View borderColor="violet.600" style={lineStyle} />
            </Box>
          )}
        </Box>
        <VStack pb={5} flex={1} pl={3}>
          <BodyTypography>{title}</BodyTypography>
          {!!desc && (
            <BodyTypography py={2} fontSize="sm" flex={1} isSecondaryText>
              {desc}
            </BodyTypography>
          )}
          {!!time && (
            <BodyTypography fontSize="sm" isSecondaryText>
              {time}
            </BodyTypography>
          )}
        </VStack>
      </HStack>
    );
  }
);
