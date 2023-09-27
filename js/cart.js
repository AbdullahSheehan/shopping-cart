class Cart {
	constructor() {}
	hideMtMsg() {
		document.querySelector(".cartEmpty").classList.add("d-none");
	}
	showMtMsg() {
		document.querySelector(".cartEmpty").classList.remove("d-none");
	}
	addToCart(name, price) {
		this.hideMtMsg();
		let li = `
        <li
        class="productItem list-group-item d-flex justify-content-between align-items-center border-top">
        ${name}
        <div>
            <span class="badge bg-primary rounded-pill mx-3"
                >${price}</span
            >
            <button class="btn" deleteBtn="xD">
                X
            </button>
        </div>
    </li>
        `;
		document.querySelector(".cartList").innerHTML += li;
	}
	deleteFromCart(list) {
        let ul = list.parentNode;
        list.remove();
        if(ul.childElementCount <= 2) {
            this.showMtMsg();
        }
    }
}
