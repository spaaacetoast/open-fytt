import type { HTMLPandaProps } from "../../styled-system/types";
import { createStyleContext } from "../lib/createStyleContext";
import { horizontalDatePickerButtonRecipe } from "./horizontalDatePickerButtonRecipe";

const { withProvider, withContext } = createStyleContext(
  horizontalDatePickerButtonRecipe
);

const Root = withProvider("button", "root");
const Label = withContext("label", "label");
const SubLabel = withContext("label", "sublabel");

export const HorizontalDatePickerButton = { Root, Label, SubLabel };

export type HorizontalDatePickerButtonProps = HTMLPandaProps<typeof Root>;
