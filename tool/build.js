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
 * }} Volume
 */
// ---- end ----

var VolumeBuilder = {
  _fs: require('fs'),
  _jsdom: require('jsdom'),

  _volumesDirPath: null,
  _volumeFilePaths: null,
  _templateHTML: null,
  _callback: null,

  build: function(templateHTMLFilePath, volumesDirPath, callback) {
    this._volumesDirPath = volumesDirPath;
    this._volumeFilePaths = fs.readdirSync(volumesDirPath);
    this._templateHTML = this._fs.readFileSync(templateHTMLFilePath, 'utf-8');
    this._callback = callback;

    this._buildEachVolume();
  },

  _buildEachVolume: function() {
    if (this._volumeFilePaths.length === 0) {
      return;
    }

    var volumeFilePath = this._volumeFilePaths.shift();
    var volumeJSON = this._fs.readFileSync(this._volumesDirPath + '/' + volumeFilePath);
    var volume = JSON.parse(volumeJSON);

    this._jsdom.env(this._templateHTML, [], function(errors, window){
      if (errors) {
        console.errors(errors);
        return;
      }

      var html = this._injectVolumeToHTML(volume, window);

      this._callback(volume, html);

      this._buildEachVolume();

    }.bind(this));
  },

  /**
   *
   * @param {Volume} volume
   * @param window
   * @returns {string}
   * @private
   */
  _injectVolumeToHTML: function(volume, window) {
    var vol = window.document.querySelector('#cl-vol-number');
    vol.textContent = volume.vol;

    var iframe = window.document.querySelector('#cl-sound-cloud iframe');
    iframe.src = iframe.src.replace(/[/]tracks[/][0-9]+/, '/tracks/' + volume.track);

    var date = window.document.querySelector('#cl-date');
    date.textContent = volume.date;

    var title = window.document.querySelector('#cl-title');
    title.textContent = volume.title;

    var text = window.document.querySelector('#cl-text');
    // @hogeな文字列をtwitterへのリンクに置換する.
    text.innerHTML = volume.text.replace(/@([0-9a-zA-Z_]+)/g, '<a href="https://twitter.com/$1" target="_blank">@$1</a>');

    var words = window.document.querySelector('#cl-related-words');
    var rowTemplate = words.children[0].cloneNode(true);
    words.innerHTML = '';

    for (var i = 0; i < volume.words.length; i++) {
      var row = rowTemplate.cloneNode(true);
      var a = row.querySelector('a');

      if (volume.words[i].url) {
        a.href = volume.words[i].url || "";
      } else {
        a.removeAttribute('href');
      }

      a.textContent = volume.words[i].word;
      words.innerHTML += '\n';
      words.appendChild(row);
    }

    var html = window.document.innerHTML;
    window.close();

    return html;
  }
};

function printHelp() {
  var name = path.basename(process.argv[1]);
  console.log('usage: ' + name + ' 1/content.json');
}

// parse command line arguments
var argv = process.argv;
var volumesDirPath;
for (var i = 2; i < argv.length; i++) {
  switch (argv[i]) {
  case '--help':
    // fall through
  case '-h':
    printHelp();
    process.exit(0);
    break;
  default:
    volumesDirPath = argv[i];
    break;
  }
}

var path = require('path');
var fs = require('fs');

var selfPath = process.argv[1];
var selfDir = path.dirname(selfPath);
var templateHTMLFilePath = selfDir + '/template.html';
var outputRootDirPath = path.dirname(volumesDirPath);

VolumeBuilder.build(templateHTMLFilePath, volumesDirPath, function(volume, html){
  var outputDirPath = outputRootDirPath + '/' + volume.vol;
  var outputFilePath = outputDirPath + '/index.html';

  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath);
  }

  fs.writeFileSync(outputFilePath, html);

  console.log('done: ' + volume.vol);
});
