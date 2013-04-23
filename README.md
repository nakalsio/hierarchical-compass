hierarchical-compass
====================

An example of grunt build for hierarchical compass/sass structure

## Introduction
The Grunt build can support any kind of project structure for css and js in producing their minified artifacts. In this example, we have a number of parallel projects and their common css that lives adjacent to them. The css will be generated from sass files.

## Build Prerequisites
- [git][giturl]
- [node.js][nodejsurl]
- [grunt.js][gruntjsurl]
- [ruby][rubyurl]
- [sass][sassurl]
- [compass][compassurl]

After installing latest [git][giturl] and [node.js][nodejsurl], run following command to install `grunt.js`

```
> npm install -g grunt-cli
```

`sass` and `compass` installations depend on [ruby][rubyurl] installation. Once [ruby][rubyurl] is installed, you can run following commands for `sass` and `compass` installations.

```
> gem update --system
> gem install sass 
> gem install compass
```

## Installing dependencies
Before starting grunt build, make sure you run following command to install all dependencies for the grunt build. You might have to `sudo` if you don't have the security privileges.

```
> npm install
```

## UI Developer workflow
UI Developers can run following command to kick off daemon for monitoring scss file changes.

```
> grunt watch
```

## How to build release version of css files
You can generate unique css file names through content hashing. The following build command will create 8 character long hash prefix for the final css artifacts.

```
> grunt release
```

The artifacts will be generated in `dist` folder under each sub project.

[giturl]: http://git-scm.com/
[nodejsurl]: http://nodejs.org/
[gruntjsurl]: http://gruntjs.com/
[bowerjsurl]: http://twitter.github.com/bower/
[rubyurl]: http://www.ruby-lang.org/en/downloads/
[sassurl]: http://sass-lang.com/
[compassurl]: http://compass-style.org/install/
