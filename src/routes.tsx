import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Function to dynamically import all page components
const PRESERVED = import.meta.glob('/src/pages/(_app|_document|404).tsx', {
  eager: true,
});
const PAGES = import.meta.glob('/src/pages/**/[a-z[]*.tsx', {
  eager: true,
});

// Helper function to convert file path to route path
function pathToRoute(path: string): string {
  return path
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');
}

// Helper function to sort routes for proper matching
function sortRoutes(routes: string[]): string[] {
  return routes.sort((a, b) => {
    const aSegments = a.split('/').filter(Boolean);
    const bSegments = b.split('/').filter(Boolean);
    
    // Index routes should come last
    if (a.endsWith('/') && !b.endsWith('/')) return 1;
    if (!a.endsWith('/') && b.endsWith('/')) return -1;
    
    // Dynamic routes should come after static routes
    const aIsDynamic = aSegments.some(segment => segment.startsWith(':') || segment === '*');
    const bIsDynamic = bSegments.some(segment => segment.startsWith(':') || segment === '*');
    
    if (!aIsDynamic && bIsDynamic) return -1;
    if (aIsDynamic && !bIsDynamic) return 1;
    
    // Sort by number of segments (more specific routes first)
    return bSegments.length - aSegments.length;
  });
}

export function AppRoutes() {
  const preservedRoutes = Object.keys(PRESERVED).reduce((routes, key) => {
    const path = pathToRoute(key);
    if (path) {
      routes[path] = (PRESERVED[key] as any).default;
    }
    return routes;
  }, {} as Record<string, React.ComponentType>);

  const pageRoutes = Object.keys(PAGES).reduce((routes, key) => {
    const path = pathToRoute(key);
    if (path) {
      routes[path] = (PAGES[key] as any).default;
    }
    return routes;
  }, {} as Record<string, React.ComponentType>);

  const allRoutes = { ...preservedRoutes, ...pageRoutes };
  const sortedPaths = sortRoutes(Object.keys(allRoutes));

  return (
    <Routes>
      {sortedPaths.map(path => {
        const Component = allRoutes[path];
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  );
}