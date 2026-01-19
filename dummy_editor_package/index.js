import React from 'react';

export const Renderer = React.forwardRef((props, ref) => {
  if (props.onRendered) {
    setTimeout(() => props.onRendered(), 0);
  }
  return React.createElement('div', { ref, className: 'renderer-placeholder' }, 'Renderer Placeholder');
});

export const ReadonlyEditor = React.forwardRef((props, ref) => {
  if (props.onRendered) {
     setTimeout(() => props.onRendered(), 0);
  }
  return React.createElement('div', { ref, className: 'readonly-editor-placeholder' }, 'ReadonlyEditor Placeholder');
});

export const Editor = React.forwardRef((props, ref) => {
    return React.createElement('div', { ref, className: 'editor-placeholder' }, 'Editor Placeholder');
});

export const generateAIRoadmapFromText = () => ({ nodes: [], edges: [] });
/**
 * Render a flow as an SVG element.
 *
 * Note: In server-side rendering (SSR) environments where `document` is not
 * available (e.g. Astro SSR), this function will always return `null`.
 * Callers must handle the `null` case when using this function in SSR.
 */
export const renderFlowJSON = () => {
     if (typeof document === 'undefined') {
        return null;
     }
     // In browser environments, return an actual SVGElement as per the
     // declared TypeScript type (SVGElement | null).
     return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
};
