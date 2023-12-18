import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getDividerStyle } from '../patterns/divider.mjs';

export function Divider(props) {
  const [patternProps, restProps] = splitProps(props, ["orientation", "thickness", "color"]);
const styleProps = getDividerStyle(patternProps)
return createComponent(panda.div, mergeProps(styleProps, restProps))
}