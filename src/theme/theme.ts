import {createContext} from 'react';
import {Appearance, ColorValue} from 'react-native';

export const LightTheme = {
  LabelColor                      : '#181f2a',
  SecondaryLabelColor             : '#585e6d',
  SecondarySystemBackgroundColor  : '#f2efff',
  SystemBackgroundColor           : '#ffffff',
  SeparatorColor                  : '#dfe0e6',
  GroupedBackgroundColor          : '#ffffff',
  SecondaryGroupedBackgroundColor : '#f0f1f3',
};

export const DarkTheme = {
  LabelColor                      : '#f7f8fa',
  SecondaryLabelColor             : '#8b929f',
  SecondarySystemBackgroundColor  : '#2a3140',
  SystemBackgroundColor           : '#0f121d',
  SeparatorColor                  : '#2a3140',
  GroupedBackgroundColor          : '#181f2a',
  SecondaryGroupedBackgroundColor : '#2a3140',
};

export const themes = {light: LightTheme, dark: DarkTheme};
export const AppThemeContext = createContext(
  Appearance.getColorScheme() === 'dark' ? themes.dark : themes.light
);



export const RNTesterLightTheme1 = {
  LabelColor                      : '#000000ff',
  SecondaryLabelColor             : '#3c3c4399',
  TertiaryLabelColor              : '#3c3c434c',
  QuaternaryLabelColor            : '#3c3c432d',
  PlaceholderTextColor            : '#3c3c434c',
  SystemBackgroundColor           : '#ffffffff',
  SecondarySystemBackgroundColor  : '#f2f2f7ff',
  TertiarySystemBackgroundColor   : '#ffffffff',
  GroupedBackgroundColor          : '#f2f2f7ff',
  SecondaryGroupedBackgroundColor : '#ffffffff',
  TertiaryGroupedBackgroundColor  : '#f2f2f7ff',
  SystemFillColor                 : '#78788033',
  SecondarySystemFillColor        : '#78788028',
  TertiarySystemFillColor         : '#7676801e',
  QuaternarySystemFillColor       : '#74748014',
  SeparatorColor                  : '#3c3c4349',
  OpaqueSeparatorColor            : '#c6c6c8ff',
  LinkColor                       : '#007affff',
  SystemPurpleColor               : '#af52deff',
  SystemOrangeColor               : '#ffbb33ff',
  SystemRedColor                  : '#ff3b30ff',
  SystemGreenColor                : '#34c759ff',
  ToolbarColor                    : '#e9eaedff',
  HoloRedDark                     : '#cc0000ff',
  BackgroundColor                 : '#f3f8ffff',
  BorderColor                     : '#005dffff',
  SystemTealColor                 : '#39796bff'
};

export const RNTesterDarkTheme1 = {
  LabelColor                      : '#ffffffff',
  SecondaryLabelColor             : '#ebebf599',
  TertiaryLabelColor              : '#ebebf54c',
  QuaternaryLabelColor            : '#ebebf528',
  PlaceholderTextColor            : '#ebebf54c',
  SystemBackgroundColor           : '#000000ff',
  SecondarySystemBackgroundColor  : '#1c1c1eff',
  TertiarySystemBackgroundColor   : '#2c2c2eff',
  GroupedBackgroundColor          : '#000000ff',
  SecondaryGroupedBackgroundColor : '#1c1c1eff',
  TertiaryGroupedBackgroundColor  : '#2c2c2eff',
  SystemFillColor                 : '#7878805b',
  SecondarySystemFillColor        : '#78788051',
  TertiarySystemFillColor         : '#7676803d',
  QuaternarySystemFillColor       : '#7676802d',
  SeparatorColor                  : '#54545899',
  OpaqueSeparatorColor            : '#38383aff',
  LinkColor                       : '#0984ffff',
  SystemPurpleColor               : '#bf5af2ff',
  SystemOrangeColor               : '#ff8800ff',
  SystemRedColor                  : '#ff375fff',
  SystemGreenColor                : '#30d158ff',
  ToolbarColor                    : '#3c3c43ff',
  HoloRedDark                     : '#cc0000ff',
  BackgroundColor                 : '#0c0700ff',
  BorderColor                     : '#005dffff',
  SystemTealColor                 : '#00251aff'
};