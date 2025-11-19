const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* PageHeading */}
      <div className="flex flex-wrap justify-between gap-4 items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-800 dark:text-white text-3xl font-bold tracking-tight">Welcome back, Alex!</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base font-normal">Here's a quick overview of your chatbot performance.</p>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark/50">
          <p className="text-gray-600 dark:text-gray-300 text-base font-medium">Total Bots</p>
          <p className="text-gray-800 dark:text-white text-3xl font-bold">12</p>
          <p className="text-green-500 text-sm font-medium">+2 this month</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark/50">
          <p className="text-gray-600 dark:text-gray-300 text-base font-medium">Total Conversations</p>
          <p className="text-gray-800 dark:text-white text-3xl font-bold">1,482</p>
          <p className="text-green-500 text-sm font-medium">+5.2%</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark/50">
          <p className="text-gray-600 dark:text-gray-300 text-base font-medium">Engagement Rate</p>
          <p className="text-gray-800 dark:text-white text-3xl font-bold">68%</p>
          <p className="text-red-500 text-sm font-medium">-1.5%</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark/50">
          <p className="text-gray-600 dark:text-gray-300 text-base font-medium">Resolution Rate</p>
          <p className="text-gray-800 dark:text-white text-3xl font-bold">89%</p>
          <p className="text-green-500 text-sm font-medium">+2.1%</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Actions */}
          <div>
            <h2 className="text-gray-800 dark:text-white text-xl font-bold tracking-tight mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark/50 rounded-xl hover:border-primary dark:hover:border-primary transition-colors" href="#">
                <div className="flex items-center justify-center size-12 bg-primary/20 rounded-lg text-primary"><span className="material-symbols-outlined">add_circle</span></div>
                <p className="text-sm font-semibold text-center text-gray-700 dark:text-gray-200">New Bot</p>
              </a>
              <a className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark/50 rounded-xl hover:border-primary dark:hover:border-primary transition-colors" href="#">
                <div className="flex items-center justify-center size-12 bg-primary/20 rounded-lg text-primary"><span className="material-symbols-outlined">monitoring</span></div>
                <p className="text-sm font-semibold text-center text-gray-700 dark:text-gray-200">Analytics</p>
              </a>
              <a className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark/50 rounded-xl hover:border-primary dark:hover:border-primary transition-colors" href="#">
                <div className="flex items-center justify-center size-12 bg-primary/20 rounded-lg text-primary"><span className="material-symbols-outlined">hub</span></div>
                <p className="text-sm font-semibold text-center text-gray-700 dark:text-gray-200">Integrations</p>
              </a>
              <a className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark/50 rounded-xl hover:border-primary dark:hover:border-primary transition-colors" href="#">
                <div className="flex items-center justify-center size-12 bg-primary/20 rounded-lg text-primary"><span className="material-symbols-outlined">help_center</span></div>
                <p className="text-sm font-semibold text-center text-gray-700 dark:text-gray-200">Help Docs</p>
              </a>
            </div>
          </div>
          {/* Recent Activity */}
          <div>
            <h2 className="text-gray-800 dark:text-white text-xl font-bold tracking-tight mb-4">Recent Activity</h2>
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark/50 rounded-xl overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 dark:bg-surface-dark/50">
                  <tr>
                    <th className="px-6 py-3 font-semibold text-gray-600 dark:text-gray-300" scope="col">Bot Name</th>
                    <th className="px-6 py-3 font-semibold text-gray-600 dark:text-gray-300" scope="col">Status</th>
                    <th className="px-6 py-3 font-semibold text-gray-600 dark:text-gray-300" scope="col">Last Edited</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200 dark:border-border-dark/50">
                    <td className="px-6 py-4 font-medium text-gray-800 dark:text-white">Customer Support Bot</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Active</span></td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">2 hours ago</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-border-dark/50">
                    <td className="px-6 py-4 font-medium text-gray-800 dark:text-white">Sales Lead Gen</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Active</span></td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">1 day ago</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-border-dark/50">
                    <td className="px-6 py-4 font-medium text-gray-800 dark:text-white">Internal FAQ Bot</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Draft</span></td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">3 days ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Onboarding Checklist */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark/50 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Getting Started</h3>
              <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-6 bg-primary rounded-full text-white">
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Create your first bot</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-6 bg-primary rounded-full text-white">
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Customize appearance</p>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <div className="flex items-center justify-center size-6 border-2 border-gray-400 rounded-full"></div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Deploy to your website</p>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <div className="flex items-center justify-center size-6 border-2 border-gray-400 rounded-full"></div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Invite a team member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
