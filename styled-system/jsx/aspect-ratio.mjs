import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getAspectRatioStyle } from '../patterns/aspect-ratio.mjs';

export function AspectRatio(props) {
  const [patternProps, restProps] = splitProps(props, ["ratio"]);
const styleProps = getAspectRatioStyle(patternProps)
return createComponent(panda.div, mergeProps(styleProps, restProps))
}