import { sva } from "../../styled-system/css";

export const horizontalDatePickerButtonRecipe = sva({
  slots: ["root", "label", "sublabel"],
  base: {
    root: {
      display: "flex",
      width: "14",
      py: "4",

      flexDirection: "column",
      alignItems: "center",

      border: "1px solid",
      borderColor: { base: "gray.400", _selected: "gray.800" },
      borderRadius: "full",

      _selected: {
        backgroundColor: "gray.800",

        _hover: {
          backgroundColor: "gray.700",
        },
      },

      _hover: {
        backgroundColor: "gray.100",
      },
    },
    label: {
      fontSize: "xl",
      fontWeight: "medium",
      color: { base: "gray.400", _groupSelected: "gray.100" },
    },
    sublabel: {
      fontSize: "xs",
      color: { base: "gray.400", _groupSelected: "gray.100" },
    },
  },
});
