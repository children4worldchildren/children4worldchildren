import React from 'react';
import { StatItem } from '../data/stats';

interface StatsProps {
  stats: StatItem[];
  columns?: number;
  className?: string;
}

export const Stats: React.FC<StatsProps> = ({ 
  stats, 
  columns = 4, 
  className = '' 
}) => {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

  return (
    <div className={`grid ${gridClasses} gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
          <h4 className="text-lg font-semibold text-gray-800">{stat.label}</h4>
          {stat.description && (
            <p className="mt-2 text-gray-600 text-sm">{stat.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stats;
