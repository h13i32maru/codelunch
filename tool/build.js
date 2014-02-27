#!/usr/bin/env node

// ---- type annotation ----
/**
 * @typedef {{
 *   vol: number,
 *   track: string,
 *   date: string,
 *   title: string,
 *   text: string,
 *   words: {word: string, url: string}[]
 * }} Content
 */
// ---- end ----

var Builder = {
  build: function(templateHTMLFilePath, contentJSONFilePath, callback) {
    var fs = require('fs');
    var templateHTML = fs.readFileSync(templateHTMLFilePath, 'utf-8');

    var contentJSON = fs.readFileSync(contentJSONFilePath);
    var content = JSON.parse(contentJSON);

    this._inject(content, templateHTML, callback);
  },

  /**
   *
   * @param {Content} content
   * @param templateHTML
   * @param callback
   * @private
   */
  _inject: function(content, templateHTML, callback){
    var jsdom = require('jsdom');
    jsdom.env(
      templateHTML,
      [],
      function (errors, window) {
        if (errors) {
          console.error(errors);
          return;
        }

        var vol = window.document.querySelector('#cl-vol-number');
        vol.textContent = content.vol;

        var iframe = window.document.querySelector('#cl-sound-cloud iframe');
        iframe.src = iframe.src.replace(/[/]tracks[/][0-9]+/, '/tracks/' + content.track);

        var date = window.document.querySelector('#cl-date');
        date.textContent = content.date;

        var title = window.document.querySelector('#cl-title');
        title.textContent = content.title;

        var text = window.document.querySelector('#cl-text');
        text.textContent = content.text;

        var words = window.document.querySelector('#cl-related-words');
        var rowTemplate = words.children[0].cloneNode(true);
        words.innerHTML = '';

        for (var i = 0; i < content.words.length; i++) {
          var row = rowTemplate.cloneNode(true);
          var a = row.querySelector('a');

          if (content.words[i].url) {
            a.href = content.words[i].url || "";
          } else {
            a.removeAttribute('href');
          }

          a.textContent = content.words[i].word;
          words.innerHTML += '\n';
          words.appendChild(row);
        }

        callback && callback(window.document.innerHTML);
      }
    );
  }
};

function printHelp() {
  var name = path.basename(process.argv[1]);
  console.log('usage: ' + name + ' 1/content.json');
}

// parse command line arguments
var argv = process.argv;
var contentJSONFilePath;
for (var i = 2; i < argv.length; i++) {
  switch (argv[i]) {
  case '--help':
    // fall through
  case '-h':
    printHelp();
    process.exit(0);
    break;
  default:
    contentJSONFilePath = argv[i];
    break;
  }
}

var path = require('path');
var selfPath = process.argv[1];
var selfDir = path.dirname(selfPath);
var templateHTMLFilePath = selfDir + '/template.html';
var outputHTMLFilePath = path.dirname(contentJSONFilePath) + '/index.html';

Builder.build(templateHTMLFilePath, contentJSONFilePath, function(html){
  var fs = require('fs');
  fs.writeFileSync(outputHTMLFilePath, html);
  console.log('done');
});
