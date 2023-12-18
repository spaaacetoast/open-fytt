/* eslint-disable */
import type { Component } from 'solid-js'
import type { SpacerProperties } from '../patterns/spacer';
import type { HTMLPandaProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface SpacerProps extends SpacerProperties, DistributiveOmit<HTMLPandaProps<'div'>, keyof SpacerProperties > {}


export declare const Spacer: Component<SpacerProps>