const ChatbotDesigner = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Center Canvas */}
      <main className="flex flex-1 flex-col bg-background-dark">
        {/* Breadcrumbs & Canvas Controls */}
        <div className="flex items-center justify-between border-b border-border-accent px-6 py-3">
          <div className="flex flex-wrap gap-2">
            <a className="text-white/60 text-sm font-medium leading-normal" href="#">Dashboard</a>
            <span className="text-white/60 text-sm font-medium leading-normal">/</span>
            <a className="text-white/60 text-sm font-medium leading-normal" href="#">My Chatbots</a>
            <span className="text-white/60 text-sm font-medium leading-normal">/</span>
            <span className="text-white/85 text-sm font-medium leading-normal">E-commerce Bot</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-primary"><span className="material-symbols-outlined">desktop_windows</span></button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 hover:bg-surface"><span className="material-symbols-outlined">smartphone</span></button>
            <div className="mx-2 h-6 w-px bg-border-accent"></div>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 hover:bg-surface"><span className="material-symbols-outlined">zoom_out</span></button>
            <span className="text-sm text-white/60">100%</span>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 hover:bg-surface"><span className="material-symbols-outlined">zoom_in</span></button>
          </div>
        </div>
        {/* Interactive Preview */}
        <div className="flex flex-1 items-center justify-center p-8 overflow-auto">
          <div className="w-[360px] h-[640px] flex-shrink-0 rounded-xl bg-white shadow-2xl flex flex-col overflow-hidden ring-2 ring-border-accent">
            <div className="bg-[#f8773f] text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">storefront</span>
              </div>
              <div>
                <h3 className="font-bold">E-commerce Bot</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-100 p-4 space-y-4 overflow-y-auto">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#f8773f] flex-shrink-0 mt-1"></div>
                <div className="bg-gray-200 text-black p-3 rounded-lg rounded-tl-none max-w-xs">
                  <p className="text-sm">Welcome! How can I help you find the perfect product today?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white p-3 rounded-lg rounded-br-none max-w-xs">
                  <p className="text-sm">I'm looking for running shoes.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#f8773f] flex-shrink-0 mt-1"></div>
                <div className="bg-gray-200 text-black p-3 rounded-lg rounded-tl-none max-w-xs outline outline-2 outline-primary">
                  <p className="text-sm">Great! We have a wide selection. Are you looking for men's or women's shoes?</p>
                </div>
              </div>
              <div className="flex gap-2 justify-start ml-10">
                <button className="text-sm text-blue-600 font-semibold border border-blue-600 rounded-full px-4 py-1.5 bg-white hover:bg-blue-50">Men's</button>
                <button className="text-sm text-blue-600 font-semibold border border-blue-600 rounded-full px-4 py-1.5 bg-white hover:bg-blue-50">Women's</button>
              </div>
            </div>
            <div className="bg-white p-2 border-t border-gray-200">
              <div className="flex items-center bg-gray-100 rounded-full">
                <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-800 placeholder-gray-500 px-4 py-2" placeholder="Type a message..." type="text"/>
                <button className="p-2 text-gray-500 hover:text-[#f8773f]"><span className="material-symbols-outlined">send</span></button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Right Sidebar */}
      <aside className="w-80 flex-shrink-0 border-l border-border-accent bg-surface p-4 flex flex-col">
        <div className="flex border-b border-border-accent">
          <button className="flex-1 py-2 text-sm font-semibold border-b-2 border-primary text-white">Style</button>
          <button className="flex-1 py-2 text-sm text-white/60 hover:text-white">Content</button>
          <button className="flex-1 py-2 text-sm text-white/60 hover:text-white">Actions</button>
        </div>
        <div className="flex-1 py-4 space-y-6 overflow-y-auto">
          <div>
            <label className="text-xs font-medium text-white/60">Background</label>
            <div className="flex items-center gap-2 mt-2">
              <div className="relative w-8 h-8 rounded-md bg-gray-200 border-2 border-white/20"></div>
              <input className="form-input w-full rounded-md border-border-accent bg-surface text-sm text-white/80" value="#E5E7EB"/>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-white/60">Text Color</label>
            <div className="flex items-center gap-2 mt-2">
              <div className="relative w-8 h-8 rounded-md bg-black border-2 border-white/20"></div>
              <input className="form-input w-full rounded-md border-border-accent bg-surface text-sm text-white/80" value="#111827"/>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-white/60" htmlFor="font-family">Font Family</label>
            <select className="mt-2 w-full form-select rounded-md border-border-accent bg-surface text-sm text-white/80" id="font-family">
              <option>Manrope</option>
              <option>Inter</option>
              <option>Roboto</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-white/60">Font Size</label>
              <input className="form-input w-full rounded-md border-border-accent bg-surface text-sm text-white/80 mt-2" type="text" value="14px"/>
            </div>
            <div>
              <label className="text-xs font-medium text-white/60">Font Weight</label>
              <input className="form-input w-full rounded-md border-border-accent bg-surface text-sm text-white/80 mt-2" type="text" value="Regular"/>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-white/60">Border Radius</label>
            <div className="flex items-center gap-2 mt-2">
              <input className="w-full h-2 bg-border-accent rounded-lg appearance-none cursor-pointer accent-primary" max="24" min="0" type="range" value="8"/>
              <input className="form-input w-20 text-center rounded-md border-border-accent bg-surface text-sm text-white/80" type="text" value="8px"/>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-white/60 block mb-2">Features</label>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/80">Show Timestamp</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" value=""/>
                  <div className="w-11 h-6 bg-border-accent rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/80">Show Avatar</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" value=""/>
                  <div className="w-11 h-6 bg-border-accent rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ChatbotDesigner;
