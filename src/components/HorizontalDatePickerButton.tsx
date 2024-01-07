import { createEffect } from "solid-js";
import { panda } from "../../styled-system/jsx";
import type { HTMLPandaProps } from "../../styled-system/types";
import { createStyleContext } from "../lib/createStyleContext";
import { horizontalDatePickerButtonRecipe } from "./horizontalDatePickerButtonRecipe";

const { withProvider, withContext } = createStyleContext(
  horizontalDatePickerButtonRecipe
);

type ButtonRootProps = HTMLPandaProps<"button"> & {
  selected?: boolean;
};

const ButtonRoot = (props: ButtonRootProps) => (
  <panda.button data-selected={props.selected || undefined} {...props} />
);

const Root = withProvider(ButtonRoot, "root");
const Label = withContext("label", "label");
const SubLabel = withContext("label", "sublabel");

export const HorizontalDatePickerButton = Object.assign(Root, {
  Label,
  SubLabel,
});

export type HorizontalDatePickerButtonProps = HTMLPandaProps<typeof Root>;
