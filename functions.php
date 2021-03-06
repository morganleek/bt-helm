<?php
	// Require the composer autoload for getting conflict-free access to enqueue
	require_once __DIR__ . '/vendor/autoload.php';

	// Other functions
	require get_template_directory() . '/inc/block-patterns.php';
	// WEI Images tools
	require get_template_directory() . '/inc/images.php';
	// Extra tools
	require get_template_directory() . '/inc/tools.php';

	// Do stuff through this plugin
	class BoneThemeInit {
		public $enqueue;

		public function __construct() {
			$theme_version = wp_get_theme()->get( 'Version' );
			$version_string = is_string( $theme_version ) ? $theme_version : '1.0.0';

			// It is important that we init the Enqueue class right at the plugin/theme load time
			$this->enqueue = new \WPackio\Enqueue(
				// Name of the project, same as `appName` in wpackio.project.js
				'bonesTheme',
				// Output directory, same as `outputPath` in wpackio.project.js
				'dist',
				// Version of your plugin
				$version_string,
				// Type of your project, same as `type` in wpackio.project.js
				'theme',
				// Plugin location, pass false in case of theme.
				false,
				// Theme type
				'regular'
			);
			// Enqueue a few of our entry points
			add_action( 'init', [$this, 'bones_theme_font_styles' ], 10 );
			add_action( 'init', [$this, 'bones_theme_register_menus'], 20 );
			add_action( 'wp_enqueue_scripts', [ $this, 'plugin_enqueue' ] );
			add_action( 'after_setup_theme', [ $this, 'bones_theme_support' ] );
			add_action( 'admin_init', [$this, 'bones_theme_font_styles' ] );
			add_action( 'wp_head', [ $this, 'bones_theme_load_favicons' ] );
			add_action( 'wp_head', [ $this, 'bones_theme_session' ] );
			add_action( 'init', [ $this, 'bones_name_register_block_styles' ], 100 );
			add_filter( 'body_class', [$this, 'bones_theme_body_class'], 20, 2 );
			add_action( 'wp_footer', [$this, 'bones_theme_inline_svg'], 10 );
			add_shortcode( 'helm_questions', [$this, 'bones_theme_helm_questions'] );
			add_filter( 'excerpt_length', [$this, 'bones_theme_excerpt_length'], 50 );
		}

		public function plugin_enqueue() {
			$this->enqueue->enqueue( 'app', 'main', [] );

			// Inline styles for fonts
			wp_add_inline_style( 'bones-theme-style', $this->bones_theme_get_font_face_styles() );
		}
		
		public function bones_theme_support() {
			// Add support for block styles.
			add_theme_support( 'wp-block-styles' );

			// Add post thumbnails
			add_theme_support( 'post-thumbnails', array( 'post' ) );

			// Add responsive embedded content
			add_theme_support( 'responsive-embeds' );
			
			// Add editor styles
			add_theme_support( 'editor-styles' );

			add_theme_support( 'custom-spacing' );

			// add_editor_style( 'style.css' );

			// Enqueue editor styles.
			$assets = $this->enqueue->getAssets( 'app', 'main', [
				'js' => true,
				'css' => true,
				'js_dep' => [],
				'css_dep' => [],
				'in_footer' => true,
				'media' => 'all',
			] );

			if( !empty( $assets['css' ] ) ) {
				foreach( $assets['css'] as $css ) {
					$url = str_replace( trailingslashit( get_template_directory_uri() ), '', $css['url'] );
					add_editor_style( $url );
				}
			}
		}

		public function bones_theme_font_styles() {
			wp_add_inline_style( 'wp-block-library', $this->bones_theme_get_font_face_styles() );
		}

		public function bones_theme_get_font_face_styles() {
			return "
				@font-face {
					font-family: 'national-compressed-extrabold';
					src: url('" . get_theme_file_uri( 'assets/fonts/national2compressed-extrabold.woff2' ) . "') format('woff2'),
							url('" . get_theme_file_uri( 'assets/fonts/national2compressed-extrabold.woff' ) . "') format('woff');
					font-weight: normal;
					font-style: normal;

				}
				
				@font-face {
					font-family: 'geoslab703_md_btlight';
					src: url('" . get_theme_file_uri( 'assets/fonts/geometricslab703bt-light-webfont.woff2' ) . "') format('woff2'),
							url('" . get_theme_file_uri( 'assets/fonts/geometricslab703bt-light-webfont.woff' ) . "') format('woff');
					font-weight: normal;
					font-style: normal;

				}

				@font-face {
					font-family: 'geoslab703_md_btmedium';
					src: url('" . get_theme_file_uri( 'assets/fonts/geometricslab703bt-medium-webfont.woff2' ) . "') format('woff2'),
							url('" . get_theme_file_uri( 'assets/fonts/geometricslab703bt-medium-webfont.woff' ) . "') format('woff');
					font-weight: normal;
					font-style: normal;

				}

				@font-face {
					font-family: 'geoslab703_md_btbold';
					src: url('" . get_theme_file_uri( 'assets/fonts/geometricslab703bt-bold-webfont.woff2' ) . "') format('woff2'),
							url('" . get_theme_file_uri( 'assets/fonts/geometricslab703bt-bold-webfont.woff' ) . "') format('woff');
					font-weight: normal;
					font-style: normal;

				}
			";
		}

		public function bones_theme_load_favicons() {
			print '<link rel="icon" href="' . get_theme_file_uri( 'assets/favicons/favicon.ico' ) . '" sizes="any">';
			print '<link rel="icon" href="' . get_theme_file_uri( 'assets/favicons/favicon.svg' ) . '" type="image/svg+xml">';
		}
		
		public function bones_theme_session() {
			if( !session_id() ) {
				session_start([
					'cookie_lifetime' => 86400,
					'read_and_close'  => true,
				]);
			}

			print '<meta name="sid" content="' . session_id() . '">';
		}

		public function bones_name_register_block_styles() {
			// Media & Text
			register_block_style( 'core/media-text', [
				'name' => 'stacked',
				'label' => __( 'Stacked', 'bones_name' )
			] );

			register_block_style( 'core/media-text', [
				'name' => 'text-over',
				'label' => __( 'Text Over', 'bones_name' )
			] );
	
			// Cover
			register_block_style( 'core/cover', [
				'name' => 'background-contained',
				'label' => __( 'Background Contained', 'bones_name' ),
			] );

			// Image
			register_block_style( 'core/image', [
				'name' => 'oversized',
				'label' => __( 'Oversized', 'bones_name' ),
			] );
			
			register_block_style( 'core/image', [
				'name' => 'negative-margin',
				'label' => __( 'Negative Margin', 'bones_name' ),
			] );

			// Header
			register_block_style( 'core/heading', [
				'name' => 'narrow',
				'label' => __( 'Narrow', 'bones_name' ),
			] );

			// Block Quote
			register_block_style( 'core/quote', [
				'name' => 'red-text',
				'label' => __( 'Red Text', 'bones_name' ),
			] );
			register_block_style( 'core/quote', [
				'name' => 'cream-text',
				'label' => __( 'Cream Text', 'bones_name' ),
			] );
			register_block_style( 'core/quote', [
				'name' => 'blue-text',
				'label' => __( 'Blue Text', 'bones_name' ),
			] );
			register_block_style( 'core/quote', [
				'name' => 'yellow-text',
				'label' => __( 'Yellow Text', 'bones_name' ),
			] );
	
			// Columns
			// register_block_style( 'core/columns', [
			//   'name' => 'no-bottom-margin',
			//   'label' => __( 'No bottom margin', 'bones_name' ),
			// ] );
			// register_block_style( 'core/columns', [
			//   'name' => 'columns-border',
			//   'label' => __( 'Columns border', 'bones_name' ),
			// ] );
	
			// Gallery
			// register_block_style( 'core/gallery', [
			//   'name' => 'gallery-slider',
			//   'label' => __( 'Gallery Slider', 'bones_name' ),
			// ] );
	
			// Buttons
			// register_block_style( 'core/button', [
			//   'name' => 'play',
			//   'label' => __( 'Play', 'bones_name' ),
			// ] );
		}

		public function bones_theme_body_class( $classes, $class ) {
			global $post;
			if( $post->post_type == 'page' ) {
				$classes[] = $post->post_type . '-' . $post->post_name;
			}

			return $classes;
		}

		public function bones_theme_register_menus() {
			register_nav_menus(
				array( 
					'top' => __('Top Menu', '_themename'),
					'bottom' => __('Bottom Menu', '_themename')
				)
			);
		}

		public function bones_theme_inline_svg() {
			print '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="position: absolute; left: -9999px; overflow: hidden;">
				<clipPath id="menuClip" clipPathUnits="objectBoundingBox">
					<path d="M0,1 H0.724 c0.04,-0.068,0.097,-0.169,0.157,-0.295 c0.082,-0.182,0.12,-0.264,0.119,-0.341 C0.982,0.17,0.742,0.042,0.652,0 H0"></path>
				</clipPath>
			</svg>';
		}

		public function bones_theme_helm_questions( $atts, $content = '' ) {
			$html = '';

			$html = '<h4 class="questions-title has-text-align-center has-brand-blue-color has-text-color">I am seeking behavioural<br>health support for&hellip;</h4>';

			$html .= '<div class="wp-block-questions" id="questions-surround">';
				$html .= '<div class="questions is-visible-question" data-question-label="Person:" data-question-set="0">';
					$html .= '<h4><a href="#" data-answer="initialConsultation">Myself</a></h4>';
					$html .= '<h4><a href="#" data-answer="supportedAdvice">My Partner</a></h4>';
					$html .= '<h4><a href="#" data-answer="supportedAdvice">My Son</a></h4>';
					$html .= '<h4><a href="#" data-answer="supportedAdvice">My Brother</a></h4>';
					$html .= '<h4><a href="#" data-answer="supportedAdvice">My Friend</a></h4>';
				$html .= '</div>';

				$html .= '<div class="questions" data-question-label="Issue:" data-question-set="1">';
					$html .= '<h4><a href="#" data-answer="drugs" data-redirect-others="' . get_bloginfo( 'url' ) . '/drugs-how-can-family-and-friends-help" data-redirect="' . get_bloginfo( 'url' ) . '/drugs">Drugs</a></h4>';
					$html .= '<h4><a href="#" data-answer="alcohol" data-redirect-others="' . get_bloginfo( 'url' ) . '/alcohol-how-can-family-and-friends-help" data-redirect="' . get_bloginfo( 'url' ) . '/alcohol">Alcohol</a></h4>';
					$html .= '<h4><a href="#" data-answer="gambling" data-redirect-others="' . get_bloginfo( 'url' ) . '/gambling-how-can-family-and-friends-help" data-redirect="' . get_bloginfo( 'url' ) . '/gambling">Gambling</a></h4>';
					$html .= '<h4><a href="#" data-answer="anger" data-redirect-others="' . get_bloginfo( 'url' ) . '/emotions-how-can-family-and-friends-help" data-redirect="' . get_bloginfo( 'url' ) . '/emotions">Handling Emotions</a></h4>';
					$html .= '<h4><a href="#" data-answer="all" data-redirect-others="' . get_bloginfo( 'url' ) . '/other-difficulties-in-life" data-redirect="' . get_bloginfo( 'url' ) . '/other-difficulties-in-life">Other Difficulties in Life</a></h4>';
				$html .= '</div>';
			$html .= '</div>';

			return $html;
		}

		public function bones_theme_excerpt_length( $length ) {
			return 15;
		}
	}

	// Init
	new BoneThemeInit();