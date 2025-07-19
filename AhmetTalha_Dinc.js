(() => {
    const html = `
    <div class="containerr">
      <button class="goLeft"><</button>
      <div class="carousel-wrapper">
        <div class="carousel-header">
          <h2 class="carousel-text">Beğenebileceğinizi düşündüklerimiz</h2>
        </div>
        <div class="carousel-items"></div>
      </div>
      <button class="goRight">></button>
    </div>
  `;

    const css = `
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');

    .goLeft, .goRight {
      background-color: #fef6eb;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: #f28e00;
      font-size: 20px;
      font-weight: bolder;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
      border: none;
      user-select: none;
    }

   

    .containerr {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 20px 15px;
      box-sizing: border-box;
      overflow: hidden;
    }

    .carousel-wrapper {
      flex: 1;
      overflow: hidden;
    }

    .carousel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fef6eb;
      padding: 25px 67px;
      border-top-left-radius: 35px;
      border-top-right-radius: 35px;
      margin-bottom:20px;
    }

    .carousel-text {
      font-family: Quicksand-Bold;
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.11;
      color: #f28e00;
      margin: 0;
    }

    .carousel-items {
      display: flex;
      gap: 15px;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding-bottom: 10px;
     
    }

    .carousel-items::-webkit-scrollbar {
      display: none; 
    }

    .carousel-product {
      z-index: 1;
      display: block;
      cursor: pointer;
      font-family: Poppins, cursive;
      font-size: 12px;
      width: 235px;
      padding: 15px;
      color: #7d7d7d;
      margin: 0 0 20px 3px;
      border: 1px solid #ededed;
      border-radius: 10px;
      position: relative;
      text-decoration: none;
      background-color: #fff;
      box-sizing: border-box;
    }

    .upper-side {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .carousel-product:hover {
      border: 3.5px solid rgb(242, 142, 0);
    }

    .image-container {
      position: relative;
      height: 203px;
      max-width: 100%;
      margin-bottom: 45px;
    }

    .product-image {
      max-width: 100%;
      height: 243px;
      display: block;
      margin-bottom: 45px;
      object-fit: contain;
    }

    .corner-image {
      position: absolute;
    }

    .corner-image.most-Sale-Image {
      top: 10px;
      left: 10px;
      width: 55px;
      height: 55px;
    }

    .corner-image.add-Favorite {
      top: 10px;
      right: 10px;
    }

    .favDiv {
      background-color: black;
    }

    .add-Favorite-wrapper {
      top: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      box-shadow: 0 2px 5px rgba(0,0,0,0.15);
      cursor: pointer;
    }

    .add-Favorite-wrapper:hover {
      transform: scale(1.1);
    }

    .add-Favorite-icon {
      width: 20px;
      height: 20px;
    }

    .product-header {
      font-weight: bolder;
      height: 42px;
    }

    .product-name {
      font-weight: normal;
    }

    .product-price {
      display: block;
      width: 100%;
      font-size: 2.2rem;
      font-weight: 600;
      height: 43px;
      margin-top: 45px;
    }

    .basket-button {
      width: 100%;
      padding: 15px 20px;
      border-radius: 37.5px;
      background-color: #fff7ec;
      color: #f28e00;
      font-family: Poppins, cursive;
      font-size: 1.4rem;
      font-weight: 700;
      margin-top: 40px;
      border: none;
      cursor: pointer;
    }

    .basket-button:hover {
      color: white;
      background-color: rgb(242, 142, 0);
    }

    .oldPrice {
      font-size: 1.4rem;
      font-weight: 500;
      text-decoration: line-through;
    }

    .newPrice {
      color: #00a365;
      font-size: 18px;
      font-weight: 700;
      display: inline-flex;
      justify-content: center;
    }

    @media (max-width: 768px) {
  .carousel-text {
    font-size: 1.6rem;
    text-align: center;
  }

  .carousel-header {
    flex-direction: column;
    padding: 15px;
    gap: 10px;
  }

  .carousel-product {
    width: 180px;
    font-size: 11px;
  }

  .product-image {
    height: 160px;
  }

  .goLeft, .goRight {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
  `;

    if (window.location.pathname === "/") {
        const api = 'https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json'

        const addContentAfterStories = () => {
            const targetElement = document.querySelector('.ins-preview-wrapper');

            if (targetElement) {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = html;

                const insertedElement = wrapper.firstElementChild;
                targetElement.insertAdjacentElement('afterend', insertedElement);

                const style = document.createElement('style');
                style.textContent = css;
                document.head.appendChild(style);

                const goLeftBtn = insertedElement.querySelector('.goLeft');
                const goRightBtn = insertedElement.querySelector('.goRight');
                const carouselItems = insertedElement.querySelector('.carousel-items');

                goLeftBtn.addEventListener('click', () => {
                    carouselItems.scrollBy({
                        left: -300,
                        behavior: 'smooth',
                    });
                });

                goRightBtn.addEventListener('click', () => {
                    carouselItems.scrollBy({
                        left: 300,
                        behavior: 'smooth',
                    });
                });
            }
        };

        const getAllProducts = async () => {
            try {
                let products = null
                const datas = localStorage.getItem('products');
                if (datas && datas.length > 0) {
                    products = JSON.parse(datas);
                }
                else {
                    const response = await fetch(api);
                    products = await response.json();
                    localStorage.setItem('products', JSON.stringify(products));
                }

                // Dogru çalışıyor. Verileri localstorageye kaydettim console.log(localStorage.getItem('products'))



                // Flexbox doğru çalışıyor        const limitedProducts = products.slice(0, 5);

                const targetDiv = document.querySelector('.carousel-items');
                if (!targetDiv) return;

                products.forEach(product => {
                    const link = document.createElement('a');
                    link.href = product.url;
                    link.target = '_blank';
                    link.style.textDecoration = 'none';

                    const productDiv = document.createElement('div');
                    productDiv.className = 'carousel-product';

                    link.appendChild(productDiv);
                    targetDiv.appendChild(link);

                    const upperSide = document.createElement('div');
                    upperSide.className = 'upper-side';
                    productDiv.appendChild(upperSide);

                    const imageContainer = document.createElement('div');
                    imageContainer.className = 'image-container';
                    upperSide.appendChild(imageContainer);

                    const productImage = document.createElement('img');
                    productImage.className = 'product-image';
                    productImage.src = product.img;
                    imageContainer.appendChild(productImage);

                    const mostSaleImage = document.createElement('img');
                    mostSaleImage.className = 'corner-image most-Sale-Image';
                    mostSaleImage.src = 'https://www.e-bebek.com/assets/images/cok-satan@2x.png';
                    imageContainer.appendChild(mostSaleImage);

                    const favDiv = document.createElement('button');
                    favDiv.className = 'corner-image add-Favorite-wrapper';
                    imageContainer.appendChild(favDiv);

                    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                    if (favorites.includes(product.id)) {
                        favDiv.style.backgroundColor = 'orange';
                    }


                    const addFavorite = document.createElement('img');
                    addFavorite.className = 'add-Favorite-icon';
                    addFavorite.src = 'https://www.e-bebek.com/assets/svg/default-favorite.svg';
                    favDiv.appendChild(addFavorite);
                    
                    favDiv.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                        const productId = product.id;

                        if (!favorites.includes(productId)) {
                            favorites.push(productId);
                            localStorage.setItem('favorites', JSON.stringify(favorites));
                            favDiv.style.backgroundColor = 'orange';
                        }
                    });

                    const header = document.createElement('span');
                    header.className = 'product-header';
                    header.textContent = product.brand + ' - ';
                    upperSide.appendChild(header);

                    const productName = document.createElement('span');
                    productName.className = 'product-name';
                    productName.textContent = product.name;
                    header.appendChild(productName);

                    if (product.original_price !== product.price && product.original_price > product.price) {
                        const discount = product.original_price - product.price;
                        const discountRate = (discount / product.original_price) * 100;
                        const discountDiv = document.createElement('div');

                        const oldPriceText = document.createElement('span');
                        oldPriceText.textContent = product.original_price + ' TL';
                        oldPriceText.className = 'oldPrice';
                        discountDiv.appendChild(oldPriceText);

                        const discountRateText = document.createElement('span');
                        discountRateText.className = 'newPrice';
                        discountRateText.textContent = '%' + Math.floor(discountRate);
                        discountDiv.appendChild(discountRateText);

                        upperSide.appendChild(discountDiv);
                    }

                    const productPrice = document.createElement('span');
                    productPrice.className = 'product-price';
                    productPrice.textContent = product.price + ' TL';

                    if (product.original_price !== product.price && product.original_price > product.price) {
                        productPrice.style.marginTop = '9px';
                    }

                    upperSide.appendChild(productPrice);

                    const bottomSide = document.createElement('div');
                    bottomSide.className = 'bottom-side';
                    productDiv.appendChild(bottomSide);

                    const addBasketButton = document.createElement('button');
                    addBasketButton.className = 'basket-button';
                    addBasketButton.textContent = 'Sepete Ekle';
                    bottomSide.appendChild(addBasketButton);
                });
            } catch (error) {
                alert(error);
            }
        };

        addContentAfterStories();
        getAllProducts();

    } else {
        console.log("wrong page");
    }
})();
