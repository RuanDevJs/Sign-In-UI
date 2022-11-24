import Device from "../utils/Device";

const theme = {
  COLORS: {
    white: "#fff",
    white_secondary: "#f2f2f2",
    grey: "#c2c2c2",
    dark: "#333",
    red: "#FD6B68",
  },
  FONT: {
    extra_light: "Poppins_200ExtraLight",
    light: "Poppins_300Light",
    regular: "Poppins_400Regular",
    medium: "Poppins_500Medium",
    bold: "Poppins_600SemiBold"
  },
  FONT_SIZE: {
    sm: Device.width * 0.04,
    md: Device.width * 0.07,
    lg: Device.width * 0.1,
  },
  SPACES: {
    sm: Device.width * 0.04,
    lg: Device.width * 0.07,
  },
  poster: "https://cdn.dribbble.com/users/916023/screenshots/11474693/media/1d5d0b4a85720b6db79d6c6230e9df67.png?compress=1&resize=768x576&vertical=top"
}

export default theme;