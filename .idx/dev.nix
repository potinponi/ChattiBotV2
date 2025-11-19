{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
  ];

  # Sets environment variables in the workspace
  env = {};

  # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
  extensions = [
    # "vscodevim.vim"
  ];

  # You can also add VS Code settings that you want to be applied by default
  # Example
  # settings = {
  #   "files.autoSave": "afterDelay",
  #   "files.autoSaveDelay": 1000,
  # };

  # Runs when the workspace is created
  onCreate = {
    install-deps = "cd ChattiBotV2/chatbot-platform && npm install";
  };
}
