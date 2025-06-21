import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * A layout component that renders the main application sidebar.
 * It serves as an abstraction layer, wrapping the specific sidebar implementation
 * (e.g., SidebarNav) to be used within the main application layout.
 * This promotes modularity, allowing the sidebar's content to be swapped
 * without changing the overall page structure.
 */
const Sidebar: React.FC = () => {
  // This component wraps the detailed SidebarNav. The `SidebarNav` component
  // from the context uses `position: fixed`, which takes it out of the normal
  // document flow. The parent layout (e.g., AdminLayout) will be responsible
  // for managing the content flow around this fixed sidebar.
  return <SidebarNav />;
};

export default Sidebar;
