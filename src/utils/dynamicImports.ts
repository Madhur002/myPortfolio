import dynamic from 'next/dynamic';

export const loadComponent = (componentPath: string) =>
  dynamic(() => import(componentPath)); 