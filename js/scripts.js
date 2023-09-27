let cart = new Cart();
document.querySelectorAll('.addtoCart').forEach(element => {
    element.addEventListener('click', (e)=>{
        // console.log(e.target.previousElementSibling.childNodes[1].textContent); // Price 
        // console.log(e.target.previousElementSibling.parentNode.previousElementSibling.textContent);
        let productName = e.target.previousElementSibling.parentNode.previousElementSibling.textContent;
        let productPrice = e.target.previousElementSibling.childNodes[1].textContent;
        cart.addToCart(productName, productPrice);
    })
});

document.querySelector('.cartList').addEventListener('click', (e) => {
    if(e.target.hasAttribute('deleteBtn')){
        cart.deleteFromCart(e.target.parentNode.parentNode);
    }
})