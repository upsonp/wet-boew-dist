/*
 * @title WET-BOEW Progress polyfill
 * @overview The <progress> element displays the progress of a task.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
(function( $, window, vapour ) {
"use strict";

/* 
 * Variable and function definitions. 
 * These are global to the polyfill - meaning that they will be initialized once per page.
 */
var selector = "progress",
	$document = vapour.doc,

	/*
	 * Init runs once per polyfill element on the page. There may be multiple elements. 
	 * It will run more than once if you don't remove the selector from the timer.
	 * @method init
	 * @param {jQuery Event} event `timerpoke.wb` event that triggered the function call
	 */
	init = function( event ) {

		// All plugins need to remove their reference from the timer in the init sequence unless they have a requirement to be poked every 0.5 seconds
		window._timer.remove( selector );

		progress( event.target );
	},

	progress = function( elm ) {
		var $elm = $( elm ),
			$progress = $elm.children( ".outer, .undef" ),
			ariaValueMax = 1.0,
			ariaValueNow;

		$elm.off( "DOMAttrModified propertychange" );
		elm.setAttribute( "role", "progressbar" );

		if ( elm.getAttribute( "value" ) !== null ) {
			if ( $progress.length === 0 ) {
				$progress = $( "<div class='outer'><div class='inner'/></div>" );
				$elm.append( $progress );
			}

			try {
				ariaValueMax = parseFloat( elm.getAttribute( "max" ) );
			} catch ( error ) {
			}

			ariaValueNow = elm.getAttribute( "value" );
			if ( ariaValueNow > ariaValueMax ) {
				ariaValueNow = ariaValueMax;
			}

			$progress.children( ".inner" ).css( "width", ( ( ariaValueNow / ariaValueMax ) * 100 ) + "%" );

			elm.setAttribute( "aria-valuemin", 0 );
			elm.setAttribute( "aria-valuemax", ariaValueMax );
			elm.setAttribute( "aria-valuenow", ariaValueNow );
		} else if ( $progress.length === 0 ) {
			$elm.append( "<div class='undef'/>" );
		}

		setTimeout(function () {
			$elm.on( "DOMAttrModified propertychange", function() {
				progress( this );
			});
		}, 0 );
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb", selector, init );

// Add the timer poke to initialize the plugin
window._timer.add( selector );

})( jQuery, window, vapour );