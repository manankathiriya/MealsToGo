import styled from "styled-components/native";
import { TextInput, Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
export const TextInp = styled(TextInput)`
  width: 300px;
  padding-horizontal: ${(props) => props.theme.space[2]};
  margin-vertical: ${(props) => props.theme.space[2]};
`;

export const LoginContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const LogInButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;
