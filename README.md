# Auto Scroller

## What's Plugin
このプラグインはリスト表示されたコンテンツを自動でスクロールさせます。

## How to use

1) jQueryをインクルードしてください。
```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
```

2) スクロールさせたいコンテンツに対してautoScrollerを実行します。  
```
    $("#scroll").autoScroller({    
        wait:1000,    
        target:".content",    
        display:5    
    });    
```

## OPTION

指定可能なオプションは以下の通りです。  
  wait : スクロールの待ち時間（default:3000）  
  spped : スクロールのアニメーションスピード（default:500）  
  target : autoScroller内のスクロールコンテンツのセレクタ（default:div要素を拾います）  
  display : スクロールで表示するコンテンツ数（default:5）  

### LISENCE
Copyright (c) 2014, Rei Matsushita. All rights reserved.

MIT License.

