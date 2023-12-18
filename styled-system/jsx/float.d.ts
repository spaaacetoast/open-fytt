/* eslint-disable */
import type { Component } from 'solid-js'
import type { FloatProperties } from '../patterns/float';
import type { HTMLPandaProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FloatProps extends FloatProperties, DistributiveOmit<HTMLPandaProps<'div'>, keyof FloatProperties > {}


export declare const Float: Component<FloatProps>