with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "drinkup";
  buildInputs = [
    python
    ruby
    nodejs
    compass
    nodePackages.grunt-cli
  ];
}
