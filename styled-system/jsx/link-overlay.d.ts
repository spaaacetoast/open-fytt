/* eslint-disable */
import type { Component } from 'solid-js'
import type { LinkOverlayProperties } from '../patterns/link-overlay';
import type { HTMLPandaProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface LinkOverlayProps extends LinkOverlayProperties, DistributiveOmit<HTMLPandaProps<'a'>, keyof LinkOverlayProperties > {}


export declare const LinkOverlay: Component<LinkOverlayProps>