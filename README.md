# LDJamuary

Game for the [Lost Decade Jamuary Game Jam](https://itch.io/jam/jamuary) along with [#1GAM](https://twitter.com/search?q=%231GAM&lang=en). Theme is all things Lost Decade (games, podcast, etc) with the #1GAM theme being friendship.

## Ideas
* __IGS2017__ - try out some new platforming/polish stuff along with a simple in game level editor (MUST BE VERY SIMPLE) and if time the ability to share the games via some json or a link(query params)?
* __Rampart Rush__ - Abandoned LD project, seemed like a fun idea. Would ahve to massively simplify the upgrade mechanics (maybe move to NT/Downwell style upgrade system) and focus on making gameplay fun
* __Binding of Raga__ - Top down shooter similar to isaac/awl. Basically just a clone but would be fun to work on. Could use some of the old Unity isaac shooter level gen logic.
* __ONSLAUGHT!__ - Top down shooter similar to above but way more simplified, just an arena shooter with high fantasy theming.

## Usage

You need [Node.js and npm](https://nodejs.org/). You should also have git installed, but it's not mandatory.

Clone the repository (or download the ZIP file)

`git clone https://github.com/belohlavek/phaser-es6-boilerplate.git`

Install dependencies

`npm install`

Run a development build...

`npm start`

...or a production build.

`npm run production`

Development builds will copy `phaser.min.js` together with `phaser.map` and `phaser.js`
Your ES6 code will be transpiled into ES5 and concatenated into a single file.
A sourcemap for your code will also be included (by default `game.map.js`).

Production builds will only copy `phaser.min.js`. Your ES6 code will be transpiled and
minified using UglifyJS.

Any modification to the files inside the `./src` and `./static` folder will trigger a full page reload.

If you modify the contents of other files, please manually restart the server.t any bugs or add requests on [Github Issues](https://github.com/belohlavek/phaser-es6-boilerplate/issues).
