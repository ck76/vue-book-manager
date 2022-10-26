[TOC]

# Book-reading-recorder

- This is a reading record tool. Developed using Vue for practice.
- You can use keywords for book retrieval, using Google's open API.



### Technology used

- Vue
- VueX
- Vue-Router
- Element-UI
- Axios



### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```



### Search Book By Keywords using Google Open Api

<img src="https://tva1.sinaimg.cn/large/008vxvgGgy1h7j05xm1rfj31350u0jud.jpg" alt="image-20221026221822980" style="zoom: 50%;" />


### BookDetail Page
<img src="https://tva1.sinaimg.cn/large/008vxvgGgy1h7j06v0j1xj319k0tqq5j.jpg" alt="image-20221026221916840" style="zoom:40%;" />


### Add book to record list
<img src="https://tva1.sinaimg.cn/large/008vxvgGgy1h7j08gk4x3j319u0nk76b.jpg" alt="image-20221026222049553" style="zoom:30%;" />

### Project structure

```vue
.
├── App.vue
├── assets
│   └── logo.png
├── components
│   └── HelloWorld.vue
├── element-variables.scss
├── main.js
├── plugins
│   └── element.js
├── router
│   └── index.js
├── store
│   ├── index.js
│   └── mutation-types.js
└── views
    ├── About.vue
    ├── BookForm.vue
    ├── BookInfo.vue
    ├── BookSearch.vue
    └── Home.vue
```



### Response Data(json)

