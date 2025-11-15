import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript (ES6-ES13)', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Vue.js', level: 85 },
    { name: 'Pixi.js/CreateJS', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Webpack/Vite', level: 85 },
    { name: '小程序开发', level: 80 },
  ];

  return (
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">技能专长</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">其他技能</h3>
            <div className="flex flex-wrap gap-2">
              {['物理引擎Matter.js', '粒子特效Proton.js', '组件化开发', '项目管理', '混合开发', '性能优化'].map((item, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">框架和库</h3>
            <div className="flex flex-wrap gap-2">
              {['Ant Design', 'Element UI', 'Vant', 'Uniapp', 'React Native'].map((item, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;