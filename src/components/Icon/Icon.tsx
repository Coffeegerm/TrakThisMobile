import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

MIcon.loadFont();
MCIcon.loadFont();

export const IconSizes = {
  sm: 13,
  md: 18,
  lg: 23,
  xl: 27,
  xxl: 32,
};

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
  onPress?: () => void;
}

export const MaterialIcon = ({ size, name, color }: IconProps) => {
  return <MIcon name={name} size={IconSizes[size]} color={color} />;
};

export const MaterialCommunityIcon = ({ size, name, color }: IconProps) => (
  <MCIcon name={name} size={IconSizes[size]} color={color} />
);
