import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getLinkOverlayStyle } from '../patterns/link-overlay.mjs';

export function LinkOverlay(props) {
  const styleProps = getLinkOverlayStyle()
return createComponent(panda.a, mergeProps(styleProps, props))
}