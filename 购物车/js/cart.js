// when the page finishes loading, run setupCart
var test;
window.onload = setupCart;
  
function setupCart() {
  // Get a list of inputs found in class="qty" table cells
  var qtyInputs = document.querySelectorAll( '.qty input' );
  // Loop through the list of inputs
  for (var i = 0; i < qtyInputs.length; i++) {
    // Run updateQty when interacting with each input 
    qtyInputs[i].oninput = updateQty;
  }
  
  // Get a list of all links with class="remove"
  var removeLinks = document.querySelectorAll( '.remove' );
  // Loop through the list of links
  for (var i = 0; i < removeLinks.length; i++) {
    // Run removeRow when clicking on each link 
    removeLinks[i].onclick = removeRow;
  }
  
  // Update the final total
  updateTotal();
}

function updateTotal() {
  // Get a list of all subTotal cells
  var subtotalCells = document.querySelectorAll( '.subtotal' );
  // Set a variable to keep track of the final total
  var total = 0;
  
  // Loop through the list of subTotal cells
  for ( var i = 0; i < subtotalCells.length; i++ ) {
    // Get the number value inside of the cell
    var subtotal = subtotalCells[i].innerHTML.match(/[0-9]+.[0-9]{2}/);
    // Calculate the new final total
    total += Number( subtotal );
  }
  // Display the final total in the total cell
  document.querySelector( '#total' ).innerHTML = '$' + total.toFixed(2);
}

function updateQty() {

  // Get the quantity value from the input
  var qtyNumber = this.value;
  // Is the quantity less than 1?
  if (qtyNumber < 1) {
    // Set the quantity to 1
    qtyNumber = 1;
  }
  // Is the quantity greater than 10?
  if (qtyNumber > 10) {
    // Set the quantity to 10
    qtyNumber = 10;
  }
  // Display the updated quantity in the input
  this.value = qtyNumber;

  // DOM navigation to locate price cell
  var priceCellDOM = this.parentNode.parentNode.children[1];
  // DOM navigation to locate subtotal cell
  var subtotalCellDOM = this.parentNode.parentNode.children[3];
  // Get the number value inside of the price cell
  var price = priceCellDOM.innerText.slice(1);
  // Calculate the new sub-total
  var sub_total = (price * qtyNumber).toFixed(2);
  // Display the sub-total in the subTotal cell
  subtotalCellDOM.innerText = "$" + sub_total;
  // Update the final total
  updateTotal();
}

// FIT9027 only
function removeRow() {
  // DOM navigation to locate the row for this link
  var tr = this.parentNode.parentNode; 
  // Remove the row from the parent table
  var tbody = tr.parentNode;  
  tbody.removeChild(tr);
  // Update the final total
  updateTotal();
  // Prevent link click from triggering navigation
  return false;
}