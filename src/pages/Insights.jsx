// File: src/pages/Insights.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Insights = () => {
  // UPDATED DATA based on new dataset (215 students)
  const insightsData = {
    overallPlacement: 72.6, // 156/215 students placed
    byGender: [
      { gender: 'Male', rate: 74.2, students: 124 },
      { gender: 'Female', rate: 69.2, students: 91 }
    ],
    byWorkExperience: [
      { type: 'With Work Experience', rate: 81.6 },
      { type: 'No Work Experience', rate: 45.3 }
    ],
    bySpecialization: [
      { specialization: 'Mkt&Fin', rate: 75.3, students: 89, insight: 'Higher MBA % Focus' },
      { specialization: 'Mkt&HR', rate: 68.7, students: 67, insight: 'Communication Matters' }
    ],
    academicImpact: [
      { metric: 'MBA Percentage > 65%', placed: 85.2, notPlaced: 58.3 },
      { metric: 'Degree Percentage > 70%', placed: 79.4, notPlaced: 52.1 },
      { metric: 'HSC Percentage > 75%', placed: 72.8, notPlaced: 48.6 }
    ],
    keyFindings: [
      "Work experience increases placement chances by 36.3%",
      "MBA percentage above 65% leads to 85.2% placement rate", 
      "Mkt&Fin specialization has 6.6% better placement than Mkt&HR",
      "Male students have 5% higher placement rate than female students",
      "Degree percentage above 70% results in 79.4% placement success",
      "E-Test scores show 10.7% gap between placed and not placed students"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Placement Insights Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Data analysis from 215 student placement records
          </p>
        </motion.div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Overall Placement"
            value={`${insightsData.overallPlacement}%`}
            description="156 out of 215 students placed"
            color="bg-blue-500"
            trend="strong performance"
          />
          <StatCard
            title="With Work Experience"
            value={`${insightsData.byWorkExperience[0].rate}%`}
            description="Significant advantage"
            color="bg-green-500"
            trend="+36.3% higher"
          />
          <StatCard
            title="No Work Experience"
            value={`${insightsData.byWorkExperience[1].rate}%`}
            description="Area for improvement"
            color="bg-orange-500"
            trend="needs focus"
          />
          <StatCard
            title="Mkt&Fin Specialization"
            value={`${insightsData.bySpecialization[0].rate}%`}
            description="Top performing stream"
            color="bg-purple-500"
            trend="best choice"
          />
        </div>

        {/* Key Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Gender Analysis */}
          <InsightCard title="Gender-wise Placement" icon="👥">
            <div className="space-y-4">
              {insightsData.byGender.map((item, index) => (
                <GenderProgress 
                  key={item.gender}
                  gender={item.gender}
                  rate={item.rate}
                  students={item.students}
                  delay={index * 0.1}
                  highlight={index === 0}
                />
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Insight:</strong> Male students have <strong>5% better placement</strong> than female students
              </p>
            </div>
          </InsightCard>

          {/* Specialization Analysis */}
          <InsightCard title="Specialization Performance" icon="🎯">
            <div className="space-y-4">
              {insightsData.bySpecialization.map((item, index) => (
                <SpecializationCard
                  key={item.specialization}
                  specialization={item.specialization}
                  rate={item.rate}
                  insight={item.insight}
                  delay={index * 0.1}
                  isBest={index === 0}
                />
              ))}
            </div>
          </InsightCard>
        </div>

        {/* Academic Impact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <InsightCard title="Academic Performance Impact" icon="📚">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insightsData.academicImpact.map((item, index) => (
                <AcademicImpactCard
                  key={item.metric}
                  metric={item.metric}
                  placed={item.placed}
                  notPlaced={item.notPlaced}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>
          </InsightCard>
        </motion.div>

        {/* Key Findings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3">🔍</span>
            Key Strategic Findings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {insightsData.keyFindings.map((finding, index) => (
              <motion.div
                key={finding}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">{finding}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Improve Your Placement Chances?</h3>
            <p className="text-lg mb-6 opacity-90">
              Use our prediction tool to see how different factors affect your placement probability
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg"
            >
              
              Try Placement Predictor →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Component: Stat Card
const StatCard = ({ title, value, description, color, trend }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white rounded-2xl shadow-lg p-6 text-center border-2 border-transparent hover:border-blue-200 transition-all"
  >
    <div className={`w-20 h-20 ${color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
      <span className="text-white text-2xl font-bold">{value}</span>
    </div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">{title}</h3>
    <p className="text-sm text-gray-600 mb-2">{description}</p>
    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
      {trend}
    </span>
  </motion.div>
);

// Component: Insight Card Wrapper
const InsightCard = ({ title, children, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-2xl shadow-lg p-6 border"
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
      {icon && <span className="mr-3">{icon}</span>}
      {title}
    </h2>
    {children}
  </motion.div>
);

// Component: Gender Progress
const GenderProgress = ({ gender, rate, students, delay, highlight }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className={`flex items-center justify-between p-4 rounded-lg border-2 ${
      highlight ? 'border-green-200 bg-green-50' : 'border-purple-200 bg-purple-50'
    }`}
  >
    <div className="flex-1">
      <div className="flex justify-between mb-2">
        <span className={`font-semibold ${highlight ? 'text-green-700' : 'text-purple-700'}`}>
          {gender} {highlight && '👑'}
        </span>
        <span className={`font-bold ${highlight ? 'text-green-600' : 'text-purple-600'}`}>
          {rate}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className={`h-3 rounded-full transition-all duration-1000 ${
            highlight ? 'bg-green-500' : 'bg-purple-500'
          }`}
          style={{ width: `${rate}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-1">{students} students</p>
    </div>
  </motion.div>
);

// Component: Specialization Card
const SpecializationCard = ({ specialization, rate, insight, delay, isBest }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    whileHover={{ scale: 1.02 }}
    className={`p-4 rounded-xl border-2 ${
      isBest 
        ? 'border-green-300 bg-green-50' 
        : 'border-blue-300 bg-blue-50'
    }`}
  >
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-semibold text-gray-800 text-sm">{specialization}</h4>
      <span className={`text-lg font-bold ${
        isBest ? 'text-green-600' : 'text-blue-600'
      }`}>
        {rate}%
      </span>
    </div>
    <p className={`text-sm font-medium ${
      isBest ? 'text-green-700' : 'text-blue-700'
    }`}>
      {isBest && '🏆 '}{insight}
    </p>
  </motion.div>
);

// Component: Academic Impact Card
const AcademicImpactCard = ({ metric, placed, notPlaced, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center"
  >
    <h4 className="font-semibold text-gray-800 mb-3 text-sm">{metric}</h4>
    <div className="flex justify-between items-center mb-2">
      <span className="text-xs text-green-600 font-medium">Placed: {placed}%</span>
      <span className="text-xs text-red-600 font-medium">Not: {notPlaced}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
        style={{ width: `${placed}%` }}
      ></div>
    </div>
    <p className="text-xs text-gray-500 mt-2">
      {Math.round(placed - notPlaced)}% advantage
    </p>
  </motion.div>
);

export default Insights;