// Libraries
import TomSelect from 'tom-select';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin( ScrollTrigger );

// Style
import './style.scss';

// Extract Background Colour from Gutenberg Classes
function bonesthemeExtractColour( node ) {
	const colReg = /has-(.[^\s]*)-background-color/i;
	const classes = node.classList.toString();
	const matches = classes.match( colReg );
	
	if( matches !== null ) {
		return matches[1];
	}
	else {
		const colRegGrad = /has-(.[^\s]*)-gradient-background/i;
		const matchesGrad = classes.match( colRegGrad );
		if( matchesGrad !== null ) {
			return matchesGrad[1];
		}
	}

	return '';
}

document.addEventListener( 'DOMContentLoaded', () => {
	// Sid Replace
	
	document.querySelectorAll( 'a[href*="{{sid}}"]' ).forEach( ( link ) => {
		if( document.querySelector( 'meta[name="sid"]' ) ) {
			const sid = document.querySelector( 'meta[name="sid"]' )?.attributes.content.value;
			link.href = link.href.replace( /{{sid}}/i, sid );
		}
	} );

	// Navgation Appearance
	document.querySelectorAll( '.menu-toggle > .hamburger, .overlay-close .wp-block-button__link' ).forEach( ( item ) => {
		item.addEventListener( 'click', ( e ) => {
			const isActive = document.body.classList.toggle( 'toggle-navigation' );
			document.querySelector( '.menu-toggle .hamburger' )?.classList.toggle( 'is-active', isActive );
		} );
	} );	

	// iOS window height work around  
  window.addEventListener( 'resize', bones_theme_window_height );
  bones_theme_window_height();

	// Style form selects
	document.querySelectorAll( '.wp-site-blocks select').forEach( ( select ) => {
		new TomSelect( select, {
			allowEmptyOption: true,
			create: true,
			// hidePlaceholder: false
		} );
	} );
	
	// Nav Appearance on Scroll
	if( document.querySelector( '.page-template-page-home-landing' ) == null ) {
		// console.log( 'working' );
		const header = document.querySelector( 'header.wp-block-template-part' );
		if( header ) {
			const start = 20; // header.offsetHeight - 1;
			gsap.timeline( {
				scrollTrigger: {
					trigger: 'main',
					start: start + "px start",
					// end: "bottom bottom",
					scrub: 1,
					toggleClass: { targets: header, className: 'show-shadow' },
					// markers: true
				}
			} );
		}
	}

	// Nav Apperance before Scroll
	if( document.querySelector( 'main > .wp-block-post-content > *:first-child' ) ) {
		const firstBlock = document.querySelector( 'main > .wp-block-post-content > *:first-child' );
		// Get colour from Gutenberg classes
		const backgroundColour = bonesthemeExtractColour( firstBlock );
		if( backgroundColour != '' ) {
			document.body.classList.add( 'logo-fill-background-' + backgroundColour );
		}
	}

	// Logo Fill Colour
	// ScrollTrigger.matchMedia( {
	// 	"(max-width: 767px)": function() {
			
	// 	},
		// "(min-width: 768px)": function() {
		// 	document.querySelectorAll( '.wp-block-post-content > .has-background' ).forEach( ( block ) => {
		// 		const colReg = /has-(.[^\s]*)-background-color/i;
		// 		const classes = block.classList.toString();
		// 		const matches = classes.match( colReg );
		// 		let backgroundColour = '';
		// 		if( matches !== null ) {
		// 			backgroundColour = matches[1];
		// 		}
		// 		else {
		// 			const colRegGrad = /has-(.[^\s]*)-gradient-background/i;
		// 			const matchesGrad = classes.match( colRegGrad );
		// 			if( matchesGrad !== null ) {
		// 				backgroundColour = matchesGrad[1];
		// 			}
		// 		}

		// 		if( backgroundColour !== '' ) {
		// 			gsap.timeline( {
		// 				scrollTrigger: {
		// 					trigger: block,
		// 					start: "start start+=1",
		// 					end: "bottom-=75 start",
		// 					scrub: 1,
		// 					toggleClass: { targets: document.body, className: 'logo-fill-background-' + backgroundColour },
		// 					// once: true,
		// 					// markers: true,
		// 				}
		// 			} );
		// 		}
		// 	} );
		// }
	// } );

	// Questions
	document.querySelectorAll( '.wp-block-questions a' ).forEach( ( link ) => {
		link.addEventListener( 'click', ( e ) => {
			e.preventDefault();
			

			// Current Question
			const question = link.closest( '.questions' );
			
			const i = parseInt( question.dataset.questionSet ) + 1;
			const label = question.dataset.questionLabel;
			const answer = e.target.innerHTML;

			// Store questions and answer for later user
			localStorage.setItem( 'question-' + i + '-label', label );
			localStorage.setItem( 'question-' + i + '-answer', answer );

			// Show Next Question
			question.classList.remove( 'is-visible-question' );
			if( question.nextSibling !== null ) {
				question.nextSibling.classList.add( 'is-visible-question' );
			}
			else {
				document.querySelector( '.questions-title' )?.classList.add( 'is-hidden' );
				if( e.target.dataset['redirect'] ) {
					window.location = e.target.dataset['redirect'];
				}
			}
		} );
	} );
} );

// iOS window height
const bones_theme_window_height = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}

window.addEventListener( 'load', () => {
	// Landing Splash
	if( document.querySelector( 'body.page-home' ) ) {
		// Check if has been loaded before
		if( localStorage.getItem( 'helm-splash-loaded' ) ) {
			// Do nothing other than loading the normal page
			document.querySelector( '.wp-site-blocks' )?.classList.add( 'is-visible' );
		}
		else {
			if( document.querySelector( '.wp-block-template-part.overlay-splash' ) ) {
				// Show Spash
				document.querySelector( '.wp-block-template-part.overlay-splash' ).classList.add( 'is-visible' );

				// Load page behind
				setTimeout( () => {
					document.querySelector( '.wp-site-blocks' )?.classList.add( 'is-visible' );
				}, 500 );

				// Hide after two seconds
				setTimeout( () => {
					document.querySelector( '.wp-block-template-part.overlay-splash' ).classList.remove( 'is-visible' );
				}, 4000 );
				
	
			}
			else {
				// Make visible if something has gone wrong
				document.querySelector( '.wp-site-blocks' )?.classList.add( 'is-visible' );
			}
			// Set localStorage marker
			localStorage.setItem( 'helm-splash-loaded', true );
		}
	}
} );
