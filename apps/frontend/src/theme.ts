const fontConfig = {
  fonts: {
    main: "Roboto Condensed", // Modernist, geometric sans-serif
    secondary: "Playfair Display", // Elegant, high-contrast serif
  },
  fontSizes: {
    header: "16px",
    small: "18px",
    medium: "22px",
    extraMedium: "28px",
    logo: "48px",
    large: "80px",
    obscene: "200px",
  },
  fontWeights: {
    small: "300",
    medium: "500",
    extraMedium: "600",
    large: "800",
    obscene: "900",
  },
  fontHeight: {
    small: "85%",
    medium: "95%",
    extraMedium: "105%",
    large: "115%",
    obscene: "125%",
  },
};

const spacing = {
  radius: {
    base: "5px",
    small: "10px",
    medium: "18px",
    extraMedium: "25px",
    large: "40px",
    obscene: "50px",
  },
  spacing: {
    base: "5px",
    small: "10px",
    medium: "20px",
    extraMedium: "30px",
    large: "50px",
    obscene: "90px",
  },
  commonOnes: {
    thirty: "30px",
  },
};

const colors = {
  colors: {
    onWhite: "#FFFFFF",
    offWhite: "#F5F5F5",
    primary: "#FF5733", // A bold orange
    secondaryFont: "#2C2C54", // A muted dark purple
    secondaryAccent: "#33FF57", // A bright green
  },
};

const breakPoints = {
  breakPoints: {
    mobile: "450px",
    tablet: "800px",
    desktop: "1100px",
  },
};

export const theme = {
  ...fontConfig,
  ...spacing,
  ...colors,
  ...breakPoints,
};

export type OurTheme = typeof theme;
