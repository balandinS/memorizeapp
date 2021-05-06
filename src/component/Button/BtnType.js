//@flow
import * as React from 'react';

export type Props = {
  contnet: string,
  icon: React.ComponentType<any>,
  onPress: () => void,
  propStyle: Object,
  textColor: string,
  isDisable: boolean,
};

export type InitailStyle = {
  backgroundColor: string,
  borderRadius: number,
  borderWidth: number,
  borderColor: string,
};

export type Opacity = {
  opacity: number,
};
