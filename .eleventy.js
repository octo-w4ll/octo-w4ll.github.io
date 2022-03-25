const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy('css');

    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget('css');

    // eleventy-plugin-syntaxhighlight
    eleventyConfig.addPlugin(syntaxHighlight);
};