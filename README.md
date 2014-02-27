# Code Lunch
- http://codelunch.fm

## build html
- volの内容を定義したJSONを作成する
    - 1/content.json
    ```javascript
    {
        "vol": number,
        "track": string,
        "date": string,
        "title": string,
        "text": string,
        "words": {"word": string, "url": string}[]
    }
    ```
- buildしてhtmlを作成する
```sh
./tool/build.js 1/content.json
```

