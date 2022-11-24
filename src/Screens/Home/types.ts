import { TouchableOpacityProps } from "react-native"

export interface ButtonProps {
  title: string;
  active: boolean;
}

export interface ButtonWrapProps extends TouchableOpacityProps {
  active: boolean;
}

