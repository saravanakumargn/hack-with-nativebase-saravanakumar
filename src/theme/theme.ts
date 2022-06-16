import {createContext} from 'react';
import {Appearance} from 'react-native';

export const DarkTheme = {
  LabelColor                      : '#f7f8fa',
  SecondaryLabelColor             : '#8b929f',
  SecondarySystemBackgroundColor  : '#2a3140',
  SystemBackgroundColor           : '#0f121d',
  SeparatorColor                  : '#2a3140',
  GroupedBackgroundColor          : '#181f2a',
  SecondaryGroupedBackgroundColor : '#2a3140',
};

export const LightTheme = {
  LabelColor                      : '#181f2a',
  SecondaryLabelColor             : '#585e6d',
  SecondarySystemBackgroundColor  : '#f2efff',
  SystemBackgroundColor           : '#ffffff',
  SeparatorColor                  : '#dfe0e6',
  GroupedBackgroundColor          : '#ffffff',
  SecondaryGroupedBackgroundColor : '#f0f1f3',
};

export const themes = {light: LightTheme, dark: DarkTheme};
export const AppThemeContext = createContext(
  Appearance.getColorScheme() === 'dark' ? themes.dark : themes.light
);
