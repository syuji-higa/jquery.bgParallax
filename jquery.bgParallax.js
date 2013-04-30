/*!
 * jquery.bgParallax.js
 *
 * @version   : 1.0.0
 * @author    : syuji-higa
 * @copyright : Web Mugen (http://web-mugen.com/)
 * @license   : The MIT License
 * @link      : http://web-mugen.com/javascript/jquerybgparallax/
 * @modified  : 2013-04-30 17:05
 */

(function($){

	$.fn.bgParallax = function(option){

		// option
		var o = $.extend({
			sp: 5
		}, option);

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