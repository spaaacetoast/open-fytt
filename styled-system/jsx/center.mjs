import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getCenterStyle } from '../patterns/center.mjs';

export function Center(props) {
  const [patternProps, restProps] = splitProps(props, ["inline"]);
const styleProps = getCenterStyle(patternProps)
return createComponent(panda.div, mergeProps(styleProps, restProps))
}