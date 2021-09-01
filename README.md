# tocker
Time clocking app 🕒

# Installation
```shell
git clone https://github.com/danyliu9/tocker.git
cd tocker
npm i
```
If the repo has already been cloned and dependencies have been installed, try
`rm -rf node_modules` and `npm i` to reinstall.

# Running the app
If using an Android emulator, run `emulator -list-avds` to list the emulators
and `emulator -avd [AVDNAME]` to run the emulator. Once that's started, in one
terminal tab, run `npm start` and in another, run `npm run android`. The app
should install and build.