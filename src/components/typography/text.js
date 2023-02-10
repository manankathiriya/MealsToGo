import styled from "styled-components/native";
import { Text } from "react-native";
import React from "react";
import { useTheme } from "styled-components";

const defaultDisplayedText = (theme) =>
  `font-family: ${theme.fonts.body};
   font-weight: ${theme.fontWeights.regular};
   color: ${theme.colors.text.primary};
   flex-wrap: wrap;
   margin-top: 0px;
   margin-bottom: 0px;
    `;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

const TextComponent = styled(Text)`
  ${({ theme }) => defaultDisplayedText(theme)}
  ${({ variant, theme }) => variant && variants[variant](theme)}
`;

export const TextVar = ({ variant, children }) => {
  const theme = useTheme();
  return (
    <TextComponent variant={variant} theme={theme}>
      {children}
    </TextComponent>
  );
};
