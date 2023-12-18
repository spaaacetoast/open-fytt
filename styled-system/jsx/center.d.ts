/* eslint-disable */
import type { Component } from 'solid-js'
import type { CenterProperties } from '../patterns/center';
import type { HTMLPandaProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface CenterProps extends CenterProperties, DistributiveOmit<HTMLPandaProps<'div'>, keyof CenterProperties > {}


export declare const Center: Component<CenterProps>