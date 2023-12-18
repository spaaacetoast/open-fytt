import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getCircleStyle } from '../patterns/circle.mjs';

export function Circle(props) {
  const [patternProps, restProps] = splitProps(props, ["size"]);
const styleProps = getCircleStyle(patternProps)
return createComponent(panda.div, mergeProps(styleProps, restProps))
}