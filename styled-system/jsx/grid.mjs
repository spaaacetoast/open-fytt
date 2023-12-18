import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getGridStyle } from '../patterns/grid.mjs';

export function Grid(props) {
  const [patternProps, restProps] = splitProps(props, ["gap", "columnGap", "rowGap", "columns", "minChildWidth"]);
const styleProps = getGridStyle(patternProps)
return createComponent(panda.div, mergeProps(styleProps, restProps))
}