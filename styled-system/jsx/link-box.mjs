import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getLinkBoxStyle } from '../patterns/link-box.mjs';

export function LinkBox(props) {
  const styleProps = getLinkBoxStyle()
return createComponent(panda.div, mergeProps(styleProps, props))
}