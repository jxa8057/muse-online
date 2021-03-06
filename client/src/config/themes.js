const global = {
  error: "red"
};

const lightTheme = {
  primary: "#FFFFFF",
  secondary: "#000000",
  hover: "#F7F7F7",
  ...global
};

const darkTheme = {
  primary: "#000000",
  secondary: "#FFFFFF",
  hover: "#F7F7F7",
  ...global
};

export { lightTheme, darkTheme };
