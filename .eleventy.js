const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const {DateTime} = require("luxon");
const pageAssetsPlugin = require('eleventy-plugin-page-assets');

module.exports = function (eleventyConfig) {
    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy('css');

    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget('css');

    eleventyConfig.addNunjucksFilter("convertRecipeDate", function(value) {
        return DateTime.fromJSDate(value, {zone: 'utc'}).setLocale('fr').toLocaleString();
    });

    // Allow putting articles assets in article directories
    eleventyConfig.addPlugin(pageAssetsPlugin, {
        mode: "parse",
        postsMatching: "cookbook/*/*.md",
    });
    

    // eleventy-plugin-syntaxhighlight
    eleventyConfig.addPlugin(syntaxHighlight);
};