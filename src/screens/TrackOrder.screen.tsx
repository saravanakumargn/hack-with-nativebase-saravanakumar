import { useNavigation } from "@react-navigation/native";
import React, { FC, memo, useMemo } from "react";
import { Text } from "../components/typography";
import { GroupedView, ViewContainer } from "../components/view";
import { Layout } from "../layout";

export const TrackOrderScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <ViewContainer isSecondaryBackground>
        <GroupedView headerLabel="Track Order" headerIconName="arrow-back"
        onClickHeader={function() {
          navigation.goBack();
        }}>
          <Text>Hello11</Text>
          <Text>Hello11</Text>
        </GroupedView>
      </ViewContainer>
    </Layout>
  );
};

