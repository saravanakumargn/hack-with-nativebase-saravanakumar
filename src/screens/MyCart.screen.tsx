import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Image,
  Progress,
  ScrollView,
  Spacer,
  useColorMode,
  useColorModeValue,
  VStack,
} from "native-base";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import React, { FC, memo, ReactElement, useMemo } from "react";
import { Icon } from "../components/icon";
import { BodyTypography, Text } from "../components/typography";
import { GroupedView, ViewContainer } from "../components/view";
import { Layout } from "../layout";
import { Card } from "../components/card";
import { BORDER_RADIUS } from "../utils";

type ProductItem = {
  image: string;
  title: string;
  desc: string;
  price: string;
};

export const MyCartScreen: FC = () => {
  const navigation = useNavigation();
  const { colorMode } = useColorMode();
  return (
    <Layout>
      <ViewContainer isSecondaryBackground>
        <GroupedView
          headerLabel="My Cart"
          headerIconName="arrow-back"
          flexGrow={["unset", 1]}
          onClickHeader={function () {
            navigation.goBack();
          }}
        >
          <Box alignItems={"center"}>
            <VStack width={["95%", "80%"]}>
              <ProductItem
                title="BEDLAMP"
                desc="Size: Small"
                image="https://i.pravatar.cc/150?img=48"
                price="&#8377;749"
              />
              <ProductItem
                title="PREFUME"
                desc="Size: Small"
                image="https://i.pravatar.cc/150?img=46"
                price="&#8377;749"
              />
              <BodyTypography my={4}>Order Summary</BodyTypography>

              <Summary title="Total" details="&#8377; 3561.00" />
              <Summary title="Discount" details="(&#8377;214.00)" />
              <Summary title="Coupon Discount" details="Apply Coupon" />
              <Summary title="Shipping" details="Free" />
              <Divider my={3} />
              <HStack justifyContent="space-between" my={2}>
                <BodyTypography fontWeight={"bold"}>
                  Total Amount
                </BodyTypography>
                <BodyTypography fontWeight={"bold"}>
                  &#8377; 3340.00
                </BodyTypography>
              </HStack>
              <Button my="4">PLACE ORDER</Button>
            </VStack>
          </Box>
        </GroupedView>
      </ViewContainer>
    </Layout>
  );
};

const ProductItem: FC<ProductItem> = memo(({ image, title, desc, price }) => {
  return (
    <Card isSecondaryBackground mt={4}>
      <HStack justifyContent="space-between" alignItems={"center"}>
        <HStack>
          <Image
            source={{
              uri: image,
            }}
            alt="Alternate Text"
            size="lg"
            borderRadius={BORDER_RADIUS}
          />
          <VStack ml={4}>
            <BodyTypography fontSize={"md"}>{title}</BodyTypography>
            <BodyTypography isSecondaryText fontSize={"sm"} mt={"0.5"}>
              {desc}
            </BodyTypography>
            <Spacer />
            <BodyTypography fontSize={"md"}>{price}</BodyTypography>
          </VStack>
        </HStack>
        <Stepper />
      </HStack>
    </Card>
  );
});

const Stepper: FC = memo(() => {
  return (
    <HStack>
      <Button size={"xs"}>-</Button>
      <Center w={25}>1</Center>
      <Button size={"xs"}>+</Button>
    </HStack>
  );
});

const Summary: FC<{
  title: string;
  details: string;
}> = memo(({ title, details }) => {
  return (
    <HStack justifyContent="space-between" my={2}>
      <BodyTypography fontSize={"sm"}>{title}</BodyTypography>
      <BodyTypography fontSize={"sm"}>{details}</BodyTypography>
    </HStack>
  );
});
