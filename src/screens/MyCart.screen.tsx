import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Image,
  Modal,
  Progress,
  Radio,
  ScrollView,
  Spacer,
  useColorMode,
  useColorModeValue,
  VStack,
} from "native-base";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import React, {
  FC,
  memo,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Icon } from "../components/icon";
import { BodyTypography, Text } from "../components/typography";
import { GroupedView, ViewContainer } from "../components/view";
import { Layout } from "../layout";
import { Card } from "../components/card";
import { BORDER_RADIUS } from "../utils";
import { DarkTheme, LightTheme } from "../theme/theme";

type ProductItem = {
  image: string;
  title: string;
  desc: string;
  price: string;
};

export const MyCartScreen: FC = () => {
  const navigation = useNavigation();
  const [isShowCartModal, setShowCartModal] = useState(true);
  const [value, setValue] = useState("one");

  const toggleCartModal = useCallback(() => {
    setShowCartModal((prevState) => !prevState);
  }, [isShowCartModal]);

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
            <VStack width={["98%", "80%"]}>
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
              <Button my="4" onPress={toggleCartModal}>
                PLACE ORDER (Click for Modal screen)
              </Button>
            </VStack>
          </Box>
        </GroupedView>
        <Modal
          isOpen={isShowCartModal}
          onClose={toggleCartModal}
        >
          <Modal.Content
            marginBottom={[0, "auto"]}
            width="100%"
            marginTop={"auto"}>
            <Modal.Body>
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
                  <ModalText
                    fontSize={"md"}
                    fontWeight={"bold"}
                    label="Body Suit"
                  />
                  <ModalText
                    isSecondaryText
                    fontSize={"sm"}
                    mt={"0.5"}
                    label="Mother Care"
                  />
                  <Spacer />
                  <ModalText fontSize={"md"} label="&#8377; 500" />
                </VStack>
              </HStack>

              <VStack my={4}>
                <ModalText
                  label="Choose a delivery option"
                  fontWeight={"bold"}
                  my={3}
                />
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value}
                  onChange={(nextValue) => {
                    setValue(nextValue);
                  }}
                >
                  <Radio value="one" my={2}>
                    <HStack>
                      <BodyTypography
                        fontSize={"md"}
                        _light={{
                          color: useColorModeValue("violet.800", "violet.800"),
                        }}
                      >
                        Monday
                      </BodyTypography>
                      <ModalText fontSize={"md"} label=" - Free Delivery" />
                    </HStack>
                  </Radio>
                  <Radio value="two" my={2}>
                    <HStack>
                      <BodyTypography
                        fontSize={"md"}
                        _light={{
                          color: useColorModeValue("violet.800", "violet.800"),
                        }}
                      >
                        Tuesday
                      </BodyTypography>
                      <ModalText
                        fontSize={"md"}
                        label=" - Delivery Fee &#8377;50"
                      />
                    </HStack>
                  </Radio>
                  <Radio value="three" my={2}>
                    <HStack>
                      <BodyTypography
                        fontSize={"md"}
                        _light={{
                          color: useColorModeValue("violet.800", "violet.800"),
                        }}
                      >
                        2 Business Days
                      </BodyTypography>
                      <ModalText
                        fontSize={"md"}
                        label=" - Delivery Fee &#8377;150"
                      />
                    </HStack>
                  </Radio>
                  <Radio value="four" my={2}>
                    <HStack>
                      <BodyTypography
                        fontSize={"md"}
                        _light={{
                          color: useColorModeValue("violet.800", "violet.800"),
                        }}
                      >
                        Pickup
                      </BodyTypography>
                      <ModalText fontSize={"md"} label=" Find a Location" />
                    </HStack>
                  </Radio>
                </Radio.Group>
                <Button mt={6} onPress={toggleCartModal}>
                  CONTINUE
                </Button>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
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

const ModalText: FC<{
  label: string;
}> = memo(({ label, ...props }) => {
  return (
    <BodyTypography
      _light={{
        color: useColorModeValue(LightTheme.LabelColor, DarkTheme.LabelColor),
      }}
      {...props}
    >
      {label}
    </BodyTypography>
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

const styles = {
  top: {
    marginBottom: "auto",
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto",
  },
  left: {
    marginLeft: 0,
    marginRight: "auto",
  },
  right: {
    marginLeft: "auto",
    marginRight: 0,
  },
  center: {},
};
