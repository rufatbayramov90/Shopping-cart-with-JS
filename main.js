let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
// Open cart
cartIcon.onclick = () =>{
    cart.classList.add('active'); 
}
// Close Cart
cartClose.onclick = () =>{
    cart.classList.remove('active'); 
}

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

//Making Function
function ready(){
    //Remove Items From Cart
    var reomveCartButtons = document.getElementsByClassName('cart-remove')
}