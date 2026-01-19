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
export const renderFlowJSON = () => {
     if (typeof document !== 'undefined') {
        return document.createElement('div');
     }
     return null;
};
