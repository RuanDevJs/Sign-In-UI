import styled, { css } from "styled-components/native";
import Device from "../../utils/Device";
import { ButtonWrapProps } from "./types";

export const Container = styled.ImageBackground`
  flex: 1;

  justify-items: center;
  align-items: center;

  padding: ${Device.width * 0.04}px ${Device.width * 0.04}px;
`;

export const Poster = styled.Image`
  width: ${Device.width * 0.95}px;
  height: ${Device.width * 0.95}px;

  opacity: 0.85;
  border-radius: 32px;
`;

export const Wrap = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.bold};
    font-size: ${theme.FONT_SIZE.md}px;
    color: ${theme.COLORS.white};

    text-align: center;
    margin-bottom: ${theme.SPACES.sm}px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.light};
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.white_secondary};

    text-align: center;
  `}
`;

export const ButtonContainer = styled.View`
  margin-top: ${({ theme }) => theme.SPACES.lg}px;

  flex-direction: row;
  align-items: center;

  background-color: transparent;
  border-radius: 18px;
  border: 2px solid ${({ theme }) => theme.COLORS.white_secondary};
`;

export const ButtonWrap = styled.TouchableOpacity<ButtonWrapProps>`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: ${Device.width * 0.05}px;
  background-color: ${({ theme, active }) => active ? theme.COLORS.white : "transparent"};
  border-radius: 16px;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.medium};
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.dark};

    text-align: center;
  `}
`;