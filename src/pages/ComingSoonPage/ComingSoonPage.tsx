import React from 'react';

export const ComingSoonPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-50 p-4">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon!</h2>
        <p className="text-gray-600 text-lg">
          We're working hard to bring you this feature. Please check back later!
        </p>
      </div>
    </div>
  );
};
