/* eslint-disable */
import type { Component } from 'solid-js'
import type { VisuallyHiddenProperties } from '../patterns/visually-hidden';
import type { HTMLPandaProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface VisuallyHiddenProps extends VisuallyHiddenProperties, DistributiveOmit<HTMLPandaProps<'div'>, keyof VisuallyHiddenProperties > {}


export declare const VisuallyHidden: Component<VisuallyHiddenProps>