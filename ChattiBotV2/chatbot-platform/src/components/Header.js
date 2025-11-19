const Header = () => {
  return (
    <header className="flex h-[65px] items-center justify-between whitespace-nowrap border-b border-solid border-border-accent bg-surface px-6 py-3">
      <div className="flex items-center gap-4 text-white">
        <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Chatbot Designer</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-2">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Publish</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#6b6b6b]/50 text-white/85 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Save</span>
          </button>
          <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-[#6b6b6b]/50 text-white/85">
            <span className="material-symbols-outlined text-xl">undo</span>
          </button>
          <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-[#6b6b6b]/50 text-white/85">
            <span className="material-symbols-outlined text-xl">redo</span>
          </button>
        </div>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgw3ObE52tlq_QmjT0YKsbbkK5Fr-5eF88ldDgkAvrRkYGcGPvTBzRLCePj0nwrcD2JouzKqIeJpme1ZTFkvYKfrULfFQXBz8vhDCr9AxamWsjidORROI4ySrzTCmhekwxpSRwDqQuBSmiTBILHBawk5N16ZhEuvwEX3gn4xWonayXSSctscFtWx1MsXoVFZVxh52VsWYDNfwx2fbqrF0fub5PLDBrPg0Lsb5E4LVr-98_sPIN4QQ5CWQnITD5CHW2HKtntHcT8Nzl")' }}></div>
      </div>
    </header>
  );
};

export default Header;
