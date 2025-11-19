const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* PageHeading */}
      <header className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-3xl font-extrabold tracking-tight">Performance Analytics</h1>
          <p className="text-muted text-base">Detailed statistics for your chatbot performance.</p>
        </div>
        {/* Chips/Filters */}
        <div className="flex items-center gap-3">
          <button className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-surface pl-4 pr-3 text-sm font-medium text-white/90 hover:bg-surface/80 transition-colors duration-200">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            <span>Last 30 Days</span>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
          <button className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-surface pl-4 pr-3 text-sm font-medium text-white/90 hover:bg-surface/80 transition-colors duration-200">
            <span className="material-symbols-outlined text-base">forum</span>
            <span>All Chatbots</span>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
        </div>
      </header>
      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface border border-muted/20">
          <p className="text-muted text-sm font-medium">Total Conversations</p>
          <p className="text-white text-3xl font-bold tracking-tight">12,874</p>
          <p className="text-green-500 text-sm font-medium flex items-center gap-1"><span className="material-symbols-outlined text-base">arrow_upward</span>+5.4%</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface border border-muted/20">
          <p className="text-muted text-sm font-medium">Engagement Rate</p>
          <p className="text-white text-3xl font-bold tracking-tight">82%</p>
          <p className="text-red-500 text-sm font-medium flex items-center gap-1"><span className="material-symbols-outlined text-base">arrow_downward</span>-1.2%</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface border border-muted/20">
          <p className="text-muted text-sm font-medium">Resolution Rate</p>
          <p className="text-white text-3xl font-bold tracking-tight">91%</p>
          <p className="text-green-500 text-sm font-medium flex items-center gap-1"><span className="material-symbols-outlined text-base">arrow_upward</span>+2.1%</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface border border-muted/20">
          <p className="text-muted text-sm font-medium">Avg. Session Duration</p>
          <p className="text-white text-3xl font-bold tracking-tight">3m 45s</p>
          <p className="text-green-500 text-sm font-medium flex items-center gap-1"><span className="material-symbols-outlined text-base">arrow_upward</span>+0.5%</p>
        </div>
      </section>
      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col gap-4 rounded-xl border border-muted/20 bg-surface p-6">
          <h3 className="text-white text-lg font-semibold">Conversation Trends</h3>
          <div className="h-80">
            <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#f8773f" strokeLinecap="round" strokeWidth="3"></path>
              <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#paint0_linear_1131_5935_mod)"></path>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1131_5935_mod" x1="236" x2="236" y1="1" y2="149">
                  <stop stopColor="#f8773f" stopOpacity="0.3"></stop>
                  <stop offset="1" stopColor="#f8773f" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-muted/20 bg-surface p-6">
          <h3 className="text-white text-lg font-semibold">Top Intents</h3>
          <div className="flex flex-col gap-4 flex-grow justify-center">
            <div className="grid grid-cols-[120px_1fr_auto] items-center gap-3 text-sm">
              <p className="text-muted truncate">Pricing Info</p>
              <div className="w-full bg-muted/20 rounded-full h-2.5"><div className="bg-primary h-2.5 rounded-full" style={{ width: '70%' }}></div></div>
              <p className="text-white font-medium">2,431</p>
            </div>
            <div className="grid grid-cols-[120px_1fr_auto] items-center gap-3 text-sm">
              <p className="text-muted truncate">Book Demo</p>
              <div className="w-full bg-muted/20 rounded-full h-2.5"><div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div></div>
              <p className="text-white font-medium">1,987</p>
            </div>
            <div className="grid grid-cols-[120px_1fr_auto] items-center gap-3 text-sm">
              <p className="text-muted truncate">Feature Request</p>
              <div className="w-full bg-muted/20 rounded-full h-2.5"><div className="bg-primary h-2.5 rounded-full" style={{ width: '50%' }}></div></div>
              <p className="text-white font-medium">1,562</p>
            </div>
            <div className="grid grid-cols-[120px_1fr_auto] items-center gap-3 text-sm">
              <p className="text-muted truncate">Support</p>
              <div className="w-full bg-muted/20 rounded-full h-2.5"><div className="bg-primary h-2.5 rounded-full" style={{ width: '40%' }}></div></div>
              <p className="text-white font-medium">1,109</p>
            </div>
            <div className="grid grid-cols-[120px_1fr_auto] items-center gap-3 text-sm">
              <p className="text-muted truncate">Greetings</p>
              <div className="w-full bg-muted/20 rounded-full h-2.5"><div className="bg-primary h-2.5 rounded-full" style={{ width: '30%' }}></div></div>
              <p className="text-white font-medium">975</p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
        {/* Data Table */}
        <div className="lg:col-span-3 flex flex-col gap-4 rounded-xl border border-muted/20 bg-surface p-6">
          <h3 className="text-white text-lg font-semibold">Unresolved Questions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-muted/20 text-muted">
                  <th className="py-3 px-4 font-medium">User Query</th>
                  <th className="py-3 px-4 font-medium">Channel</th>
                  <th className="py-3 px-4 font-medium">Timestamp</th>
                  <th className="py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted/20 hover:bg-white/5">
                  <td className="py-3 px-4 text-white/90">"How do I integrate with Salesforce?"</td>
                  <td className="py-3 px-4 text-muted">Website</td>
                  <td className="py-3 px-4 text-muted">2 mins ago</td>
                  <td className="py-3 px-4"><button className="text-primary hover:underline font-medium">Create Intent</button></td>
                </tr>
                <tr className="border-b border-muted/20 hover:bg-white/5">
                  <td className="py-3 px-4 text-white/90">"Can I get a discount for a yearly plan?"</td>
                  <td className="py-3 px-4 text-muted">Slack</td>
                  <td className="py-3 px-4 text-muted">15 mins ago</td>
                  <td className="py-3 px-4"><button className="text-primary hover:underline font-medium">Create Intent</button></td>
                </tr>
                <tr className="border-b border-muted/20 hover:bg-white/5">
                  <td className="py-3 px-4 text-white/90">"What is your refund policy?"</td>
                  <td className="py-3 px-4 text-muted">MS Teams</td>
                  <td className="py-3 px-4 text-muted">1 hour ago</td>
                  <td className="py-3 px-4"><button className="text-primary hover:underline font-medium">Create Intent</button></td>
                </tr>
                <tr className="border-b border-muted/20 hover:bg-white/5">
                  <td className="py-3 px-4 text-white/90">"Is there an API available?"</td>
                  <td className="py-3 px-4 text-muted">Website</td>
                  <td className="py-3 px-4 text-muted">3 hours ago</td>
                  <td className="py-3 px-4"><button className="text-primary hover:underline font-medium">Create Intent</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Pie Charts */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="flex flex-col gap-4 rounded-xl border border-muted/20 bg-surface p-6">
            <h3 className="text-white text-lg font-semibold">User Satisfaction</h3>
            <div className="flex items-center justify-center gap-6 flex-grow">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4ade80" strokeWidth="3"></path>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#facc15" strokeDasharray="65, 35" strokeWidth="3"></path>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#ef4444" strokeDasharray="15, 85" strokeWidth="3"></path>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">85%</span>
                  <span className="text-xs text-muted">Positive</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span><span className="text-muted">Positive</span><span className="text-white ml-auto">85%</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-400"></span><span className="text-muted">Neutral</span><span className="text-white ml-auto">10%</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500"></span><span className="text-muted">Negative</span><span className="text-white ml-auto">5%</span></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-muted/20 bg-surface p-6">
            <h3 className="text-white text-lg font-semibold">Channel Breakdown</h3>
            <div className="flex items-center justify-center gap-6 flex-grow">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" fill="none" r="15.9155" stroke="#f8773f" strokeDasharray="60, 40" strokeWidth="3"></circle>
                  <circle cx="18" cy="18" fill="none" r="15.9155" stroke="#38bdf8" strokeDasharray="25, 75" strokeDashoffset="-60" strokeWidth="3"></circle>
                  <circle cx="18" cy="18" fill="none" r="15.9155" stroke="#a78bfa" strokeDasharray="15, 85" strokeDashoffset="-85" strokeWidth="3"></circle>
                </svg>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span><span className="text-muted">Website</span><span className="text-white ml-auto">60%</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-sky-400"></span><span className="text-muted">Slack</span><span className="text-white ml-auto">25%</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-violet-400"></span><span className="text-muted">MS Teams</span><span className="text-white ml-auto">15%</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
