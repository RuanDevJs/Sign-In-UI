import { useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { ButtonProps } from "./types";

import * as Styled from "./styles";

export default function Home() {
  const [buttons, setButtons] = useState<ButtonProps[]>([
    {
      title: "Register",
      active: true
    },
    {
      title: "Sign In",
      active: false
    },
  ]);
  const theme = useTheme();

  const navigation = useNavigation();

  function uncheckAllButtons(){
    const buttonsUnchecked = buttons.map((el) => {
      el.active = false
      return el;
    });
    setButtons(buttonsUnchecked);
  }

  function changeActiveButton(currentIndex: number){
    uncheckAllButtons();
    setButtons((oldValue) => oldValue.map((button, index) => {
      if(index === currentIndex){
        button.active =! button.active;
      }

      return button;
    }));
    currentIndex === 1 && navigation.navigate('Login');
  }

  return (
    <Styled.Container
      blurRadius={120}
      source={{ uri: theme.poster }}
    >
      <Styled.Poster source={{ uri: theme.poster }} />
      <Styled.Wrap>
        <Styled.Title>Discover your {'\n'} Dream job Here</Styled.Title>
        <Styled.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Styled.Description>
        <Styled.ButtonContainer>
          {buttons.map((button, index) => (
            <Styled.ButtonWrap 
              active={button.active} 
              onPress={() => changeActiveButton(index)}
              key={index}
            >
              <Styled.ButtonText>{button.title}</Styled.ButtonText>
            </Styled.ButtonWrap>
          ))}
        </Styled.ButtonContainer>
      </Styled.Wrap>
    </Styled.Container>
  )
}