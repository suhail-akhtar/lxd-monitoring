import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Dashboard } from '@/pages/Dashboard/Dashboard';
import { SettingsPage } from '@/pages/SettingsPage/SettingsPage';
import { NodeDetails } from '@/pages/NodeDetails/NodeDetails';
import { ClusterPage } from '@/pages/ClusterPage/ClusterPage';
import { ComingSoonPage } from '@/pages/ComingSoonPage/ComingSoonPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/nodes/:nodeId',
    element: <NodeDetails />,
  },
  {
    path: '/cluster',
    element: <ClusterPage />,
  },
  {
    path: '/containers',
    element: <ComingSoonPage />,
  },
  {
    path: '/virtual-machines',
    element: <ComingSoonPage />,
  },
  {
    path: '/storage',
    element: <ComingSoonPage />,
  },
  {
    path: '/network',
    element: <ComingSoonPage />,
  },
  {
    path: '/operations',
    element: <ComingSoonPage />,
  },
  {
    path: '/alerts',
    element: <ComingSoonPage />,
  },
  {
    path: '/logs',
    element: <ComingSoonPage />,
  },
];
