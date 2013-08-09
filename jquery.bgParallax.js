/*!
 * jquery.bgParallax.js
 *
 * @version   : 1.0.1
 * @author    : syuji-higa
 * @copyright : syuji-higa (https://github.com/syuji-higa)
 * @license   : The MIT License
 * @link      : http://deom.syuji-higa.com/javascript/jquery.bgParallax/sample
 * @modified  : 2013-08-10 21:00
 */

(function($){

	$.fn.bgParallax = function(options){

		// options
		var o = $.extend({
			sp: 5
		}, options);

		var $win  = $(window),
		    $self = $(this),
		    pos = $self.css('background-position'),
		    os = $self.offset().top,
		    osNextCheck = $self.next().size();

		if(osNextCheck != 0){
			var osNext = $self.next().offset().top;
		}
		else{
			var h = $self.height(),
			    osNext = os + h;
		}
		if(pos){
			var posArray = pos.split(' '),
			    posY = posArray[1].replace('px', '');
		}
		else{
			var posY = $self.css('background-position-y').replace('px', '');
		}

		/* ==============================
			events
		============================== */

		$win.scroll(function(){
			var y = $(this).scrollTop(),
			    winH = $win.height();
			if(pos){
				if(y > os - winH && y < osNext){
					$self.css('background-position', posArray[0] + parseInt(-y / o.sp + os / o.sp) + 'px');
				}
			}
			else{
				$self.css('background-position-y', parseInt(-y / o.sp + os / o.sp) + 'px');
			}
		});

	}

})(jQuery);