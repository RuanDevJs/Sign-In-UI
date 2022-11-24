import { Platform,  Dimensions } from "react-native";

interface DeviceProps {
  width: number;
  height: number;
  plataform: {
    type: string;
    behavior: "height" | "padding";
  }
}

const Device: DeviceProps = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
  plataform: {
    type: Platform.OS,
    behavior: Platform.OS === 'ios' ? 'padding' : 'height'
  }
}

export default Device;