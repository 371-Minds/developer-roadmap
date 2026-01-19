import React from 'react';
export type Node = any;
export type Edge = any;
export const Renderer: React.ForwardRefExoticComponent<any>;
export const ReadonlyEditor: React.ForwardRefExoticComponent<any>;
export const Editor: React.ForwardRefExoticComponent<any>;
export function generateAIRoadmapFromText(text: string): { nodes: Node[], edges: Edge[] };
export function renderFlowJSON(data: { nodes: Node[], edges: Edge[] }): SVGElement | null;
