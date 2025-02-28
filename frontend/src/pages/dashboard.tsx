import React from "react";
import { useState } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      </div>
      {icon && <div className="text-blue-500 text-xl">{icon}</div>}
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const [greeting] = useState<string>("Welcome back!");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">{greeting}</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Projects" value={12} />
          <StatCard title="Active Tasks" value={24} />
          <StatCard title="Completed" value="89%" />
          <StatCard title="Time Tracked" value="127h" />
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* Activity items would be mapped here */}
            <div className="border-b pb-4">
              <p className="text-gray-800">Updated project documentation</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
            <div className="border-b pb-4">
              <p className="text-gray-800">Completed task review</p>
              <p className="text-sm text-gray-500">4 hours ago</p>
            </div>
            <div className="border-b pb-4">
              <p className="text-gray-800">Started new project phase</p>
              <p className="text-sm text-gray-500">Yesterday</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
