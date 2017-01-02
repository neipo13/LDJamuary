# LDJamuary

Game for the [Lost Decade Jamuary Game Jam](https://itch.io/jam/jamuary) along with [#1GAM](https://twitter.com/search?q=%231GAM&lang=en). Theme is all things Lost Decade (games, podcast, etc) with the #1GAM theme being friendship.

## Ideas
* __IGS2017__ - try out some new platforming/polish stuff along with a simple in game level editor (MUST BE VERY SIMPLE) and if time the ability to share the games via some json or a link(query params)?
  * Single Levels - multiple levels will add complexity
  * Limit number of obstacles/items (1-9 for item placement?)
  * Single sprite/character
  * Probably the most ambitious idea
  * probably the simplest in terms of art but the most work in terms of game interaction/logic
* __Rampart Rush__ - Abandoned LD project, seemed like a fun idea. Would ahve to massively simplify the upgrade mechanics (maybe move to NT/Downwell style upgrade system) and focus on making gameplay fun
  * Seems very doable
  * Game was actually pretty fun, if very simple
  * Not a ton of enemy types, would mostly need a bunch of upgrade types
    * Upgrades
      * split shot(on contact split and shoot horizontally)
      * triple shot
      * piercing shot
      * DoT shot
      * screen wrapping shot
      * wall hp upgrade
      * wall does damage to those who hit it
      * fire rate up
      * dmg up
      * 
    * Enemies
  * Designed for mobile and would definitely work on mobile
* __Binding of Raga__ - Top down shooter similar to isaac/awl. Basically just a clone but would be fun to work on. Could use some of the old Unity isaac shooter level gen logic.
  * Also very ambitious
  * lot of pixeling (room tiles, enemies, main character w/ 4 directions)
  * have to figure out upgrade system
  * room transition logic
  * bosses & item pickups
* __ONSLAUGHT! Worlds__ - Top down shooter similar to above but way more simplified, just an arena shooter with high fantasy theming.
  * lot of pixeling (environments, enemies, main character w/ 4 directions)
  * simple attacking/weapon logic - powerups are just overlap collides that change your current bullet type/firing logic
      * probably better off having overlappable powers (piercing, dmg up, spread, etc)
  * needs lots of enemy types and enemies specific to different areas
    * bats - random movement
    * trolls - walk and shoot when player is in line
    * red trolls - walk fast


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
