jQuery( document ).ready( function( $ ) {

    $( '#open-search' ).click( function() {
        $( '#open-search' ).toggleClass( 'active' );
		$( '#search-box' ).toggleClass( 'search-open' );
		$( '#open-nav' ).removeClass( 'active' );
		$( '#primary-nav-box' ).removeClass( 'menu-open' );
		$( '#language-current' ).removeClass( 'active' );
		$( '#language-list-parent' ).removeClass( 'menu-lang-open' );
		setTimeout( function() {
            $( '#search-form-input' ).focus();
        }, 50 );
	} );

	$( '#open-nav' ).click( function() {
        $( '#open-nav' ).toggleClass( 'active' );
		$( '#primary-nav-box' ).toggleClass( 'menu-open' );
		$( '#open-search' ).removeClass( 'active' );
		$( '#search-box' ).removeClass( 'search-open' );
		$( '#language-current' ).removeClass( 'active' );
		$( '#language-list-parent' ).removeClass( 'menu-lang-open' );
	} );

	$( '#language-current' ).click( function() {
        $( '#language-current' ).toggleClass( 'active' );
		$( '#language-list-parent' ).toggleClass( 'menu-lang-open' );
		$( '#open-nav' ).removeClass( 'active' );
		$( '#primary-nav-box' ).removeClass( 'menu-open' );
		$( '#open-search' ).removeClass( 'active' );
		$( '#search-box' ).removeClass( 'search-open' );
	} );

	$( document ).ready( function() {
        $( '#search-form' ).submit( function() {
            if ( $.trim( $( '#search-form-input' ).val() ) == '' ) {
                $( '#search-form-input' ).attr( 'placeholder', search_placeholder_error ).val( '' ).focus().addClass( 'error' );
                return false;
            } else {
                $( '#search-form' ).submit();
                $( '#search-form-input' ).attr( 'placeholder', search_placeholder ).val( '' ).removeClass( 'error' );
                return false;
            }
        } )
    } );
    
    $( '#search-form-input' ).focusout( function() {
        $( '#search-form-input' ).removeClass( 'error' ).attr( 'placeholder', search_placeholder );
    } );

	$( document ).ready( function() {
		$( function() {
			$( window ).scroll( function() {
				if ( $( this ).scrollTop() > 250 ) {
					$( '#box-back-to-top' ).addClass( 'visible' );
				} else {
					$( '#box-back-to-top' ).removeClass( 'visible' );
				}
			} );
			$( '#box-back-to-top a' ).click( function() {
				$( 'body,html' ).animate( {
					scrollTop: 0
				}, 350 );
				return false;
			} );
		} );
	} );

} );
