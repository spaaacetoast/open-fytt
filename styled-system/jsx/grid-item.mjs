import { splitProps, mergeProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { panda } from './factory.mjs';
import { getGridItemStyle } from '../patterns/grid-item.mjs';

export function GridItem(props) {
  const [patternProps, restProps] = splitProps(props, ["colSpan", "rowSpan", "colStart", "rowStart", "colEnd", "rowEnd"]);
const styleProps = getGridItemStyle(patternProps)
return createComponent(panda.div, mergeProps(styleProps, restProps))
}