import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: 'Pranesh R',
      role: 'Project Lead & Full Stack Developer',
      description: 'Machine Learning integration and backend development',
      emoji: '👨‍💻',
      gradient: 'from-purple-500 via-pink-500 to-red-500'
    },
    {
      name: 'Ragul M', 
      role: 'Frontend Developer',
      description: 'UI/UX design and React components',
      emoji: '🎨',
      gradient: 'from-blue-500 via-cyan-500 to-green-500'
    },
    {
      name: 'Naresh Balaji GV',
      role: 'Data Analyst',
      description: 'Data processing and visualization',
      emoji: '📊',
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    },
    {
      name: 'Sabari S',
      role: 'ML Engineer',
      description: 'Model training and deployment',
      emoji: '🤖',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500'
    }
  ];

  const technologies = [
    { 
      name: 'React', 
      description: 'Frontend framework for building user interfaces', 
      icon: '⚛️',
      gradient: 'from-cyan-500 to-blue-500',
      shadow: 'shadow-cyan-500/25'
    },
    { 
      name: 'Tailwind CSS', 
      description: 'Utility-first CSS framework for styling', 
      icon: '🎨',
      gradient: 'from-teal-500 to-green-500',
      shadow: 'shadow-teal-500/25'
    },
    { 
      name: 'Framer Motion', 
      description: 'Animation library for smooth interactions', 
      icon: '✨',
      gradient: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/25'
    },
    { 
      name: 'Python Flask', 
      description: 'Backend framework for API development', 
      icon: '🐍',
      gradient: 'from-yellow-500 to-orange-500',
      shadow: 'shadow-yellow-500/25'
    },
    { 
      name: 'Scikit-learn', 
      description: 'Machine learning library for predictive models', 
      icon: '📈',
      gradient: 'from-red-500 to-pink-500',
      shadow: 'shadow-red-500/25'
    },
    { 
      name: 'Pandas & NumPy', 
      description: 'Data processing and analysis libraries', 
      icon: '📊',
      gradient: 'from-indigo-500 to-purple-500',
      shadow: 'shadow-indigo-500/25'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen py-8 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
          >
            About The Project
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A comprehensive platform leveraging machine learning to predict student employability 
            using real academic data with 97% accuracy.
          </motion.p>
        </div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative bg-white rounded-2xl shadow-2xl p-8 mb-8 border border-gray-100 hover:shadow-3xl transition-all duration-500 group"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6 text-center">
              Project Overview
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-1 rounded-2xl">
                  <div className="bg-white rounded-xl p-6 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="text-3xl mr-3">🎯</span>
                      Our Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To help students understand their employability prospects using real academic data 
                      and provide data-driven recommendations to improve placement chances through 
                      advanced machine learning algorithms with 97% accuracy.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-blue-500 p-1 rounded-2xl">
                  <div className="bg-white rounded-xl p-6 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="text-3xl mr-3">📊</span>
                      Dataset Information
                    </h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <strong>215 student records</strong> with comprehensive academic data
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <strong>72.6% placement rate</strong> across the dataset
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <strong>Multiple academic parameters</strong> analyzed
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <strong>SVM algorithm</strong> achieving 97% prediction accuracy
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-2xl">
                  <div className="bg-white rounded-xl p-6 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="text-3xl mr-3">🔍</span>
                      Key Features
                    </h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-center">
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm font-semibold mr-3">97%</span>
                        <strong>High Accuracy:</strong> SVM-powered placement forecasting
                      </li>
                      <li className="flex items-center">
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm font-semibold mr-3">📈</span>
                        <strong>Academic Analytics:</strong> SSC, HSC, Degree, MBA performance
                      </li>
                      <li className="flex items-center">
                        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-md text-sm font-semibold mr-3">💼</span>
                        <strong>Work Experience Impact:</strong> 36.3% placement advantage
                      </li>
                      <li className="flex items-center">
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md text-sm font-semibold mr-3">🎓</span>
                        <strong>Specialization Analysis:</strong> Mkt&Fin vs Mkt&HR comparison
                      </li>
                      <li className="flex items-center">
                        <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-md text-sm font-semibold mr-3">💰</span>
                        <strong>Salary Estimation:</strong> Package prediction based on academics
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="text-2xl mr-2">🏆</span>
                    Model Performance
                  </h4>
                  <p className="text-cyan-50 leading-relaxed">
                    <strong>Support Vector Machine (SVM)</strong> algorithm achieving 
                    <strong> 97% accuracy</strong> in placement prediction using comprehensive 
                    academic performance data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border border-gray-100"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 text-center">
            Our Team
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto text-lg">
            Department of Computer Science and Engineering - III Year
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-xl p-6 text-center border-2 border-transparent group-hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {member.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <div className={`inline-block bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold mb-3`}>
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8 text-center">
            Technology Stack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className={`relative bg-white rounded-xl p-6 border-2 border-gray-100 group-hover:border-transparent group-hover:shadow-xl ${tech.shadow} transition-all duration-300 h-full`}>
                  <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent mb-3`}>
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">📊 Dataset Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold">215</div>
              <div className="text-sm opacity-90">Total Students</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold">72.6%</div>
              <div className="text-sm opacity-90">Placement Rate</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold">97%</div>
              <div className="text-sm opacity-90">Model Accuracy</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm opacity-90">Features Analyzed</div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold mb-3">
            Student Employability Forecast Platform
          </h3>
          <p className="text-lg opacity-90 mb-2">
            Academic Project | Department of CSE | III Year | 2025
          </p>
          <p className="text-blue-100 text-sm">
            Empowering students with 97% accurate data-driven career insights
          </p>
          
          {/* Animated floating elements */}
          <div className="flex justify-center space-x-4 mt-4">
            {['🚀', '💡', '🎯', '📊', '🤖', '🏆'].map((emoji, index) => (
              <motion.span
                key={emoji}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-2xl"
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;