![image-20221026222348846](https://tva1.sinaimg.cn/large/008vxvgGgy1h7j0gftsiyj31p70u0k0d.jpg)



```json
{
  "kind": "books#volumes",
  "totalItems": 555,
  "items": [
    {
      "kind": "books#volume",
      "id": "zTcEEAAAQBAJ",
      "etag": "5XK/CMc/wrE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/zTcEEAAAQBAJ",
      "volumeInfo": {
        "title": "実践Rustﾌﾟﾛｸﾞﾗﾐﾝｸﾞ入門",
        "authors": [
          "初田直也",
          "山口聖弘",
          "吉川哲史"
        ],
        "publisher": "秀和システム",
        "publishedDate": "2020-08",
        "description": "今もっとも人気があり、Google、Amazon、Microsoftも注目している新言語。C/C++にかわる安全爆速の言語。",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9784798061702"
          },
          {
            "type": "ISBN_10",
            "identifier": "4798061700"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 517,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.0.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=zTcEEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=zTcEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.co.jp/books?id=zTcEEAAAQBAJ&printsec=frontcover&dq=rust&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.jp/books?id=zTcEEAAAQBAJ&dq=rust&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/%E5%AE%9F%E8%B7%B5Rust%EF%BE%8C%EF%BE%9F%EF%BE%9B%EF%BD%B8%EF%BE%9E%EF%BE%97%EF%BE%90%EF%BE%9D%EF%BD%B8%EF%BE%9E.html?hl=&id=zTcEEAAAQBAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/%E5%AE%9F%E8%B7%B5Rust%EF%BE%8C%EF%BE%9F%EF%BE%9B%EF%BD%B8%EF%BE%9E%EF%BE%97%EF%BE%90%EF%BE%9D%EF%BD%B8%EF%BE%9E-sample-pdf.acsm?id=zTcEEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=zTcEEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "今もっとも人気があり、Google、Amazon、Microsoftも注目している新言語。C/C++にかわる安全爆速の言語。"
      }
    },
    {
      "kind": "books#volume",
      "id": "Qg9uugEACAAJ",
      "etag": "POFmfs3kYYI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Qg9uugEACAAJ",
      "volumeInfo": {
        "title": "プログラミングRust",
        "authors": [
          "Jim Blandy",
          "ジムブランディ",
          "ジェイソンオレンドルフ"
        ],
        "publishedDate": "2018-08",
        "description": "注目度の高い次世代のプログラミング言語Rustの日本では初めての書籍。",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "4873118557"
          },
          {
            "type": "ISBN_13",
            "identifier": "9784873118550"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 600,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Qg9uugEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Qg9uugEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.co.jp/books?id=Qg9uugEACAAJ&dq=rust&hl=&cd=2&source=gbs_api",
        "infoLink": "http://books.google.co.jp/books?id=Qg9uugEACAAJ&dq=rust&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0Rust.html?hl=&id=Qg9uugEACAAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Qg9uugEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "注目度の高い次世代のプログラミング言語Rustの日本では初めての書籍。"
      }
    },
    {
      "kind": "books#volume",
      "id": "e-ZgxQEACAAJ",
      "etag": "0j2F8e4gZCc",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/e-ZgxQEACAAJ",
      "volumeInfo": {
        "title": "実践Rust入門言語仕様から開発手法まで",
        "authors": [
          "keen",
          "河野達也",
          "小松礼人"
        ],
        "publishedDate": "2019-05-22",
        "description": "Rustはモダンな機能で開発者の生産性を高めつつ、安全で、ハードウェアの性能を最大限に発揮できる数少ないプログラミング言語の1つです。いままでC/C++を使ってきた人はもちろん、それらの言語を敬遠してきた人にとっても身近な道具となりえます。Python、Ruby、Node.jsなどの実行環境からFFI(他言語関数インターフェイス)というしくみを使ってRustの関数を呼び出せますので、性能上のボトルネックとなっている機能を少しずつRustで置き換えていくことも可能です。特に大量のデータを扱ったり、重い計算をしたりする処理では効果が高く、Rustで書き換えることで処理速度が数十倍になることも珍しくないでしょう。",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "4297105594"
          },
          {
            "type": "ISBN_13",
            "identifier": "9784297105594"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 551,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=e-ZgxQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=e-ZgxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.co.jp/books?id=e-ZgxQEACAAJ&dq=rust&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.co.jp/books?id=e-ZgxQEACAAJ&dq=rust&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/%E5%AE%9F%E8%B7%B5Rust%E5%85%A5%E9%96%80%E8%A8%80%E8%AA%9E%E4%BB%95%E6%A7%98%E3%81%8B%E3%82%89%E9%96%8B%E7%99%BA.html?hl=&id=e-ZgxQEACAAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=e-ZgxQEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Rustはモダンな機能で開発者の生産性を高めつつ、安全で、ハードウェアの性能を最大限に発揮できる数少ないプログラミング言語の1つです。いままでC/C++を使ってきた人はもち ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "6WINEAAAQBAJ",
      "etag": "fduSCbvg2Ig",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/6WINEAAAQBAJ",
      "volumeInfo": {
        "title": "実践Rustプログラミング入門",
        "authors": [
          "初田直也",
          "山口聖弘",
          "吉川哲史",
          "豊田優貴",
          "松本健太郎",
          "原将己",
          "中村謙弘",
          "フォルシア株式会社"
        ],
        "publisher": "秀和システム",
        "publishedDate": "2020-09-01",
        "description": "※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用などの機能が使用できません。 Rustは、C/C++の代わりとなる最新の爆速言語として注目されています。「とにかく実行速度が速い」「モダンな言語機能が一通り入っている」「OSからWebアプリケーションまで幅広く実装できる」「ツール群がとても充実している」「安全性が強力に担保されている」など、数多くの魅力があります。本書は、JavaやPythonなど他の言語に習熟しているエンジニアを対象に、Rustの独特な仕様と開発ノウハウをわかりやすく解説した入門書です。",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "PKEY:BT000087941600100101900209"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=6WINEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=6WINEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.co.jp/books?id=6WINEAAAQBAJ&printsec=frontcover&dq=rust&hl=&cd=4&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=6WINEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=6WINEAAAQBAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 3564,
          "currencyCode": "JPY"
        },
        "retailPrice": {
          "amount": 3208,
          "currencyCode": "JPY"
        },
        "buyLink": "https://play.google.com/store/books/details?id=6WINEAAAQBAJ&rdid=book-6WINEAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3564000000,
              "currencyCode": "JPY"
            },
            "retailPrice": {
              "amountInMicros": 3208000000,
              "currencyCode": "JPY"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/%E5%AE%9F%E8%B7%B5Rust%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%85%A5%E9%96%80-sample-epub.acsm?id=6WINEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/%E5%AE%9F%E8%B7%B5Rust%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%85%A5%E9%96%80-sample-pdf.acsm?id=6WINEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=6WINEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "※この商品はタブレットなど大きいディスプレイを備えた端末で読むことに適しています。また、文字だけを拡大することや、文字列のハイライト、検索、辞書の参照、引用など ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "__JPEAAAQBAJ",
      "etag": "VfL9kjSDU5w",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/__JPEAAAQBAJ",
      "volumeInfo": {
        "title": "詳解Rustプログラミング",
        "authors": [
          "Tim McNamara"
        ],
        "publisher": "翔泳社",
        "publishedDate": "2021-11-17",
        "description": "さまざまなCUIアプリケーションを通して システム言語としてのRustを徹底詳解 本書は、 Tim McNamara, \"Rust in Action: Systems programming concepts and techniques\" Manning Publications, の翻訳書です。 【本書の内容】 ダイレクトにメモリを操作し、OSのシステムコールを活用することで高速性を維持しつつ、コンパイラの進化によって安全性も確保した開発言語・Rust。 本書は、ファイルI/Oを使った入出力プログラムから、キーバリュー型のDB操作やメモリ操作、生のTCPを使うネットワークプログラム。そしてプロセスやスレッド、割り込みや例外処理などの低レイヤからカーネルそのものまで扱うためのノウハウを、Rust固有のテクニカルタームとともに解説します。 著者のTim McNamaraは、15年以上の時間をかけて、テキストマイニング、自然言語処理、データ工学のエキスパートになりました。彼はRust Wellingtonのオーガナイザであり、Rustプログラミングのチュートリアルを、オフラインでも、TwitchとYouTubeを介したオンラインでも、定期的に開催しています。 【本書で取り上げるジャンル】 ・メモリ操作 ・ファイルとストレージ ・ネットワーク ・時間管理 ・プロセスとスレッド ・カーネル ・割り込みと例外処理 【読者が得られること】 ・Rustによるプログラミング基礎 ・Rust固有のプログラミング手法 ・システムプログラミングの勘所 ・コンピュータサイエンスの知識 ※本電子書籍は同名出版物を底本として作成しました。記載内容は印刷出版当時のものです。 ※印刷出版再現のため電子書籍としては不要な情報を含んでいる場合があります。 ※印刷出版とは異なる表記・表現の場合があります。予めご了承ください。 ※プレビューにてお手持ちの電子端末での表示状態をご確認の上、商品をお買い求めください。 (翔泳社)",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9784798173856"
          },
          {
            "type": "ISBN_10",
            "identifier": "4798173851"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 512,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.14.15.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=__JPEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=__JPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.co.jp/books?id=__JPEAAAQBAJ&printsec=frontcover&dq=rust&hl=&cd=5&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=__JPEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=__JPEAAAQBAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 3960,
          "currencyCode": "JPY"
        },
        "retailPrice": {
          "amount": 3564,
          "currencyCode": "JPY"
        },
        "buyLink": "https://play.google.com/store/books/details?id=__JPEAAAQBAJ&rdid=book-__JPEAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3960000000,
              "currencyCode": "JPY"
            },
            "retailPrice": {
              "amountInMicros": 3564000000,
              "currencyCode": "JPY"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/%E8%A9%B3%E8%A7%A3Rust%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-sample-epub.acsm?id=__JPEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/%E8%A9%B3%E8%A7%A3Rust%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-sample-pdf.acsm?id=__JPEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=__JPEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "さまざまなCUIアプリケーションを通して システム言語としてのRustを徹底詳解 本書は、 Tim McNamara, &quot;Rust in Action: Systems programming concepts and techniques&quot; Manning Publications, の翻訳書です。 ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "FviKEAAAQBAJ",
      "etag": "zqJ9xYtheoY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/FviKEAAAQBAJ",
      "volumeInfo": {
        "title": "Rustプログラミング完全ガイド 他言語との比較で違いが分かる！",
        "authors": [
          "Carlo Milanesi",
          "吉川 邦夫"
        ],
        "publisher": "インプレス",
        "publishedDate": "2022-09-28",
        "description": "Rustの各手法や考え方を幅広く解説！ 500以上のサンプルとその実行結果も掲載 全24章の包括的なチュートリアル 「この素晴らしいプログラミング言語を本格的に始めるのに最適」 「重要なメモリ管理と強力な型推論機能を紹介するのは簡単ではない」 ─（原書への）読者の声 Rustは、C／C++の後継と位置づけられているプログラミング言語で、 性能やメモリ安全性を重視しています。 本書では、まず最小級のサンプルから説明を開始し、その後は、 さまざまな構文や特徴的な振る舞いについて多数のテーマを解説。 関数／メモリの割り当て／オブジェクト指向もカバーしており、 Rustの基礎から包括的に理解するのに役立ちます。 【言語の構文や機能に関するテーマ】 ◎整数／浮動小数点演算、◎if・forなどの制御構文、◎ミュータブルとイミュータブル、 ◎型推論の仕組み、◎配列／ベクター、◎タプル／構造体／タプル構造体、◎範囲とスライス、 ◎パターン照合、◎イテレータ／イテレータアダプタ、◎各コレクションの特長、etc. 【関数に関するテーマ】 ◎関数の定義と使い方、◎ジェネリックな関数や型、◎クロージャの定義と使用 【メモリに関するテーマ】 ◎メモリの割り当ての仕組み、◎オブジェクトとメモリ 【オブジェクト指向に関するテーマ】 ◎データのカプセル化、◎トレイトとジェネリックトレイト、◎デストラクタ、 ◎演算子の多重定義、◎静的・動的ディスパッチ、◎オブジェクトの破棄 ※本書は『Beginning Rust: Get Started with Rust 2021 Edition』の翻訳書です。 ※プログラミングの基礎知識を有していることを前提としています。 発行：インプレス",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9784295015291"
          },
          {
            "type": "ISBN_10",
            "identifier": "4295015296"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 432,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=FviKEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=FviKEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.co.jp/books?id=FviKEAAAQBAJ&printsec=frontcover&dq=rust&hl=&cd=6&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=FviKEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=FviKEAAAQBAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 4070,
          "currencyCode": "JPY"
        },
        "retailPrice": {
          "amount": 3663,
          "currencyCode": "JPY"
        },
        "buyLink": "https://play.google.com/store/books/details?id=FviKEAAAQBAJ&rdid=book-FviKEAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 4070000000,
              "currencyCode": "JPY"
            },
            "retailPrice": {
              "amountInMicros": 3663000000,
              "currencyCode": "JPY"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/Rust%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%AE%8C%E5%85%A8%E3%82%AC%E3%82%A4%E3%83%89-sample-pdf.acsm?id=FviKEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=FviKEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Rustの各手法や考え方を幅広く解説！ 500以上のサンプルとその実行結果も掲載 全24章の包括的なチュートリアル 「この素晴らしいプログラミング言語を本格的に始めるのに最適」 ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "6BZfEAAAQBAJ",
      "etag": "pBhdUityumA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/6BZfEAAAQBAJ",
      "volumeInfo": {
        "title": "詳解Rustプログラミング",
        "authors": [
          "Tim McNamara"
        ],
        "publisher": "翔泳社",
        "publishedDate": "2021-11-17",
        "description": "さまざまなCUIアプリケーションを通して システム言語としてのRustを徹底詳解 本書は、 Tim McNamara, \"Rust in Action: Systems programming concepts and techniques\" Manning Publications, の翻訳書です。 【本書の内容】 ダイレクトにメモリを操作し、OSのシステムコールを活用することで高速性を維持しつつ、コンパイラの進化によって安全性も確保した開発言語・Rust。 本書は、ファイルI/Oを使った入出力プログラムから、キーバリュー型のDB操作やメモリ操作、生のTCPを使うネットワークプログラム。そしてプロセスやスレッド、割り込みや例外処理などの低レイヤからカーネルそのものまで扱うためのノウハウを、Rust固有のテクニカルタームとともに解説します。 著者のTim McNamaraは、15年以上の時間をかけて、テキストマイニング、自然言語処理、データ工学のエキスパートになりました。彼はRust Wellingtonのオーガナイザであり、Rustプログラミングのチュートリアルを、オフラインでも、TwitchとYouTubeを介したオンラインでも、定期的に開催しています。 【本書で取り上げるジャンル】 ・メモリ操作 ・ファイルとストレージ ・ネットワーク ・時間管理 ・プロセスとスレッド ・カーネル ・割り込みと例外処理 【読者が得られること】 ・Rustによるプログラミング基礎 ・Rust固有のプログラミング手法 ・システムプログラミングの勘所 ・コンピュータサイエンスの知識",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9784798160221"
          },
          {
            "type": "ISBN_10",
            "identifier": "4798160229"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 514,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.4.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=6BZfEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=6BZfEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.co.jp/books?id=6BZfEAAAQBAJ&pg=PA3&dq=rust&hl=&cd=7&source=gbs_api",
        "infoLink": "http://books.google.co.jp/books?id=6BZfEAAAQBAJ&dq=rust&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/%E8%A9%B3%E8%A7%A3Rust%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0.html?hl=&id=6BZfEAAAQBAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/%E8%A9%B3%E8%A7%A3Rust%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-sample-pdf.acsm?id=6BZfEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=6BZfEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Microsoft Azure 、IoT 用含、\u003cb\u003eRust\u003c/b\u003e 書 Mozilla 、1500 万行含 Firefox Web 増強 \u003cb\u003eRust\u003c/b\u003e 使。同社 \u003cb\u003eRust\u003c/b\u003e-in-Firefox 、最初 2 (MP4 / )、全体的性能安定性改善。• GitHub Microsoft npm 社、\u003cb\u003eRust\u003c/b\u003e 使「毎日 130 億回以上」届 8。• Oracle 、Go 実装問題点&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "W3XRDwAAQBAJ",
      "etag": "MDsyCo2KHyc",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/W3XRDwAAQBAJ",
      "volumeInfo": {
        "title": "RustではじめるOpenGL",
        "authors": [
          "山口 聖弘"
        ],
        "publisher": "インプレスR&D",
        "publishedDate": "2020-02-21",
        "description": "本書はOSSのプログラミング言語Rustを使ってOpenGLプログラミングを行う入門書です。最も基本的な三角形の描画から実装をはじめ、少しずつソースコードを発展させていきます。照明を考慮しながら立体的なオブジェクトにテクスチャを貼り、GLSLを使って画面にエフェクトをかけるところまでを解説します。また、GUIを簡単に導入できるライブラリ「Dear ImGui」を使うことで、様々なパラメータをより直感的に操作できる親切設計になっています。 【目次】 第1章 開発環境の準備 1.1 Rustのインストール 1.2 cargoコマンド 1.3 Hello, World! 第2章 SDL 2.1 準備 2.2 プログラムの作成 2.3 プログラムの完成 第3章 OpenGL 3.1 準備 3.2 プログラムの作成 第4章 Dear ImGui 4.1 準備 4.2 プログラムの作成 4.3 プログラムの完成 4.4 効果的な使い方 第5章 3Dオブジェクト 5.1 プログラムの作成 5.2 プログラムの完成 第6章 テクスチャー 6.1 準備 6.2 プログラムの作成 6.3 プログラムの完成 6.4 光の効果 第7章 フレームバッファーオブジェクト 7.1 プログラムの作成 7.2 プログラムの完成 7.3 ポストエフェクトの効果",
        "readingModes": {
          "text": true,
          "image": true
        },
        "printType": "BOOK",
        "categories": [
          "Technology & Engineering"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.2.3.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=W3XRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=W3XRDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.co.jp/books?id=W3XRDwAAQBAJ&pg=PT7&dq=rust&hl=&cd=8&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=W3XRDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=W3XRDwAAQBAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 1760,
          "currencyCode": "JPY"
        },
        "retailPrice": {
          "amount": 1584,
          "currencyCode": "JPY"
        },
        "buyLink": "https://play.google.com/store/books/details?id=W3XRDwAAQBAJ&rdid=book-W3XRDwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1760000000,
              "currencyCode": "JPY"
            },
            "retailPrice": {
              "amountInMicros": 1584000000,
              "currencyCode": "JPY"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/Rust%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%82%8BOpenGL-sample-epub.acsm?id=W3XRDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/Rust%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%82%8BOpenGL-sample-pdf.acsm?id=W3XRDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=W3XRDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "はじめに本書は、\u003cb\u003eRust\u003c/b\u003eを使ってOpenGLプログラミングを行う入門書です。プログラミング言語である\u003cb\u003eRust\u003c/b\u003eは、最近とても注目されている言語のひとつです。Stack Overflowによる開発者を対象とした年間調査「Developer Survey」の中で、「もっとも愛される&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "EEm1DwAAQBAJ",
      "etag": "LIaf5uh45MI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/EEm1DwAAQBAJ",
      "volumeInfo": {
        "title": "Rustプログラミング入門",
        "authors": [
          "酒井　和哉"
        ],
        "publisher": "株式会社 オーム社",
        "publishedDate": "2019-10-15",
        "description": "安全なプログラムを記述しなければコンパイルできないプログラミング言語Rustの解説書。",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9784274224355"
          },
          {
            "type": "ISBN_10",
            "identifier": "427422435X"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 304,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.0.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=EEm1DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=EEm1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.co.jp/books?id=EEm1DwAAQBAJ&pg=PR3&dq=rust&hl=&cd=9&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=EEm1DwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=EEm1DwAAQBAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 3740,
          "currencyCode": "JPY"
        },
        "retailPrice": {
          "amount": 3366,
          "currencyCode": "JPY"
        },
        "buyLink": "https://play.google.com/store/books/details?id=EEm1DwAAQBAJ&rdid=book-EEm1DwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3740000000,
              "currencyCode": "JPY"
            },
            "retailPrice": {
              "amountInMicros": 3366000000,
              "currencyCode": "JPY"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/Rust%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%85%A5%E9%96%80-sample-pdf.acsm?id=EEm1DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=EEm1DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "このような背景のもと、C 言語や C++ と同様に高速性を維持しつつ、安全なソフトウェア開発が可能な次世代システムプログラミング言語として Mozilla が開発したのが \u003cb\u003eRust\u003c/b\u003e 言語であり、近年業界で注目されています。特に Stack Overflow と呼ばれる&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "j5pyEAAAQBAJ",
      "etag": "a+DTuePDNsE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/j5pyEAAAQBAJ",
      "volumeInfo": {
        "title": "Rustで始める自作組込みOS入門",
        "authors": [
          "島田 工"
        ],
        "publisher": "インプレスR&D",
        "publishedDate": "2022-06-10",
        "description": "本書は、組込みシステムやOSのような低レイヤーシステムの開発経験がないプログラマーが、自作OSをはじめるため解説書です。C言語を用いることが多い低レイヤーシステム開発について、本書ではRustを使います。RustはC言語と比較して、様々なモダンな機能やツールがそろっているだけでなく、C言語の長所である直接のメモリ制御が可能なため、高パフォーマンスな組込みシステム開発での利用が注目されています。本書はRustそのもの解説も含みますが、低レイヤーシステム開発特有のテクニックを中心に解説します。 【目次】 第1章 環境構築 第2章 ベアメタルでHello World 第3章 割り込み制御 第4章 プロセス切り替え 第5章 スケジューラを実装する 第6章 排他制御・データ共有の実装 第7章 デバイスドライバを実装する 第8章 ヒープ領域を使う 第9章 システムコールをつくる",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9784295600299"
          },
          {
            "type": "ISBN_10",
            "identifier": "4295600296"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "printType": "BOOK",
        "categories": [
          "Technology & Engineering"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.2.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=j5pyEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=j5pyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.co.jp/books?id=j5pyEAAAQBAJ&pg=PT10&dq=rust&hl=&cd=10&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=j5pyEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=j5pyEAAAQBAJ"
      },
      "saleInfo": {
        "country": "JP",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 1760,
          "currencyCode": "JPY"
        },
        "retailPrice": {
          "amount": 1584,
          "currencyCode": "JPY"
        },
        "buyLink": "https://play.google.com/store/books/details?id=j5pyEAAAQBAJ&rdid=book-j5pyEAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1760000000,
              "currencyCode": "JPY"
            },
            "retailPrice": {
              "amountInMicros": 1584000000,
              "currencyCode": "JPY"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "JP",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/Rust%E3%81%A7%E5%A7%8B%E3%82%81%E3%82%8B%E8%87%AA%E4%BD%9C%E7%B5%84%E8%BE%BC%E3%81%BFOS%E5%85%A5%E9%96%80-sample-epub.acsm?id=j5pyEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.jp/books/download/Rust%E3%81%A7%E5%A7%8B%E3%82%81%E3%82%8B%E8%87%AA%E4%BD%9C%E7%B5%84%E8%BE%BC%E3%81%BFOS%E5%85%A5%E9%96%80-sample-pdf.acsm?id=j5pyEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=j5pyEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "主にペリフェラルドライバをつくるときに見ます。 \u003cb\u003eRust\u003c/b\u003e関連 \u003cb\u003eRust\u003c/b\u003eそのものについてのドキュメントも、しっかりと見ていく必要があります。その他、最近は日本語の\u003cb\u003eRust\u003c/b\u003e の入門書もいくつか出版されているので、そちらも参考になるでしょう。"
      }
    }
  ]
}

```



