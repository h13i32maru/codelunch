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

var IndexBuilder = {
  build: function(templateHTMLFilePath, volumesDirPath, callback) {
    var fs = require('fs');
    var volumeFilePaths = fs.readdirSync(volumesDirPath).reverse();
    var templateHTML = fs.readFileSync(templateHTMLFilePath, 'utf-8');

    var volumes = [];
    for (var i = 0; i < volumeFilePaths.length; i++) {
      var volumeJSON = fs.readFileSync(volumesDirPath + '/' + volumeFilePaths[i]);
      var volume = JSON.parse(volumeJSON);
      volumes.push(volume);
    }

    var jsdom = require('jsdom');
    jsdom.env(templateHTML, [], function(errors, window){
      if (errors) {
        console.error(errors);
        return;
      }

      var html = this._inject(volumes, window);
      callback(html);
    }.bind(this));
  },

  /**
   *
   * @param {Volume[]} volumes
   * @param window
   * @private
   */
  _inject: function(volumes, window) {
    var docBody = window.document.querySelector('#cl-doc-body');
    var rowTemplate = docBody.children[0].cloneNode(true);
    docBody.innerHTML = '';

    for (var i = 0; i < volumes.length; i++) {
      var volume = volumes[i];
      var row = rowTemplate.cloneNode(true);
      row.querySelector('#cl-link').href = volume.vol;
      row.querySelector('#cl-title').textContent = volume.title;
      row.querySelector('#cl-vol-number').textContent = volume.vol;
      row.querySelector('#cl-date').textContent = volume.date;
      row.querySelector('#cl-text').textContent = volume.text;

      row.innerHTML += '\n';
      docBody.appendChild(row);
    }

    return window.document.innerHTML;
  }
};

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

// ---- main ----

var path = require('path');
var fs = require('fs');

// parse command line arguments
var argv = process.argv;
for (var i = 2; i < argv.length; i++) {
  switch (argv[i]) {
  case '--help':
    // fall through
  case '-h':
    var name = path.basename(process.argv[1]);
    console.log('usage: ' + name);
    process.exit(0);
    break;
  default:
    indexTemplatePath = argv[i++];
    volumeTemplatePath = argv[i++];
    volumesDirPath = argv[i++];
    break;
  }
}

var selfDirPath = path.dirname(process.argv[1]);
var rootDirPath = selfDirPath + '/../';
var volumesDirPath = rootDirPath + '/volumes';
var indexTemplatePath = rootDirPath + '/template/index.html';
var volumeTemplatePath = rootDirPath + '/template/volume.html';

IndexBuilder.build(indexTemplatePath, volumesDirPath, function(html){
  var outputFilePath = rootDirPath + '/index.html';
  fs.writeFileSync(outputFilePath, html);

  console.log('done: index');
});

VolumeBuilder.build(volumeTemplatePath, volumesDirPath, function(volume, html){
  var outputDirPath = rootDirPath + '/' + volume.vol;
  var outputFilePath = outputDirPath + '/index.html';

  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath);
  }

  fs.writeFileSync(outputFilePath, html);

  console.log('done: ' + volume.vol);
});

