import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getVisuallyHiddenStyle } from '../patterns/visually-hidden.mjs';

export function VisuallyHidden(props) {
  const styleProps = getVisuallyHiddenStyle()
return createComponent(panda.div, mergeProps(styleProps, props))
}