import { MantineThemeOverride } from "@mantine/core";

export default <MantineThemeOverride>{
colors: {
  victoria: [
    "#E6FFFC", // Lightest - equivalent to the original #E2E1F1
    "#CCFFF9", // Light - equivalent to #C2C0E7
    "#B3FFF5", // Medium-light - equivalent to #A19DE4
    "#00ffd2", // Base color (your chosen cyan)
    "#00E6BC", // Medium-dark
    "#00ffd2", // Dark
    "#00ffd2", // Darker
    "#00ffd2", // Even darker
    "#00ffd2", // Very dark
    "#00664E", // Darkest
  ],
},
  primaryColor: "victoria",
  components: {
    Modal: {
      styles: (theme) => ({
        title: {
          fontSize: theme.fontSizes.lg,
          fontWeight: 700,
        },
      }),
    },
  },
};
