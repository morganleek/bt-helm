// Libraries
import TomSelect from 'tom-select';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin( ScrollTrigger );

// Style
import './style.scss';

document.addEventListener( 'DOMContentLoaded', () => {
	// Navgation Appearance
	document.querySelectorAll( '.menu-toggle > *, .overlay-close .wp-block-button__link' ).forEach( ( item ) => {
		item.addEventListener( 'click', ( e ) => {
			const isActive = document.body.classList.toggle( 'toggle-navigation' );
			document.querySelector( '.hamburger' )?.classList.toggle( 'is-active', isActive );
		} );
	} );	

	// Style form selects
	document.querySelectorAll( '.wp-site-blocks select').forEach( ( select ) => {
		new TomSelect( select, {
			allowEmptyOption: true,
			create: true,
			// hidePlaceholder: false
		} );
	} );
	
	// Logo Fill Colour
	ScrollTrigger.matchMedia( {
		"(max-width: 767px)": function() {
			const header = document.querySelector( 'header.wp-block-template-part' );
			if( header ) {
				const start = header.offsetHeight - 1;
				gsap.timeline( {
					scrollTrigger: {
						trigger: 'main',
						start: "start " + start + "px",
						end: "bottom bottom",
						scrub: 1,
						toggleClass: { targets: header, className: 'show-shadow' },
						// markers: true
					}
				} );
			}
		},
		"(min-width: 768px)": function() {
			document.querySelectorAll( '.wp-block-post-content > .has-background' ).forEach( ( block ) => {
				const colReg = /has-(.[^\s]*)-background-color/i;
				const classes = block.classList.toString();
				const matches = classes.match( colReg );
				let backgroundColour = '';
				if( matches !== null ) {
					backgroundColour = matches[1];
				}

				gsap.timeline( {
					scrollTrigger: {
						trigger: block,
						start: "start start+=1",
						end: "bottom-=75 start",
						scrub: 1,
						toggleClass: { targets: document.body, className: 'logo-fill-background-' + backgroundColour },
						// once: true,
						// markers: true,
					}
				} );
			} );
		}
	} );

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
