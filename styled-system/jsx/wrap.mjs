import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getWrapStyle } from '../patterns/wrap.mjs';

export function Wrap(props) {
  const [patternProps, restProps] = splitProps(props, ["gap", "rowGap", "columnGap", "align", "justify"]);
const styleProps = getWrapStyle(patternProps)
return createComponent(panda.div, mergeProps(styleProps, restProps))
}