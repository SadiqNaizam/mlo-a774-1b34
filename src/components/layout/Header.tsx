import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * A layout component that renders the main application header.
 * It encapsulates the specific header implementation (e.g., TopHeader),
 * providing a consistent component for use in the main application layout.
 * This allows for easy updates or replacements of the header's content
 * while maintaining a stable layout structure.
 */
const Header: React.FC = () => {
  return <TopHeader />;
};

export default Header;
