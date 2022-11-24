import { useTheme } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

import * as Styled from "./styles";

export default function Login() {
  const theme = useTheme();

  return (
    <Styled.KeyboardAvoidView>
      <Styled.Container>
        <Styled.Header>
          <Styled.Title>Hello Again!</Styled.Title>
          <Styled.Description>Welcome back you've {'\n'} been missed!</Styled.Description>
        </Styled.Header>
        <Styled.Form>
          <Styled.Input
            placeholder='Enter username'
          />
          <Styled.Input
            autoComplete='off'
            autoCorrect={false}
            textContentType='password'
            secureTextEntry
            placeholder='Password'
          />
          <Styled.RecoverPassword>
            Recovery Password
          </Styled.RecoverPassword>
          <Styled.ButtonContainer activeOpacity={0.72}>
            <Styled.ButtonTitle>
              Sign In
            </Styled.ButtonTitle>
          </Styled.ButtonContainer>
        </Styled.Form>
        <Styled.OForm>
          <Styled.OFormHeader>
            <Styled.LineLeft />
            <Styled.LineRight />
            <Styled.Description style={{ color: theme.COLORS.dark }}>
              Or continue with
            </Styled.Description>
          </Styled.OFormHeader>
          <Styled.AuthForms>
            <Styled.Auth activeOpacity={0.4}>
              <AntDesign name="google" size={25} color='#EA4335' />
            </Styled.Auth>
            <Styled.Auth activeOpacity={0.4}>
              <AntDesign name="apple1" size={25} color='#333' />
            </Styled.Auth>
            <Styled.Auth activeOpacity={0.4}>
              <AntDesign name="facebook-square" size={25} color='#45e' />
            </Styled.Auth>
          </Styled.AuthForms>
        </Styled.OForm>
      </Styled.Container>
    </Styled.KeyboardAvoidView>
  )
}