import React from 'react';

const ProfileSection = () => {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">个人简介</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 flex justify-center items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 flex items-center justify-center text-gray-500">
                头像占位符
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 mb-4 leading-relaxed">
                你好！我是LHL，一名拥有超过10年前端开发经验的工程师。我在游戏开发、教育科技和多媒体应用方面有着丰富的经验，
                从早期的Flash/ActionScript开发到现代的React/Vue框架都有涉猎。我不仅擅长技术开发，还具备项目管理和团队协作能力。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-600">暂无邮箱信息</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-gray-600">133****3333</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-gray-600">深圳</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                  <span className="text-gray-600">前端开发工程师</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">教育背景</h3>
            <div className="pl-4 border-l-4 border-indigo-500">
              <p className="font-medium">2006.09 - 2010.06 桂林XX大学 XX专业</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;