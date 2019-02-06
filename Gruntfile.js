"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    sprite: {
      all: {
        src: "src/*.png",
        retinaSrcFilter: ["src/*@2x.png"],
        dest: "dist/spritesmith-spritesheet.png",
        retinaDest: "dist/spritesmith-spritesheet@2x.png",
        destCss: "dist/_spritesmith-stylesheet.scss",
        imgPath: "../img/spritesmith-spritesheet.png",
        padding: 4,
        cssVarMap: function(sprite) {
          sprite.name = "sprite-" + sprite.name;
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-spritesmith");
  grunt.registerTask("default", ["sprite"]);
};
