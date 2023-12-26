import { sva, type RecipeVariantProps } from "../../styled-system/css";

export const horizontalDatePickerButtonRecipe = sva({
  slots: ["root", "label", "sublabel"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "md",
      padding: "sm",
      border: "1px solid black",
      _hover: {
        backgroundColor: "gray.100",
      },
      _active: {
        backgroundColor: "gray.400",
      },
    },
    label: {
      fontSize: "lg",
      fontWeight: "bold",
      color: "gray.800",
    },
    sublabel: {
      fontSize: "sm",
      color: "gray.500",
    },
  },
  variants: {
    isSelected: {
      true: {
        root: {
          backgroundColor: "cyan.500",
          color: "white",
        },
        label: {
          color: "white",
        },
        sublabel: {
          color: "white",
        },
      },
    },
  },
});

export type HorizontalDatePickerButtonVariants = RecipeVariantProps<
  typeof horizontalDatePickerButton
>;
