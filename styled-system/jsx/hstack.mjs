import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getHstackStyle } from '../patterns/hstack.mjs';

export function HStack(props) {
  const [patternProps, restProps] = splitProps(props, ["justify", "gap"]);
const styleProps = getHstackStyle(patternProps)
return createComponent(panda.div, mergeProps(styleProps, restProps))
}