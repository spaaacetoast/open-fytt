import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getBleedStyle } from '../patterns/bleed.mjs';

export function Bleed(props) {
  const [patternProps, restProps] = splitProps(props, ["inline", "block"]);
const styleProps = getBleedStyle(patternProps)
return createComponent(panda.div, mergeProps(styleProps, restProps))
}