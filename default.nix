with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "drinkup";
  buildInputs = [
    python
    ruby
    nodejs
    compass
    flow
    nodePackages.grunt-cli
  ];
}
