単純だけど簡単な背景画像のパララックスを実装するjQueryプラグイン  
jquery.bgParallax
======================
スクロールで背景画像がズレるやつを制作しました。パララックスとか言うやつですね。まあコンテンツごとの背景がズレるだけなので、視差と呼べるかは微妙ですけれど、他のをみるとそう呼んでもいい感じですね。

とりあえずこのプラグインのウリはタイトル通り単純だけど簡単ってところです。パララックスする要素を指定するだけでOK。あとは動きの量を調整したければする位です。まあ、大したモノではありませんがチョット試してみようかなって思ってる方にはイイかもしれません。

使い方
------
### html script ###
パララックスさせる要素毎にプラグインを実行する。
	<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
	<script type="text/javascript">
	$('#box1').bgParallax();
	$('#box2').bgParallax();
	$('#box3').bgParallax();
	</script>

### html body ###
	<div id="box-wrap">
		<div id="box1"></div>
		<div id="box2"></div>
		<div id="box3"></div>
	</div>

### css ###
	#box-wrap > div {
		position: relative;
	}
	#box1 {
		background-image: url(1.jpg);
		z-index: 1;
	}
	#box2 {
		background-image: url(2.jpg);
		z-index: 2;
	}
	#box3 {
		background-image: url(3.jpg);
		z-index: 3;
	}

パラメータ
----------------
+  `sp` : デフォルト `5`  
	_視差の量_ 数値が小さいほど視差が大きくなる

ライセンス
----------
Copyright &copy; syuji-higa  
Distributed under the [MIT License][MIT].  

[MIT]: http://www.opensource.org/licenses/mit-license.php
