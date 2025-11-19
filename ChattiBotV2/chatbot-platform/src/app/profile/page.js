const Profile = () => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8">
      {/* Page Heading */}
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">My Profile</h1>
        <p className="text-[#6b6b6b] text-base font-normal leading-normal">Manage your personal information and account settings.</p>
      </div>
      {/* Profile Details Section */}
      <div className="flex flex-col rounded-xl border border-white/10 bg-[#2f3035]">
        <div className="border-b border-white/10 p-6 @container">
          <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:items-center @[520px]:justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8LzRQ2G4WrAd3kMaNNtmp10VHHQUPV---VZbPZy7Dc6_ckcG7EtcIZIf8NVc_p9aBcVIWScG8mjTKrw1hwCdJf3YjdboaSXJGdDMmu8euU5xLao9gEEl1E8VZRZLP7vTvx-o_HtCkAlmMS-YHdRlLpG4fvS47CjPIomgGQYx7nhBs93cikFeLS1S67yBKkruvkPUslU_gJ6P1f5tzCMyMmkycodLiD_hQcy9SzPX861e3sRdsLs0sT0LfX2n8rRFrc_k2FT4T22TF")' }}></div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Profile Picture</p>
                <p className="text-[#6b6b6b] text-base font-normal leading-normal">Upload a new photo</p>
              </div>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-full max-w-[480px] border border-white/10 bg-[#2f3035] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-white/10 @[480px]:w-auto">
              <span className="truncate">Upload</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="flex flex-col flex-1">
              <p className="text-sm font-medium leading-normal text-white pb-2">Full Name</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#6b6b6b]/50 bg-background-dark p-3 text-base font-normal leading-normal text-white placeholder:text-[#6b6b6b] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/50" value="Alex Chen"/>
            </label>
            <label className="flex flex-col flex-1">
              <p className="text-sm font-medium leading-normal text-white pb-2">Email Address</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#6b6b6b]/50 bg-background-dark p-3 text-base font-normal leading-normal text-white/50 placeholder:text-[#6b6b6b] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/50" disabled value="alex.chen@chatbotcorp.com"/>
            </label>
            <label className="flex flex-col flex-1">
              <p className="text-sm font-medium leading-normal text-white pb-2">Company Name</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#6b6b6b]/50 bg-background-dark p-3 text-base font-normal leading-normal text-white placeholder:text-[#6b6b6b] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/50" value="ChatbotCorp Inc."/>
            </label>
            <label className="flex flex-col flex-1">
              <p className="text-sm font-medium leading-normal text-white pb-2">Role</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#6b6b6b]/50 bg-background-dark p-3 text-base font-normal leading-normal text-white placeholder:text-[#6b6b6b] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/50" value="Project Manager"/>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 p-6 sm:flex-row sm:justify-end">
          <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-transparent px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-white/10">
            <span className="truncate">Cancel</span>
          </button>
          <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-primary/90">
            <span className="truncate">Save Changes</span>
          </button>
        </div>
      </div>
      {/* Subscription Section */}
      <div className="flex flex-col rounded-xl border border-white/10 bg-[#2f3035]">
        <div className="p-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-white">Subscription</h2>
            <p className="text-[#6b6b6b]">Manage your current plan and view usage details.</p>
          </div>
        </div>
        <div className="border-t border-white/10 p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col gap-2 rounded-lg bg-background-dark p-4">
              <p className="text-sm text-[#6b6b6b]">Current Plan</p>
              <p className="text-lg font-bold text-white">Pro Plan</p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-background-dark p-4">
              <p className="text-sm text-[#6b6b6b]">Cost</p>
              <p className="text-lg font-bold text-white">$99 / month</p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-background-dark p-4">
              <p className="text-sm text-[#6b6b6b]">Status</p>
              <p className="text-lg font-bold text-green-400">Active</p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-background-dark p-4">
              <p className="text-sm text-[#6b6b6b]">Next Billing</p>
              <p className="text-lg font-bold text-white">July 15, 2024</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 p-6 sm:flex-row sm:justify-end">
          <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-transparent px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-white/10">
            <span className="truncate">Cancel Subscription</span>
          </button>
          <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-primary/90">
            <span className="truncate">Change Plan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
