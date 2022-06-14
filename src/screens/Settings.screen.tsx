import React, { FC, memo, useMemo } from "react";
import { Text } from "../components/typography";
import { GroupedView, ViewContainer } from "../components/view";

export const SettingsScreen: FC = () => {

  return (
    <ViewContainer isSecondaryBackground>
              <GroupedView headerLabel="Settings"
              headerIconName="arrow-back">
              <Text>Hello11</Text>
            <Text>Hello11</Text>
            </GroupedView>
          </ViewContainer>
  );
};

export default memo(SettingsScreen);
