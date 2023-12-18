import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getBoxStyle } from '../patterns/box.mjs';

export function Box(props) {
  const styleProps = getBoxStyle()
return createComponent(panda.div, mergeProps(styleProps, props))
}