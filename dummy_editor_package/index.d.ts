import React from 'react';
export type Node = Record<string, unknown>;
export type Edge = Record<string, unknown>;
export const Renderer: React.ForwardRefExoticComponent<React.PropsWithRef<unknown>>;
export const ReadonlyEditor: React.ForwardRefExoticComponent<React.PropsWithRef<unknown>>;
export const Editor: React.ForwardRefExoticComponent<React.PropsWithRef<unknown>>;
export function generateAIRoadmapFromText(text: string): { nodes: Node[], edges: Edge[] };
export function renderFlowJSON(data: { nodes: Node[], edges: Edge[] }): SVGElement | null;
