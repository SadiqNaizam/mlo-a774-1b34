import React from 'react';

// Layout Components
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

// Dashboard Organisms
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import ResultChart from '../components/Dashboard/ResultChart';
import CircularProgressCard from '../components/Dashboard/CircularProgressCard';
import LineChart from '../components/Dashboard/LineChart';

/**
 * The main dashboard overview page for the "Dashboard User Clone" application.
 * 
 * This component orchestrates the overall page structure by combining a fixed sidebar
 * with a main content area. It assembles various data visualization components
 * (organisms) into a cohesive dashboard layout as specified by the project requirements.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="bg-background min-h-screen font-sans text-foreground">
      {/* Sidebar is rendered via a layout component. It is positioned fixed 
          and does not affect the flow of the main content. */}
      <Sidebar />

      {/* This wrapper div contains the header and main content.
          The left margin compensates for the width of the fixed sidebar. */}
      <div className="ml-60">
        {/* Header is a layout component rendering the TopHeader organism. */}
        <Header />
        
        <main className="p-6">
          <div className="flex flex-col gap-6">
            
            {/* Row 1: Display of primary statistics. */}
            <StatsCardGrid />

            {/* Row 2: A grid for the main charts. Components within this grid 
                use col-span utilities to position themselves correctly. */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <ResultChart />
              <CircularProgressCard />
            </div>

            {/* Row 3: A grid for secondary charts or visualizations. */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <LineChart />
              {/* The LineChart component is designed to span 8 of 12 columns on large screens.
                  The remaining 4 columns in this row are intentionally left blank, 
                  a common pattern in dashboard design. */}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
