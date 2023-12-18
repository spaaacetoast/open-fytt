/* eslint-disable */
import type { Component } from 'solid-js'
import type { LinkBoxProperties } from '../patterns/link-box';
import type { HTMLPandaProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface LinkBoxProps extends LinkBoxProperties, DistributiveOmit<HTMLPandaProps<'div'>, keyof LinkBoxProperties > {}


export declare const LinkBox: Component<LinkBoxProps>