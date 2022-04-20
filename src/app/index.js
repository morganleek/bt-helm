// Libraries
import TomSelect from 'tom-select';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin( ScrollTrigger );

// Style
import './style.scss';

document.addEventListener( 'DOMContentLoaded', () => {
	// Navgation Appearance
	document.querySelectorAll( '.menu-toggle > *' ).forEach( ( item ) => {
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
} );

