'use strict';

const pathToImages = 'images';
const pathToProductsImages = `${pathToImages}/featured`;
const featuredItemsEl = document.querySelector('.featuredItems');

function getProductMarkup(product) {
    return `
        <div class="featuredItem">

            <div class="featuredImgWrap">
                <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
                <div class="featuredImgDark">
                    <button data-productId="${product.id}">
                        <img src="${pathToImages}/cart.svg" alt="">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div class="featuredData">
                <div class="featuredName">
                    ${product.name}
                </div>
                <div class="featuredText">
                    ${product.description}
                </div>
                <div class="featuredPrice">
                    $${product.price}
                </div>
            </div>

        </div>
    `;
}

function insertProductsIntoPage(products, featuredItemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}

/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}

insertProductsIntoPage(products, featuredItemsEl);
addEventListenersForAddToCartButtons();
