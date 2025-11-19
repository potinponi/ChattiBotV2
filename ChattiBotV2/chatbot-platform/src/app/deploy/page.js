const Deploy = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* PageHeading */}
      <div className="flex flex-wrap justify-between gap-3 mb-8">
        <div className="flex flex-col gap-2">
          <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Deploy Your Chatbot</p>
          <p className="text-subtle text-base font-normal leading-normal">Follow the steps below to add the chatbot to your website.</p>
        </div>
      </div>
      {/* Step 1: Copy Code */}
      <div className="mb-8">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-3">Step 1: Embed on Your Website</h2>
        <p className="text-white text-base font-normal leading-normal mb-4">
          Copy and paste this script tag just before the closing `&lt;/body&gt;` tag on every page where you want the chatbot to appear.
        </p>
        {/* Card with Code Snippet */}
        <div className="bg-surface rounded-lg p-1">
          <div className="bg-surface rounded-lg overflow-hidden">
            <div className="p-4 flex justify-between items-center border-b border-subtle/20">
              <p className="text-white text-sm font-medium">// Your unique Javascript code snippet</p>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md h-9 px-3 bg-primary text-[#1e1f22] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-base">content_copy</span>
                <span className="truncate">Copy Code</span>
              </button>
            </div>
            <pre className="p-4 text-sm text-white/90 overflow-x-auto"><code className="language-html">&lt;script 
    src="https://cdn.botbuilders.com/widget.js" 
    data-chatbot-id="a1b2c3d4-e5f6-7890-1234-567890abcdef" 
    async&gt;
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>
      {/* Step 2: Verify Installation */}
      <div className="mb-10">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-3">Step 2: Verify Installation</h2>
        <p className="text-white text-base font-normal leading-normal mb-4">
          Enter your website URL where you've placed the code snippet to confirm it's working correctly.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-surface rounded-lg border border-subtle/20">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-subtle">link</span>
            <input className="w-full h-12 pl-10 pr-4 bg-[#1e1f22] text-white border border-subtle rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow" placeholder="https://yourwebsite.com" type="url"/>
          </div>
          <button className="w-full sm:w-auto flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-[#1e1f22] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Verify Installation</span>
          </button>
        </div>
      </div>
      {/* Alternative Deployment Methods */}
      <div>
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Alternative Deployment Methods</h2>
        <div className="space-y-3">
          {/* Accordion Item 1 */}
          <details className="group bg-surface rounded-lg border border-subtle/20 overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
              <span className="text-white font-medium">Google Tag Manager</span>
              <span className="material-symbols-outlined text-white/70 transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <div className="p-4 pt-0 text-subtle">
              <p>1. In Google Tag Manager, create a new "Custom HTML" tag.</p>
              <p>2. Paste the chatbot script snippet into the HTML field.</p>
              <p>3. Set the trigger to "All Pages" or specific pages where you want the chatbot to appear.</p>
              <p>4. Save and publish your container.</p>
            </div>
          </details>
          {/* Accordion Item 2 */}
          <details className="group bg-surface rounded-lg border border-subtle/20 overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
              <span className="text-white font-medium">WordPress</span>
              <span className="material-symbols-outlined text-white/70 transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <div className="p-4 pt-0 text-subtle">
              <p>1. Install a plugin that allows you to add scripts to your header or footer, like "Insert Headers and Footers".</p>
              <p>2. Navigate to the plugin settings.</p>
              <p>3. Paste the chatbot script snippet into the "Scripts in Footer" section.</p>
              <p>4. Save the changes.</p>
            </div>
          </details>
          {/* Accordion Item 3 */}
          <details className="group bg-surface rounded-lg border border-subtle/20 overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
              <span className="text-white font-medium">Shopify</span>
              <span className="material-symbols-outlined text-white/70 transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <div className="p-4 pt-0 text-subtle">
              <p>1. From your Shopify admin, go to "Online Store" &gt; "Themes".</p>
              <p>2. Find the theme you want to edit, and then click "Actions" &gt; "Edit code".</p>
              <p>3. In the "Layout" directory, click `theme.liquid`.</p>
              <p>4. Paste the chatbot script snippet right before the closing `&lt;/body&gt;` tag.</p>
              <p>5. Click "Save".</p>
            </div>
          </details>
        </div>
      </div>
      {/* Help/Support Link */}
      <div className="mt-12 text-center">
        <p className="text-subtle text-sm">
          Stuck? Check out our detailed <a className="text-primary hover:underline" href="#">documentation</a> or <a className="text-primary hover:underline" href="#">contact support</a>.
        </p>
      </div>
    </div>
  );
};

export default Deploy;
