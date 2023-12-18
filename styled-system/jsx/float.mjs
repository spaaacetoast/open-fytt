import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getFloatStyle } from '../patterns/float.mjs';

export function Float(props) {
  const [patternProps, restProps] = splitProps(props, ["offsetX", "offsetY", "offset", "placement"]);
const styleProps = getFloatStyle(patternProps)
return createComponent(panda.div, mergeProps(styleProps, restProps))
}