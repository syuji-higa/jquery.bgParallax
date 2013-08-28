単純だけど簡単な背景画像のパララックスを実装するjQueryプラグイン
======================
シンプルなモーダルウィンドウを制作しました。  
有名なモーダルウィンドウに比べらたら出来ないことだらけです。

使い方
------
### html script ###
	<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
	<script type="text/javascript">
	$('#box1').bgParallax();
	$('#box2').bgParallax();
	$('#box3').bgParallax();
	$('#box4').bgParallax();
	</script>

### html body ###
	<div id="box-wrap">
		<div id="box1"></div>
		<div id="box2"></div>
		<div id="box3"></div>
		<div id="box4"></div>
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
	#box4 {
		background-image: url(4.jpg);
		z-index: 4;
	}

パラメータ
----------------
	def MyFunction(sp, param2, ...)

+  `sp` :  
	_視差の量_ 数値が小さいほど視差が大きくなる（デフォルト：5）

ライセンス
----------
Copyright &copy; syuji-higa  
Distributed under the [MIT License][MIT].  

[MIT]: http://www.opensource.org/licenses/mit-license.php
