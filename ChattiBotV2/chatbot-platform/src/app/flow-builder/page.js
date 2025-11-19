const FlowBuilder = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Left Sidebar: Blocks */}
      <aside className="w-72 flex flex-col border-r border-white/10 bg-surface-dark/50 p-4 shrink-0">
        <h3 className="text-text-light text-lg font-bold leading-tight tracking-[-0.015em] px-0 pb-2">Blocks</h3>
        <div className="py-3">
          <label className="flex flex-col min-w-40 h-11 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-muted-dark flex border-none bg-background-dark items-center justify-center pl-3 rounded-l-lg border-r-0"><span className="material-symbols-outlined sm">search</span></div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-background-dark focus:border-none h-full placeholder:text-muted-dark px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search blocks..."/>
            </div>
          </label>
        </div>
        <div className="flex flex-col gap-4 mt-2 overflow-y-auto">
          {/* Category: Messages */}
          <div>
            <h4 className="text-muted-dark text-xs font-bold uppercase tracking-wider px-1 py-2">Messages</h4>
            <div className="flex flex-col gap-2 mt-1">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-surface-dark cursor-grab active:cursor-grabbing">
                <span className="material-symbols-outlined text-primary sm">chat_bubble</span>
                <p className="text-text-light text-sm font-medium">Send Message</p>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-surface-dark cursor-grab active:cursor-grabbing">
                <span className="material-symbols-outlined text-primary sm">image</span>
                <p className="text-text-light text-sm font-medium">Send Image</p>
              </div>
            </div>
          </div>
          {/* Category: User Input */}
          <div>
            <h4 className="text-muted-dark text-xs font-bold uppercase tracking-wider px-1 py-2">User Input</h4>
            <div className="flex flex-col gap-2 mt-1">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-surface-dark cursor-grab active:cursor-grabbing">
                <span className="material-symbols-outlined text-primary sm">help</span>
                <p className="text-text-light text-sm font-medium">Ask a Question</p>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-surface-dark cursor-grab active:cursor-grabbing">
                <span className="material-symbols-outlined text-primary sm">rule</span>
                <p className="text-text-light text-sm font-medium">Wait for Input</p>
              </div>
            </div>
          </div>
          {/* Category: Logic */}
          <div>
            <h4 className="text-muted-dark text-xs font-bold uppercase tracking-wider px-1 py-2">Logic</h4>
            <div className="flex flex-col gap-2 mt-1">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-surface-dark cursor-grab active:cursor-grabbing">
                <span className="material-symbols-outlined text-primary sm">call_split</span>
                <p className="text-text-light text-sm font-medium">If/Else Condition</p>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-surface-dark cursor-grab active:cursor-grabbing">
                <span className="material-symbols-outlined text-primary sm">functions</span>
                <p className="text-text-light text-sm font-medium">Set Variable</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* Center Canvas */}
      <div className="flex-1 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#6b6b6b_1px,transparent_1px)] [background-size:24px_24px]"></div>
        {/* Nodes will be positioned absolutely within this container */}
        <div className="absolute" style={{ top: '100px', left: '150px' }}>
          <div className="flex flex-col w-64 rounded-lg bg-surface-dark shadow-lg border border-white/10">
            <div className="p-3 border-b border-white/10 flex items-center gap-2">
              <span className="material-symbols-outlined xs text-primary">play_circle</span>
              <h5 className="font-bold text-sm">Start</h5>
            </div>
            <div className="p-3 text-sm text-muted-dark">Conversation starts here.</div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 size-4 rounded-full bg-surface-dark border-2 border-primary ring-2 ring-surface-dark"></div>
          </div>
        </div>
        <div className="absolute" style={{ top: '220px', left: '450px' }}>
          <div className="flex flex-col w-64 rounded-lg bg-surface-dark shadow-lg border-2 border-primary">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 size-4 rounded-full bg-surface-dark border-2 border-primary ring-2 ring-surface-dark"></div>
            <div className="p-3 border-b border-white/10 flex items-center gap-2">
              <span className="material-symbols-outlined xs text-primary">chat_bubble</span>
              <h5 className="font-bold text-sm">Welcome Message</h5>
            </div>
            <div className="p-3 text-sm text-text-light">"Hi! Welcome to our website. How can I help you today?"</div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 size-4 rounded-full bg-surface-dark border-2 border-primary ring-2 ring-surface-dark"></div>
          </div>
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path d="M 404 124 C 427 124, 427 244, 450 244" fill="none" stroke="#f87941" strokeWidth="2"></path>
        </svg>
        {/* MiniMap */}
        <div className="absolute bottom-4 right-4 w-48 h-32 bg-surface-dark/80 rounded-lg border border-white/10 backdrop-blur-sm p-1">
          <div className="w-full h-full border border-dashed border-muted-dark/50 relative">
            <div className="absolute bg-primary/30" style={{ width: '20px', height: '10px', top: '10px', left: '15px' }}></div>
            <div className="absolute bg-primary/30" style={{ width: '20px', height: '12px', top: '25px', left: '45px' }}></div>
          </div>
        </div>
      </div>
      {/* Right Sidebar: Settings */}
      <aside className="w-80 flex flex-col border-l border-white/10 bg-surface-dark/50 p-4 shrink-0">
        <h3 className="text-text-light text-lg font-bold leading-tight tracking-[-0.015em] px-0 pb-2">Settings</h3>
        <div className="flex-1 overflow-y-auto mt-4 space-y-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-muted-dark" htmlFor="node-title">Node Title</label>
            <input className="form-input w-full bg-background-dark border border-white/10 rounded-lg text-text-light px-3 py-2 text-sm focus:ring-primary focus:border-primary" id="node-title" type="text" value="Welcome Message"/>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-muted-dark" htmlFor="message-text">Message Text</label>
            <textarea className="form-textarea w-full bg-background-dark border border-white/10 rounded-lg text-text-light px-3 py-2 text-sm focus:ring-primary focus:border-primary" id="message-text" rows="4">"Hi! Welcome to our website. How can I help you today?"</textarea>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-dark mb-2">Quick Replies</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input className="form-input flex-1 bg-background-dark border border-white/10 rounded-lg text-text-light px-3 py-2 text-sm focus:ring-primary focus:border-primary" type="text" value="Sales Inquiry"/>
                <button className="p-2 text-muted-dark hover:text-text-light rounded-lg hover:bg-white/10 transition-colors"><span className="material-symbols-outlined sm">delete</span></button>
              </div>
              <div className="flex items-center gap-2">
                <input className="form-input flex-1 bg-background-dark border border-white/10 rounded-lg text-text-light px-3 py-2 text-sm focus:ring-primary focus:border-primary" type="text" value="Support Question"/>
                <button className="p-2 text-muted-dark hover:text-text-light rounded-lg hover:bg-white/10 transition-colors"><span className="material-symbols-outlined sm">delete</span></button>
              </div>
              <button className="w-full text-sm text-primary font-semibold py-2 px-3 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined sm">add_circle</span> Add Quick Reply
              </button>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 mt-6">
            <h4 className="text-sm font-medium text-muted-dark mb-2">AI Behavior</h4>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-muted-dark" htmlFor="ai-goal">Primary Goal</label>
              <select className="form-select w-full bg-background-dark border border-white/10 rounded-lg text-text-light px-3 py-2 text-sm focus:ring-primary focus:border-primary" id="ai-goal">
                <option>Collect Lead Information</option>
                <option>Answer Support Question</option>
                <option>Route to Agent</option>
              </select>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default FlowBuilder;
