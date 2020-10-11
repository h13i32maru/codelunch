export type EpisodeEntity = {
  number: number;
  title: string;
  created: string;
  desc: string;
  length: string;
  url: string;
  speakers: {name: string; url: string; icon: string}[];
  notes: {text: string; url: string}[];
  notice?: string;
};

export const episodes: EpisodeEntity[] = [
  {
    number: 20,
    title: 'A child sleeps at sunset.',
    created: '2016-12-28T00:00:00+09:00',
    desc: '@hokacchaさんと個人でのプロダクト開発、生活スタイルの変化への適応などについて話しました。',
    length: '1:07:46',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/20--A-child-sleeps-at-sunset-ekrp6k',
    speakers: [
      {name: 'hokaccha', url: 'https://twitter.com/hokaccha', icon: 'https://pbs.twimg.com/profile_images/3620394181/848a36e68e94b4b466dfb9a9a63861f6_400x400.jpeg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {text: 'Adventar', url: 'https://adventar.org/'},
      {text: 'nodebrew', url: 'https://github.com/hokaccha/nodebrew'},
      {text: 'Jasper', url: 'https://jasperapp.io/'},
      {text: 'ESDoc', url: 'https://esdoc.org/'},
      {text: 'RxJS', url: 'http://reactivex.io/rxjs/'},
      {text: 'Electron', url: 'http://electron.atom.io/'},
    ],
  },
  {
    number: 19,
    title: 'The Node.js Future',
    created: '2015-12-28T00:00:00+09:00',
    desc: '@yosuke_furukawaさんとNode.jsの未来、ES.nextの話をしました（後編）',
    length: '1:26:09',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/19--The-Node-js-Future-ekrp4l/a-a3gdkjq',
    speakers: [
      {name: 'yosuke_furukawa', url: 'https://twitter.com/yosuke_furukawa', icon: 'https://pbs.twimg.com/profile_images/206948941/wall-e_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "NG working group", "url": "https://github.com/nodejs/ng"},
      {"text": "Less is more", "url": "https://github.com/nodejs/NG/issues/18"},
      {"text": "Inclusivity", "url": "https://github.com/nodejs/inclusivity"},
      {"text": "国際カンファレンスの話", "url": "https://speakerdeck.com/yosuke_furukawa/international-conference-hexing-kou"},
      {"text": "async await", "url": "https://github.com/tc39/ecmascript-asyncawait"},
      {"text": "feature based model", "url": "http://azu.github.io/slide/es6talks/"},
      {"text": "object.observe is deprecated", "url": "https://esdiscuss.org/topic/an-update-on-object-observe"}
    ],
  },
  {
    number: 18,
    title: 'Walk The Node.js History',
    created: '2015-12-21T00:00:00+09:00',
    desc: '@yosuke_furukawaさんとNode.jsの過去・現在の話をしました（前編）',
    length: '42:20',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/18--Walk-The-Node-js-History-ekronn/a-a3gdjjf',
    speakers: [
      {name: 'yosuke_furukawa', url: 'https://twitter.com/yosuke_furukawa', icon: 'https://pbs.twimg.com/profile_images/206948941/wall-e_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "The C10K problem", "url": "http://www.kegel.com/c10k.html"},
      {"text": "Ryan Dahl: Node.js, Evented I/O for V8 Javascript", "url": "http://www.jsconf.eu/2009/speaker/speakers_selected.html"},
      {"text": "libebb", "url": "http://tinyclouds.org/libebb/"},
      {"text": "http://socket.io/", "url": "http://socket.io/"},
      {"text": "どうしてこうなった？ Node.jsとio.jsの分裂と統合の行方。これからどう進化していくのか？", "url": "http://yapcasia.org/2015/talk/show/82e93a96-f60e-11e4-907e-8ab37d574c3a"},
      {"text": "Node Forward", "url": "http://nodeforward.org/"},
      {"text": "Node.jsのコミュニティに変化を与えるnode-forwardについて", "url": "http://yosuke-furukawa.hatenablog.com/entry/2014/10/23/101831"},
      {"text": "io.jsについて知っていること", "url": "http://yosuke-furukawa.hatenablog.com/entry/2014/12/25/104300"}
    ],
  },
  {
    number: 17,
    title: 'The power-assert Goes To The Next Scene',
    created: '2015-09-14T00:00:00+09:00',
    desc: '@t_wadaさんとpower-assert1.0.0リリースを記念して、内部的な実装や今後の方向などを話しました(後編)',
    length: '1:18:07',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/17--The-power-assert-Goes-To-The-Next-Scene-ekrol2/a-a3gdj4q',
    speakers: [
      {name: 't_wada', url: 'https://twitter.com/t_wada', icon: 'https://pbs.twimg.com/profile_images/421959794/TQ_LOGO_400x400.png'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "Big Restructuring: Canonical Assertion", "url": "https://github.com/power-assert-js/espower/pull/8"},
      {"text": "ESQuery", "url": "https://github.com/estools/esquery"},
      {"text": "The ESTree Spec", "url": "https://github.com/estree/estree"},
      {"text": "Parser API", "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API"},
      {"text": "Esprima", "url": "http://esprima.org/"},
      {"text": "Espree", "url": "https://github.com/eslint/espree"},
      {"text": "Acorn", "url": "https://github.com/marijnh/acorn"},
      {"text": "Babylon", "url": "https://github.com/babel/babel/tree/master/packages/babylon"},
      {"text": "Babel Plugins", "url": "https://babeljs.io/docs/advanced/plugins/"},
      {"text": "@azu_re", "url": "https://twitter.com/azu_re"},
      {"text": "@vvakame", "url": "https://twitter.com/vvakame"},
      {"text": "power-assertの記事が出来るまで", "url": "http://azu.github.io/slide/hasakurajs/power-assert.html#1"},
      {"text": "Support other assertion styles?", "url": "https://github.com/power-assert-js/power-assert/issues/22"},
      {"text": "Mechanism and philosophy of power-assert (Slides)", "url": "http://www.echojs.com/news/12344"},
      {"text": "power-assert-js organization", "url": "https://github.com/power-assert-js"},
      {"text": "espower-typescript", "url": "https://github.com/power-assert-js/espower-typescript"},
      {"text": "babel-plugin-espower", "url": "https://github.com/power-assert-js/babel-plugin-espower"},
      {"text": "power-assert-js 公式ロゴが生まれるまでの流れ", "url": "http://togetter.com/li/823597"},
      {"text": "power-assert-js-logo", "url": "https://github.com/power-assert-js/power-assert-js-logo"},
      {"text": "Design By Contract", "url": "https://ja.wikipedia.org/wiki/%E5%A5%91%E7%B4%84%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0"},
      {"text": "unassert", "url": "https://github.com/twada/unassert"},
      {"text": "babel-plugin-unassert", "url": "https://github.com/twada/babel-plugin-unassert"},
      {"text": "オブジェクト指向入門 第2版 原則・コンセプト", "url": "http://www.amazon.co.jp/dp/4798111112"}
    ],
  },
  {
    number: 16,
    title: 'The power-assert Leaves From Moratorium',
    created: '2015-09-07T00:00:00+09:00',
    desc: '@t_wadaさんとpower-assert1.0.0リリースを記念して、開発のきっかけや設計思想などについて話をしました(前編)',
    length: '1:04:13',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/16--The-power-assert-Leaves-From-Moratorium-ekroj6/a-a3gdiiv',
    speakers: [
      {name: 't_wada', url: 'https://twitter.com/t_wada', icon: 'https://pbs.twimg.com/profile_images/421959794/TQ_LOGO_400x400.png'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "power-assert", "url": "https://github.com/power-assert-js"},
      {"text": "npm semantic version calculator", "url": "http://semver.npmjs.com/"},
      {"text": "セマンティック バージョニング 2.0.0", "url": "http://semver.org/lang/ja/"},
      {"text": "Spock", "url": "https://github.com/spockframework/spock"},
      {"text": "ECMAScript Tooling", "url": "https://github.com/estools"},
      {"text": "Node学園祭2012", "url": "http://nodefest.jp/2012/"},
      {"text": "Power Assertの系譜", "url": "http://togetter.com/li/435920"},
      {"text": "power-assert ができるまで", "url": "http://twada.herokuapp.com/presentations/power-assert-begins/power-assert-begins.html"},
      {"text": "シンプルさの必要性", "url": "http://eed3si9n.com/ja/simplicity-matters"},
      {"text": "Frameworks should evolve slowly", "url": "http://www.amazon.co.jp/dp/0596007434"}
    ],
  },
  {
    number: 15,
    title: 'Graph Theory',
    created: '2015-08-17T00:00:00+09:00',
    desc: '@SamuraiT01さんとソーシャルネットワークやグラフについて話をしました。',
    length: '51:13',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/15--Graph-Theory-ekrog5/a-a3gdhv2',
    speakers: [
      {name: 'SamuraiT01', url: 'https://twitter.com/SamuraiT01', icon: 'https://pbs.twimg.com/profile_images/378800000598624965/5d9284915f74911a5bdc2f8d323b37c6_400x400.jpeg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "オープンソースで学ぶ社会ネットワーク分析", "url": "http://www.oreilly.co.jp/books/9784873115504/"},
      {"text": "2章グラフ理論スピード入門", "url": "http://www.slideshare.net/teruok/2-13550752"},
      {"text": "グラフ理論(Graph Theory)", "url": "http://samurait.hatenablog.com/entry/2014/02/18/%E3%82%B0%E3%83%A9%E3%83%95%E7%90%86%E8%AB%96%28Graph_Theory%29"},
      {"text": "２０１１年 加古川東高等学校 理数科特別講座", "url": "http://www.kobepharma-u.ac.jp/knot/document/kakogawa1.pdf"},
      {"text": "ダイクストラ法（最短経路問題）", "url": "http://www.deqnotes.net/acmicpc/dijkstra/"},
      {"text": "六次の隔たり", "url": "https://ja.wikipedia.org/wiki/%E5%85%AD%E6%AC%A1%E3%81%AE%E9%9A%94%E3%81%9F%E3%82%8A"}
    ],
  },
  {
    number: 14,
    title: 'Image of Neural Network',
    created: '2015-06-30T00:00:00+09:00',
    desc: '@horiken4さんとニューラルネットワークやディープラーニングについて話をしました。',
    length: '1:01:06',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/14--Image-of-Neural-Network-ekrodb/a-a3gdh7t',
    speakers: [
      {name: 'horiken4', url: 'https://twitter.com/horiken4', icon: 'https://pbs.twimg.com/profile_images/1042397720927887362/hDV5eCRl_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "ニューラルネットワーク入門", "url": "http://www-ailab.elcom.nitech.ac.jp/lecture/neuro/menu.html"},
      {"text": "Deep Learningと画像認識 ～歴史・理論・実践～", "url": "http://www.slideshare.net/nlab_utokyo/deep-learning-40959442?related=1"},
      {"text": "Hello Autoencoder", "url": "http://kiyukuta.github.io/2013/08/20/hello_autoencoder.html"},
      {"text": "萌えキャラ顔画像分類システムを試作してみた", "url": "https://horiken4.wordpress.com/2012/06/30/%E8%90%8C%E3%81%88%E3%82%AD%E3%83%A3%E3%83%A9%E9%A1%94%E7%94%BB%E5%83%8F%E5%88%86%E9%A1%9E%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%82%92%E8%A9%A6%E4%BD%9C%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F/"}
    ],
  },
  {
    number: 13,
    title: '15 Gophers Came From San Francisco',
    created: '2015-06-14T00:00:00+09:00',
    desc: '@tenntennさんとGo1.5の新機能やgomobileについて話をしました。',
    length: '50:24',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/13--15-Gophers-Came-From-San-Francisco-ekro9v/a-a3gdgm8',
    speakers: [
      {name: 'tenntenn', url: 'https://twitter.com/tenntenn', icon: 'https://pbs.twimg.com/profile_images/1148841452622925825/NJuQHEqa_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "Go Conference 2015 summer", "url": "http://gocon.connpass.com/event/14063/"},
      {"text": "Project Tango", "url": "https://www.google.com/atap/project-tango/"},
      {"text": "packed gophers", "url": "https://twitter.com/tenntenn/status/603362219485605888"},
      {"text": "The State of Go", "url": "http://talks.golang.org/2015/state-of-go-may.slide#1"},
      {"text": "Go in Go", "url": "http://talks.golang.org/2015/gogo.slide#1"},
      {"text": "Golang で Shared Library を出力する。", "url": "http://qiita.com/yanolab/items/1e0dd7fd27f19f697285"},
      {"text": "gomobile", "url": "https://github.com/golang/mobile"},
      {"text": "Go support for Android", "url": "https://docs.google.com/document/d/1N3XyVkAP8nmWjASz8L_OjjnjVKxgeVBjIsTr5qIUcA4/edit"},
      {"text": "サンフランシスコ名物のカニが美味しい有名レストラン", "url": "http://allabout.co.jp/gm/gc/436658/"}
    ],
  },
  {
    number: 12,
    title: 'DoroidKaigi Inside Story by Speaker',
    created: '2015-05-14T00:00:00+09:00',
    desc: '@iizukakさんとDoroidKaigiの発表者側からの裏話をしました。',
    length: '46:43',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/12--DoroidKaigi-Inside-Story-by-Speaker-ekro7k/a-a3gdg2s',
    speakers: [
      {name: 'iizukak', url: 'https://twitter.com/iizukak', icon: 'https://pbs.twimg.com/profile_images/728549599401549830/uZtBRntx_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "DroidKaigi", "url": "http://droidkaigi.github.io/"},
      {"text": "あるゲームアプリケーションの構成とアップデートサイクル", "url": "http://www.slideshare.net/kentaroiizuka/droidkaigi"},
      {"text": "プレゼンテーションZEN 第2版", "url": "http://www.amazon.co.jp/dp/462106603X"},
      {"text": "Logicool Wireless Presenter R400", "url": "http://www.logicool.co.jp/ja-jp/product/wireless-presenter-r400"}
    ],
  },
  {
    number: 11,
    title: 'FPGA is Fast and Hard',
    created: '2015-04-28T00:00:00+09:00',
    desc: '@muo_jpさん、@HideyukiTakeiさんに来て頂いて、FPGAの話をしまし。',
    length: '1:05:13',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/11--FPGA-is-Fast-and-Hard-ekro5b/a-a3gdeq8',
    speakers: [
      {name: 'muo_jp', url: 'https://twitter.com/muo_jp', icon: 'https://pbs.twimg.com/profile_images/547888767437008898/l_5PlZX0_400x400.jpeg'},
      {name: 'amore_takei', url: 'https://twitter.com/amore_takei', icon: 'https://pbs.twimg.com/profile_images/1210349776023109632/GK5rDV5c_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "#CodeLunch #11(FPGA回)のフォローアップ", "url": "http://www.muo.jp/2015/04/codelunchfpgafollowup.html"}
    ],
  },
  {
    number: 10,
    title: 'Beatrobo And PlugAir',
    created: '2015-04-08T00:00:00+09:00',
    desc: '@HideyukiTakeiさん、@muo_jpさんとBeatroboとPlugAirについてハード寄りの話をしました。',
    length: '1:10:37',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/10--Beatrobo-And-PlugAir-ekrmcu/a-a3gdb6t',
    speakers: [
      {name: 'muo_jp', url: 'https://twitter.com/muo_jp', icon: 'https://pbs.twimg.com/profile_images/547888767437008898/l_5PlZX0_400x400.jpeg'},
      {name: 'amore_takei', url: 'https://twitter.com/amore_takei', icon: 'https://pbs.twimg.com/profile_images/1210349776023109632/GK5rDV5c_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "Beatrobo", "url": "https://corp.beatrobo.com/"},
      {"text": "PlugAir", "url": "https://www.plugair.com/ja/"},
      {"text": "PlugAirスタッフ募集", "url": "https://www.plugair.com/ja/jobs/"},
      {"text": "iKey", "url": "http://www.amazon.co.jp/dp/B00LQLHF00"},
      {"text": "PCBCART", "url": "http://www.pcbcart.com/"}
    ],
  },
  {
    number: 9,
    title: 'Iino Selection of Polymer.',
    created: '2015-03-15T00:00:00+09:00',
    desc: '今回はMasaki Iinoさんに来て頂いてWebComponentsとPolymerについて話をしました。',
    length: '01:09:14',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/9--Iino-Selection-of-Polymer-ekrm6t/a-a3gcoib',
    speakers: [
      {name: 'Masaki Iino', url: '', icon: ''},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "Polymer", "url": "https://www.polymer-project.org"},
      {"text": "WebComponents", "url": "http://webcomponents.org/"},
      {"text": "Brick", "url": "https://mozbrick.github.io/"},
      {"text": "Chrome Dev Editor", "url": "https://chrome.google.com/webstore/detail/chrome-dev-editor-develop/pnoffddplpippgcfjdhbmhkofpnaalpg"}
    ],
  },
  {
    number: 8,
    title: 'Julia comes here at 2015!',
    created: '2015-02-22T00:00:00+09:00',
    desc: '今回は@iizukakが2015年の気になる技術(Julia, FirefoxOS, Emscripten, Nix)について話をしました',
    length: '39:19',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/8--Julia-comes-here-at-2015-ekrjmr/a-a3gco0n',
    speakers: [
      {name: 'iizukak', url: 'https://twitter.com/iizukak', icon: 'https://pbs.twimg.com/profile_images/728549599401549830/uZtBRntx_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "Julia", "url": "http://julialang.org/"},
      {"text": "Firefox OS", "url": "https://www.mozilla.org/ja/firefox/os/"},
      {"text": "Emscripten", "url": "https://github.com/kripken/emscripten"},
      {"text": "Nix", "url": "https://nixos.org/nix/"},
      {"text": "喜嶋先生の静かな世界", "url": "http://www.amazon.co.jp/dp/4062166364"}
    ],
  },
  {
    number: 7,
    title: 'PHP7\'s Hashtable Implementation',
    created: '2015-02-07T00:00:00+09:00',
    desc: '今回は@hnwさんに来て頂いて、PHP7で内部実装が新しくなったHashtableについて話をしました。',
    length: '48:54',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/7--PHP7s-Hashtable-Implementation-ekrjkh/a-a3gcne9',
    speakers: [
      {name: 'hnw', url: 'https://twitter.com/hnw', icon: 'https://pbs.twimg.com/profile_images/56095269/hnw-mixi_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "PHP処理系の未来", "url": "http://gihyo.jp/dev/column/newyear/2015/php-future"},
      {"text": "HHVM", "url": "http://hhvm.com/"},
      {"text": "PHP's new hashtable implementation", "url": "http://nikic.github.io/2014/12/22/PHPs-new-hashtable-implementation.html"},
      {"text": "カレー | 無印良品ネットストア", "url": "http://www.muji.net/store/cmdty/section/S3000303"}
    ],
  },
  {
    number: 6,
    title: 'ECMAScript6 & Project Euler',
    created: '2015-01-30T00:00:00+09:00',
    desc: '今回は@h13i32maruと@iizukakの二人で、ECMAScript6とProject Eulerについて話をしました。',
    length: '52:33',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/6--ECMAScript6--Project-Euler-ekrji3/a-a3gclsv',
    notice: "番組中で「coはnodeの開発者によって作られたと」とお話しましたが、主要なコミッタではないようでした。",
    speakers: [
      {name: 'iizukak', url: 'https://twitter.com/iizukak', icon: 'https://pbs.twimg.com/profile_images/728549599401549830/uZtBRntx_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "ECMAScript6", "url": "http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts"},
      {"text": "Destructuring and parameter handling in ECMAScript 6", "url": "http://www.2ality.com/2015/01/es6-destructuring.html"},
      {"text": "ES6 Generatorを使ってasync/awaitを実装するメモ", "url": "http://blog.h13i32maru.jp/entry/2015/01/02/225457"},
      {"text": "ECMAScript compatibility table", "url": "http://kangax.github.io/compat-table/es6/"},
      {"text": "Project Euler", "url": "https://projecteuler.net/"},
      {"text": "火星の人", "url": "http://www.amazon.co.jp/ebook/dp/B00O1VJZLO/"}
    ],
  },
  {
    number: 5,
    title: 'Lua Debugger and Clojure on Android',
    created: '2014-12-27T00:00:00+09:00',
    desc: '今回は@tenntennさんに来て頂いて、LuaのデバッガやClojureを使ったAndroidアプリの開発について話をしました。',
    length: '36:51',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/5--Lua-Debugger-and-Clojure-on-Android-ekrjb9/a-a3gcl8h',
    speakers: [
      {name: 'tenntenn', url: 'https://twitter.com/tenntenn', icon: 'https://pbs.twimg.com/profile_images/1148841452622925825/NJuQHEqa_400x400.jpg'},
      {name: 'iizukak', url: 'https://twitter.com/iizukak', icon: 'https://pbs.twimg.com/profile_images/728549599401549830/uZtBRntx_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "丸山食堂", "url": "http://blog.h13i32maru.jp/entry/2014/12/22/213239"},
      {"text": "LUPE", "url": "https://github.com/tenntenn/lupe"},
      {"text": "Clojure on Android", "url": "https://github.com/clojure-android/lein-droid"},
      {"text": "LINEスタンプ", "url": "https://github.com/tenntenn/gopher-stickers"}
    ],
  },
  {
    number: 4,
    title: 'PNaClとasm.js',
    created: '2014-03-15T00:00:00+09:00',
    desc: '今回は@muo_jpさんに来て頂いて、Webの未来をカエルかも知れないPNaClとasm.jsについてお話していただきました。',
    length: '44:17',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/4--PNaClasm-js-ekrj7s/a-a3gcg60',
    speakers: [
      {name: 'muo_jp', url: 'https://twitter.com/muo_jp', icon: 'https://pbs.twimg.com/profile_images/547888767437008898/l_5PlZX0_400x400.jpeg'},
      {name: 'iizukak', url: 'https://twitter.com/iizukak', icon: 'https://pbs.twimg.com/profile_images/728549599401549830/uZtBRntx_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "Effective Android", "url": "http://tatsu-zine.com/books/effective-android"},
      {"text": "Webの未来 〜 PNaClとasm.jsでカワルミライ - いま、モバイルWebの先端で起こってい", "url": "http://www.slideshare.net/KeiNakazawa/web-pnaclasmjs-web"},
      {"text": "asm.jsとかPNaClとかLLVMに興味あったので調べて回ったら少しだけ理解できた話", "url": "http://d.hatena.ne.jp/hdk_embedded/20131128/1385669904"},
      {"text": "PNaCl", "url": "http://www.chromium.org/nativeclient/pnacl"},
      {"text": "asm.js", "url": "http://asmjs.org/"},
      {"text": "PlayGround", "url": "https://github.com/KLab/PlaygroundOSS"},
      {"text": "きつねさんでもわかるLLVM", "url": "http://tatsu-zine.com/books/llvm"}
    ],
  },
  {
    number: 3,
    title: 'NaN-BoxingによるJavaScriptの最適化',
    created: '2014-02-23T00:00:00+09:00',
    desc: '今回は@hnwさんに来て頂いて、浮動小数点数とNaN-BoxingによるJavaScriptの最適化について話をしました。',
    length: '34:08',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/3--NaN-BoxingJavaScript-ekrif4/a-a3gce1q',
    speakers: [
      {name: 'hnw', url: 'https://twitter.com/hnw', icon: 'https://pbs.twimg.com/profile_images/56095269/hnw-mixi_400x400.jpg'},
      {name: 'iizukak', url: 'https://twitter.com/iizukak', icon: 'https://pbs.twimg.com/profile_images/728549599401549830/uZtBRntx_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "hnwの日記", "url": "http://d.hatena.ne.jp/hnw/"},
      {"text": "PHPバグレポート", "url": "https://bugs.php.net/bug.php?id=45712"},
      {"text": "デリー", "url": "http://www.delhi.co.jp/"},
      {"text": "IEEE754", "url": "http://ja.wikipedia.org/wiki/IEEE_754"},
      {"text": "10進数小数", "url": "http://d.hatena.ne.jp/hnw/20131231"},
      {"text": "The Number Type", "url": "http://www.ecma-international.org/ecma-262/5.1/#sec-8.5"},
      {"text": "value representation in javascript implementations", "url": "http://wingolog.org/archives/2011/05/18/value-representation-in-javascript-implementations"},
      {"text": "Virtual address space details", "url": "http://en.wikipedia.org/wiki/X86-64#Virtual_address_space_details"},
      {"text": "JavaScriptCore JSValue", "url": "https://trac.webkit.org/browser/releases/WebKitGTK/webkit-2.3.5/Source/JavaScriptCore/runtime/JSCJSValue.h"}
    ],
  },
  {
    number: 2,
    title: 'Go言語',
    created: '2014-01-26T00:00:00+09:00',
    desc: '今回は@tenntennさんに来て頂いてGo言語について話をしました。',
    length: '24:45',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/2--Go-ekri6k/a-a3gccu9',
    speakers: [
      {name: 'tenntenn', url: 'https://twitter.com/tenntenn', icon: 'https://pbs.twimg.com/profile_images/1148841452622925825/NJuQHEqa_400x400.jpg'},
      {name: 'iizukak', url: 'https://twitter.com/iizukak', icon: 'https://pbs.twimg.com/profile_images/728549599401549830/uZtBRntx_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "なぜGoogleがGo言語を開発したのか？", "url": "http://golang.jp/go_faq#Origins"},
      {"text": "Goで作られているプロダクト", "url": "http://en.wikipedia.org/w/index.php?title=Go_(programming_language)#Projects_and_organizations_using_Go"},
      {"text": "なぜtenntennさんがGo言語をはじめたのか？", "url": "http://www.slideshare.net/takuyaueda967/goroutinechannelgogolang/9"},
      {"text": "Gopher AA ʕ ◔ϖ◔ʔ", "url": "https://twitter.com/tenntenn/status/211730477793542144"},
      {"text": "A Tour of Go", "url": "http://go-tour-jp.appspot.com/#1"},
      {"text": "Goroutine", "url": "http://go-tour-jp.appspot.com/#63"},
      {"text": "The Go scheduler", "url": "http://morsmachine.dk/go-scheduler"},
      {"text": "Channel", "url": "http://go-tour-jp.appspot.com/#64"},
      {"text": "Interface", "url": "http://go-tour-jp.appspot.com/#53"},
      {"text": "GoOracle", "url": "http://golang.org/s/oracle-user-manual"}
    ],
  },
  {
    number: 1,
    title: 'Webフロントエンド',
    created: '2013-12-15T00:00:00+09:00',
    desc: '@iizukakと@h13i32maruの二人でWebフロントエンドを中心とした話をしました。',
    length: '55:56',
    url: 'https://anchor.fm/h13i32maru/embed/episodes/1--Web-ekriii/a-a3gcfgg',
    speakers: [
      {name: 'iizukak', url: 'https://twitter.com/iizukak', icon: 'https://pbs.twimg.com/profile_images/728549599401549830/uZtBRntx_400x400.jpg'},
      {name: 'h13i32maru', url: 'https://twitter.com/h13i32maru', icon: 'https://pbs.twimg.com/profile_images/972480914977468418/-vXLVAdL_400x400.jpg'},
    ],
    notes: [
      {"text": "寿司との最適な距離の取り方につ", "url": "http://www.portalshit.net/2013/12/09/optimum-distance-from-sushi"},
      {"text": "Firefox OS", "url": "http://www.mozilla.jp/firefoxos/"},
      {"text": "AngularJS", "url": "http://angularjs.org/"},
      {"text": "Vim Advent Calendar 2012", "url": "http://atnd.org/events/33746"},
      {"text": "PhpStorm", "url": "http://www.jetbrains.com/phpstorm/"},
      {"text": "JavaScript - Client Side - Advent Calendar 201", "url": "3http://qiita.com/advent-calendar/2013/javascript"},
      {"text": "Firefox OS Advent Calendar 2013", "url": "http://www.adventar.org/calendars/103"},
      {"text": "Next Mobile WebApplication", "url": "https://speakerdeck.com/uupaa/next-mobile-webapplication"},
      {"text": "HOBBIT", "url": "http://middle-earth.thehobbit.com/"},
      {"text": "Web Audio API", "url": "http://www.w3.org/TR/webaudio/"},
      {"text": "Can I use", "url": "http://caniuse.com/"},
      {"text": "WebView for Android", "url": "https://developers.google.com/chrome/mobile/docs/webview/overview"},
      {"text": "ExGame", "url": "http://developer.dena.jp/mbga/support/exgame.html"},
      {"text": "LWF", "url": "http://gree.github.io/lwf/"},
      {"text": "High", "url": "https://speakerdeck.com/ahomu/high-performance-web-frontend Performance Web Frontend by Ayumu Sato"},
      {"text": "Webフロントエンドパフォーマンスチューニング", "url": "https://speakerdeck.com/h13i32maru/webhurontoendopahuomansutiyuningu by Ryo Maruyama"},
      {"text": "Chrome", "url": "https://developers.google.com/chrome-developer-tools/?hl=ja DevTools"},
      {"text": "Effectively", "url": "http://www.html5rocks.com/ja/tutorials/memory/effectivemanagement/ Managing Memory at Gmail scale"},
      {"text": "skia", "url": "https://code.google.com/p/skia/"},
      {"text": "MDN", "url": "https://developer.mozilla.org/ja/"},
      {"text": "Knockout", "url": "http://www.slideshare.net/kentaroiizuka/knockout-javascript を用いた大規模 JavaScript 開発"},
      {"text": "JavaScriptフロントエンド開発の昨今", "url": "https://speakerdeck.com/naoya/javascripthurontoendokai-fa-falsezuo-jin by Naoya Ito"},
      {"text": "ブログを書くまでがHTML5", "url": "http://blog.h13i32maru.jp/entry/2013/12/09/110029 Conference 2013"}
    ],
  },
];
