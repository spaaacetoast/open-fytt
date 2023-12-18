import { cva, type RecipeVariantProps } from "../../panda-system/css";
import { panda } from "../../panda-system/jsx";

const horizontalDatePickerButtonStyle = cva({
  base: {
    display: "flex",
    flexDirection: "column",
  },
  variants: {
    visual: {
      solid: { bg: "red.200", color: "white" },
      outline: { borderWidth: "1px", borderColor: "red.200" },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "24px" },
    },
  },
});

export type horizontalDatePickerButtonVariants = RecipeVariantProps<
  typeof horizontalDatePickerButtonStyle
>;

export const HorizontalDatePickerButton = panda(
  "button",
  horizontalDatePickerButtonStyle
);
