/* eslint-disable */
import type { Component } from 'solid-js'
import type { CircleProperties } from '../patterns/circle';
import type { HTMLPandaProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface CircleProps extends CircleProperties, DistributiveOmit<HTMLPandaProps<'div'>, keyof CircleProperties > {}


export declare const Circle: Component<CircleProps>