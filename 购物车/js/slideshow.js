var $currentItem;
var totalItems;
var timer;
var interval = 3000;

$( document ).ready( setupSlideshow );

function setupSlideshow() {
  $currentItem = $( '#slideshow li:first-child' );
  $currentItem.fadeIn();
  totalItems = $( '#slideshow li' ).length;
  timer = setTimeout( nextItem, interval );
  $( '#slideshow' ).on( 'mouseenter', function(){ clearTimeout( timer ); } );
  $( '#slideshow' ).on( 'mouseleave', function(){ timer = setTimeout( nextItem, interval ); } );
  $( '#slideshow' ).on( 'click', function(){ nextItem(); clearTimeout( timer ); } );
}

function nextItem() {
  $currentItem.fadeOut();
  if ( $currentItem.index() + 1 < totalItems ) {
    $currentItem = $currentItem.next();
  } else {
    $currentItem = $( '#slideshow li:first-child' );
  }
  $currentItem.fadeIn();
  timer = setTimeout( nextItem, interval );
}