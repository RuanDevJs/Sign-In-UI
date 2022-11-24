import styled, { css } from "styled-components/native";
import Device from "../../utils/Device";

export const KeyboardAvoidView = styled.KeyboardAvoidingView.attrs({
  behavior: Device.plataform.behavior
})`
  flex: 1;
`;

export const Container = styled.ImageBackground.attrs(({ theme }) => ({
  source: { uri: theme.poster },
  blurRadius: 120
}))`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.medium};
    font-size: ${theme.FONT_SIZE.lg}px;
    color: ${theme.COLORS.white};
    text-align: center;
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

export const Form = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    font-family: ${theme.FONT.medium};
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.dark};

    width: 90%;
    background: ${theme.COLORS.white};
    padding: ${Device.width * 0.06}px;
    border-radius: 12px;

    margin-top: ${theme.SPACES.sm + 4}px;
  `}
`;

export const RecoverPassword = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.light};
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.dark};

    width: 90%;

    text-align: right;
    margin-top: ${theme.SPACES.sm + 4}px;
  `}
`;

export const ButtonContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 90%;
    background: ${theme.COLORS.red};
    padding: ${Device.width * 0.06}px;
    border-radius: 12px;

    margin-top: ${theme.SPACES.lg}px;
  `}
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT.bold};
    font-size: ${theme.FONT.medium};
    color: ${theme.COLORS.white};
    text-align: center;
  `}
`;

export const OForm = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  margin-top: 32px;
`;

export const OFormHeader = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LineLeft = styled.View`
  position: absolute;
  left: ${Device.width * 0.07}px;

  width: ${Device.width * 0.22}px;
  height: 1.2px;

  background-color: ${({ theme }) => theme.COLORS.dark};
  opacity: 0.8;
`;

export const LineRight = styled.View`
  position: absolute;
  right: ${Device.width * 0.07}px;

  width: ${Device.width * 0.22}px;
  height: 1.2px;

  background-color: ${({ theme }) => theme.COLORS.dark};
  opacity: 0.8;
`;

export const AuthForms = styled.TouchableOpacity`
  flex-direction: row;
  margin: 32px 0;
`;

export const Auth = styled.TouchableOpacity`
  width: ${Device.width * 0.22}px;
  justify-content: center;
  align-items: center;

  margin: 3px 12px;
  padding: 12px 18px;

  border: 1px solid ${({ theme }) => theme.COLORS.white};
  border-radius: 12px;
`;



