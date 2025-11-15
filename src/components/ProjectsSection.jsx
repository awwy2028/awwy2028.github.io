import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'IPTV点播项目',
      description: '参与JZCM合作开发IPTV点播项目，负责协调团队对接及web接口开发，参与优化成都IPTV线上调试工作。对资源压缩、H5端资源开发、在线指读流程及webview交互有深入了解。',
      technologies: ['Web接口开发', '资源优化', 'H5', 'WebView'],
    },
    {
      id: 2,
      title: 'H5编辑器项目',
      description: '参与开发团队内部H5手机端及TV端编辑器项目，针对DOM操作有深入了解。迭代使用createjs、PIXI引擎作为舞台渲染，采用ES6主流开发模式进行升级迭代。',
      technologies: ['CreateJS', 'PIXI.js', 'ES6', 'DOM操作'],
    },
    {
      id: 3,
      title: 'P8早教机项目',
      description: '和HHT品牌联合开发P8早教机项目，使用createjs、PIXI.js开发大量游戏课件，并使用Node.js、Vue.js开发工作流小工具提升批量制作效率。',
      technologies: ['CreateJS', 'PIXI.js', 'Node.js', 'Vue.js'],
    },
    {
      id: 4,
      title: '地球仪点读版APP',
      description: '参与开发地球仪点读版APP，使用React+Coodrave混合开发。内部进行过激光雷达和奥比中光SDK+H5通信交互作为体感游戏体验版，使用Uniapp、微信公众号及小程序进行测试版开发。',
      technologies: ['React', '混合开发', 'Uniapp', '微信小程序'],
    },
    {
      id: 5,
      title: '点读系列产品',
      description: '协调品牌方、方案商及公司内部开发上线点读有声挂图、Mini逻辑板、点读笔等软硬件产品开发。对幼教产品生产流程及点读书行业制作有深入了解。',
      technologies: ['产品管理', '跨部门协调', '幼教产品', '软硬件集成'],
    },
  ];

  return (
    <section>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">项目经验</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">工作经历</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-500 pl-4 py-1">
                <h3 className="text-lg font-bold text-gray-800">2018.05 - 2022.09 深圳XX有限公司 - 组长/Web前端开发</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li className="text-gray-600">开发前端小游戏及编辑器交互功能</li>
                  <li className="text-gray-600">组织内部培训及产品技术分析，推进项目进度顺利落地</li>
                  <li className="text-gray-600">管理技术工程部，对接方案商及客户业务工程需求</li>
                  <li className="text-gray-600">内外部软件需求协调沟通及跟进产品生产调度</li>
                  <li className="text-gray-600">完成总经理其他任务安排，申报高新/发明等知识产权管理</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4 py-1">
                <h3 className="text-lg font-bold text-gray-800">2014.09 - 2018.05 深圳XXX有限公司 - 前端工程师</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li className="text-gray-600">开发Starling TV端小游戏及AS3电子书，H5游戏</li>
                  <li className="text-gray-600">参与开发H5内容课件编辑器工具</li>
                  <li className="text-gray-600">协调部门工作，管理技术部门及项目研发进度</li>
                  <li className="text-gray-600">负责对外沟通对接合作方案及研发需求</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4 py-1">
                <h3 className="text-lg font-bold text-gray-800">2012.07 - 2014.09 现代XXXX有限公司 - 前端工程师</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li className="text-gray-600">开发香港教材Flash以及HTML/JS教学课件和游戏</li>
                  <li className="text-gray-600">负责软件相关的需求文档编写、软件设计</li>
                  <li className="text-gray-600">制定规划学科项目进度及推进项目执行，完成上级指派任务</li>
                  <li className="text-gray-600">协调团队之间的沟通工作</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4 py-1">
                <h3 className="text-lg font-bold text-gray-800">2011.06 - 2012.05 深圳XXX开发有限公司 - 软件工程师</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li className="text-gray-600">负责Mstar主控人机界面C语言开发系统研发，应用集成</li>
                  <li className="text-gray-600">负责手机应用模块的详细设计、编码、单元集成测试等研发工作</li>
                  <li className="text-gray-600">软件在不同手机型号的移植工作</li>
                  <li className="text-gray-600">与项目相关人员配合共同完成手机应用软件的开发设计工作</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">自我评价</h2>
            <p className="text-gray-600 leading-relaxed">
              优秀的职业素质，了解组件化开发思想，同时也擅长对前端游戏及页面应用开发技术，具备一定的项目管理和产品管理思维。
              抗压能力强，责任心强，工作风格严谨、积极，注重细节，具有良好的团队合作精神。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;