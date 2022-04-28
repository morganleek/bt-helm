<?php
	return array(
		'title'      => __( 'Grid of Morgan', 'twentytwentytwo' ),
		'categories' => array( 'query' ),
		'blockTypes' => array( 'core/query' ),
		'content'    => '<!-- wp:query {"queryId":8,"query":{"perPage":12,"pages":0,"offset":0,"postType":"post","categoryIds":[],"tagIds":[],"order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"displayLayout":{"type":"flex","columns":3}} -->
		<div class="wp-block-query"><!-- wp:post-template -->
		<!-- wp:post-featured-image {"isLink":true} /-->
		
		<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}}} -->
		<div class="wp-block-group"><!-- wp:post-title {"level":4,"isLink":true} /-->
		
		<!-- wp:post-excerpt {"textAlign":"left","moreText":"Read more","fontSize":"medium"} /--></div>
		<!-- /wp:group -->
		<!-- /wp:post-template -->
		
		<!-- wp:query-pagination {"paginationArrow":"arrow","layout":{"type":"flex","justifyContent":"center"}} -->
		<!-- wp:query-pagination-previous /-->
		
		<!-- wp:query-pagination-next /-->
		<!-- /wp:query-pagination --></div>
		<!-- /wp:query -->',
	);