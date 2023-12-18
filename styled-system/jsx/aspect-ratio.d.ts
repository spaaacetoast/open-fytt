/* eslint-disable */
import type { Component } from 'solid-js'
import type { AspectRatioProperties } from '../patterns/aspect-ratio';
import type { HTMLPandaProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AspectRatioProps extends AspectRatioProperties, DistributiveOmit<HTMLPandaProps<'div'>, keyof AspectRatioProperties | 'aspectRatio'> {}


export declare const AspectRatio: Component<AspectRatioProps>