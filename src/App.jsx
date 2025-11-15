import React from 'react';
import ProfileSection from './components/ProfileSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center text-indigo-700">LHL - 前端开发工程师</h1>
          <p className="text-center text-gray-600 mt-2">拥有超过10年前端开发经验，专注于游戏开发和教育科技</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <ProfileSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      
      <footer className="bg-white border-t mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} LHL - 前端开发工程师. 版权所有.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;