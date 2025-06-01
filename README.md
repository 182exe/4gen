<div align="center">

<h1>4gen</h1>

a secure & lightweight windows hta-based password generator with cool features

</div>

## features

- **length**: however long you want
- **charsets**: lowercase, uppercase, digits, ascii specials, and every other unicode symbol
- **custom characters**: specify a custom character set
- **character exclusion**: exclude specific characters from output
- **secure random generation**: make your mouse movements into true randomness
- **configs**: save multiple profiles for generation with persistent storage
- **saving**: one-click copy to clipboard or save passwords directly to text files
- **easy install**: can be used portably or installed as a program
- **offline**: air-gapped as hell
- **lightweight**: single hta file, no dependencies beyond windows built-ins, less than 300kb total

## install

### method 1: installer

1. download the latest release zip file
2. extract to a temporary folder
3. run `installer.hta`
4. follow instructions

### method 2: portable

1. download the latest release zip file
2. extract to your desired folder
3. run `4gen.hta` directly
4. put it anywhere you want (must have `unicode_chars.txt` in the same directory if using portably)

## usage

1. select options
2. click generate
3. if you enabled secure randomness, wiggle your mouse in the popup box
4. get your password at the bottom

- configs:
  - `new`: create a new config with your current settings
  - `del`: delete the current config (will not edit your settings)
  - `save`: update the currently selected config to your current settings
  - configs are persistent and stored locally

- security:
  - mouse movement entropy collection
  - cryptographically secure random number generation
  - no data transmission or network activity
  - local-only processing and storage

- options:
  - length: set how long the output should be
  - exclude chars: specific chars to exclude from selected charsets
  - charsets:
    - lowercase/uppercase/digits: (a-z, A-Z, and 0-9)
    - special: generated from remaining ascii characters not in lowercase, uppercase, and 0-9.
    - unicode symbols

## system requirements

- windows with internet explorer 8+ & mshtml installed (should be on your system by default)

## contributing

1. fork
2. branch
3. change
4. test
5. submit pull

## license

this project is licensed under the mit license with the [commons clause](https://commonsclause.com/).