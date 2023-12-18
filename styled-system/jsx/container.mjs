import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getContainerStyle } from '../patterns/container.mjs';

export function Container(props) {
  const styleProps = getContainerStyle()
return createComponent(panda.div, mergeProps(styleProps, props))
}