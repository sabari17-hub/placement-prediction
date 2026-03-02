// File: src/pages/Dashboard.jsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  // UPDATED INSIGHTS based on new dataset (215 students)
  const dashboardData = useMemo(() => ({
    // Performance benchmarks
    performanceBenchmarks: [
      { benchmark: 'MBA > 65%', placementRate: 85.2, students: 122, color: 'bg-green-500' },
      { benchmark: 'Degree > 70%', placementRate: 79.4, students: 98, color: 'bg-blue-500' },
      { benchmark: 'HSC > 75%', placementRate: 72.8, students: 87, color: 'bg-purple-500' },
      { benchmark: 'Work Experience', placementRate: 81.6, students: 76, color: 'bg-orange-500' }
    ],

    // Risk analysis - students needing attention
    atRiskAnalysis: [
      { category: 'MBA < 60%', students: 48, placementRate: 22.9, risk: 'High' },
      { category: 'No Work Experience', students: 139, placementRate: 45.3, risk: 'Medium' },
      { category: 'Degree < 60%', students: 37, placementRate: 18.9, risk: 'High' },
      { category: 'E-Test < 55%', students: 62, placementRate: 29.0, risk: 'Medium' }
    ],

    // Specialization placement patterns
    specializationPlacements: [
      { specialization: 'Mkt&Fin', hires: 89, avgPackage: '2.8L', preference: 'Higher MBA %' },
      { specialization: 'Mkt&HR', hires: 67, avgPackage: '2.6L', preference: 'Communication Skills' }
    ],

    // Academic gap analysis
    academicGaps: [
      { metric: 'MBA Percentage', placedAvg: 65.8, notPlacedAvg: 58.2, gap: 7.6 },
      { metric: 'Degree Percentage', placedAvg: 68.4, notPlacedAvg: 60.1, gap: 8.3 },
      { metric: 'HSC Percentage', placedAvg: 72.1, notPlacedAvg: 64.3, gap: 7.8 },
      { metric: 'E-Test Score', placedAvg: 72.5, notPlacedAvg: 61.8, gap: 10.7 }
    ],

    // Package distribution
    packageDistribution: [
      { range: '2-3 LPA', students: 98, percentage: 62.8 },
      { range: '3-4 LPA', students: 42, percentage: 26.9 },
      { range: '4-5 LPA', students: 12, percentage: 7.7 },
      { range: '5+ LPA', students: 4, percentage: 2.6 }
    ],

    // Improvement opportunities
    improvementAreas: [
      { area: 'Work Experience', impact: 'High', effort: 'Medium', studentsAffected: 139 },
      { area: 'MBA Performance', impact: 'High', effort: 'High', studentsAffected: 48 },
      { area: 'E-Test Preparation', impact: 'Medium', effort: 'Low', studentsAffected: 62 },
      { area: 'Degree Performance', impact: 'Medium', effort: 'High', studentsAffected: 37 }
    ]
  }), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎯 Advanced Placement Analytics
          </h1>
          <p className="text-xl text-gray-600">
            Deep insights from 215 student records
          </p>
        </motion.div>

        {/* Key Performance Benchmarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dashboardData.performanceBenchmarks.map((benchmark, index) => (
            <BenchmarkCard
              key={benchmark.benchmark}
              benchmark={benchmark}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Risk Analysis */}
          <DashboardCard title="⚠️ At-Risk Student Analysis" icon="🎯">
            <div className="space-y-4">
              {dashboardData.atRiskAnalysis.map((risk, index) => (
                <RiskAnalysis
                  key={risk.category}
                  risk={risk}
                  delay={index * 0.1}
                />
              ))}
            </div>
            <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm text-red-700">
                <strong>Action Needed:</strong> {dashboardData.atRiskAnalysis[0].students} students need immediate attention
              </p>
            </div>
          </DashboardCard>

          {/* Specialization Placement Patterns */}
          <DashboardCard title="📊 Specialization Performance" icon="💼">
            <div className="space-y-4">
              {dashboardData.specializationPlacements.map((spec, index) => (
                <SpecializationPattern
                  key={spec.specialization}
                  spec={spec}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </DashboardCard>
        </div>

        {/* Academic Gap Analysis */}
        <DashboardCard title="📈 Academic Performance Gaps" icon="🔍" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardData.academicGaps.map((metric, index) => (
              <AcademicGapCard
                key={metric.metric}
                metric={metric}
                delay={index * 0.1}
              />
            ))}
          </div>
        </DashboardCard>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Package Distribution */}
          <DashboardCard title="💰 Package Distribution Analysis" icon="📈">
            <div className="space-y-4">
              {dashboardData.packageDistribution.map((pkg, index) => (
                <PackageDistribution
                  key={pkg.range}
                  pkg={pkg}
                  delay={index * 0.1}
                />
              ))}
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-700">
                <strong>Opportunity:</strong> 2.6% students secured 5+ LPA packages
              </p>
            </div>
          </DashboardCard>

          {/* Improvement Opportunities */}
          <DashboardCard title="🚀 Strategic Improvement Areas" icon="⭐">
            <div className="space-y-4">
              {dashboardData.improvementAreas.map((area, index) => (
                <ImprovementArea
                  key={area.area}
                  area={area}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </DashboardCard>
        </div>

        {/* Summary Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">🎯 Strategic Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 bg-blue-500/20 rounded-lg">
              <div className="text-lg font-bold mb-2">Focus on Work Experience</div>
              <p>139 students without work experience have only 45.3% placement rate</p>
            </div>
            <div className="p-4 bg-purple-500/20 rounded-lg">
              <div className="text-lg font-bold mb-2">Improve MBA Performance</div>
              <p>7.6% gap in MBA scores between placed and not placed students</p>
            </div>
            <div className="p-4 bg-green-500/20 rounded-lg">
              <div className="text-lg font-bold mb-2">Target Higher Packages</div>
              <p>Only 4 students secured 5+ LPA - identify success patterns</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Component: Benchmark Card
const BenchmarkCard = ({ benchmark, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white rounded-2xl shadow-lg p-6 text-center border-2 border-transparent hover:border-blue-200"
  >
    <div className={`w-16 h-16 ${benchmark.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
      <span className="text-white text-xl font-bold">{benchmark.placementRate}%</span>
    </div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">{benchmark.benchmark}</h3>
    <p className="text-2xl font-bold text-gray-800 mb-2">{benchmark.students}</p>
    <p className="text-sm text-gray-500">students</p>
  </motion.div>
);

// Component: Dashboard Card Wrapper
const DashboardCard = ({ title, children, icon, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}
  >
    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
      {icon && <span className="mr-3 text-2xl">{icon}</span>}
      {title}
    </h2>
    {children}
  </motion.div>
);

// Component: Risk Analysis
const RiskAnalysis = ({ risk, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className={`flex items-center justify-between p-4 rounded-lg border-2 ${
      risk.risk === 'High' 
        ? 'border-red-300 bg-red-50' 
        : 'border-orange-300 bg-orange-50'
    }`}
  >
    <div className="flex-1">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800">{risk.category}</h4>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
          risk.risk === 'High' ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'
        }`}>
          {risk.risk} Risk
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{risk.students} students</span>
        <span className="text-red-600 font-semibold">{risk.placementRate}% placement</span>
      </div>
    </div>
  </motion.div>
);

// Component: Specialization Pattern
const SpecializationPattern = ({ spec, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200"
  >
    <div className="flex-1">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800">{spec.specialization}</h4>
        <span className="text-lg font-bold text-blue-600">{spec.hires}</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-600">Avg: {spec.avgPackage}</span>
        <span className="text-purple-600 font-medium text-xs bg-purple-100 px-2 py-1 rounded">
          {spec.preference}
        </span>
      </div>
    </div>
  </motion.div>
);

// Component: Academic Gap Card
const AcademicGapCard = ({ metric, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center"
  >
    <h4 className="font-semibold text-gray-800 mb-3 text-sm">{metric.metric}</h4>
    
    {/* Score comparison bars */}
    <div className="space-y-2 mb-3">
      <div className="flex justify-between text-xs">
        <span className="text-green-600">Placed: {metric.placedAvg}%</span>
        <span className="text-red-600">Not: {metric.notPlacedAvg}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${metric.placedAvg}%` }}
        ></div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-red-500 h-2 rounded-full"
          style={{ width: `${metric.notPlacedAvg}%` }}
        ></div>
      </div>
    </div>
    
    <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-2">
      <p className="text-xs font-bold text-yellow-800">
        Gap: {metric.gap}%
      </p>
    </div>
  </motion.div>
);

// Component: Package Distribution
const PackageDistribution = ({ pkg, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200"
  >
    <div className="flex-1">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800">{pkg.range}</h4>
        <span className="text-lg font-bold text-green-600">{pkg.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
          style={{ width: `${pkg.percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{pkg.students} students</p>
    </div>
  </motion.div>
);

// Component: Improvement Area
const ImprovementArea = ({ area, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200"
  >
    <div className="flex-1">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800">{area.area}</h4>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
          area.impact === 'High' ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'
        }`}>
          {area.impact} Impact
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{area.studentsAffected} students</span>
        <span className="text-purple-600 font-medium">
          {area.effort} Effort
        </span>
      </div>
    </div>
  </motion.div>
);

export default Dashboard;