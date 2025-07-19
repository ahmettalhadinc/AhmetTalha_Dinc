(() => {
    const html = `
    <div class="containerr">
      <div class="carousel-header">
        <h2 class="carousel-text">Beğenebileceğinizi düşündüklerimiz</h2>
      </div>
      <div class="carousel-items">
      
      </div>
    </div>
  `;

    const css = `
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');

    .containerr {
      width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1320px;
    }

    .carousel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fef6eb;
      padding: 25px 67px;
      border-top-left-radius: 35px;
      border-top-right-radius: 35px;
     
    }

    .carousel-text {
      font-family: Quicksand-Bold;
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.11;
      color: #f28e00;
      margin: 0;
    }
      .carousel-items{
    display:flex;
    flex-wrap:wrap;
    gap:15px;
    margin-top:15px

    }
    .carousel-product{
   z-index: 1;
    display: block;
   cursor:pointer;
    font-family: Poppins, "cursive";
    font-size: 12px;
    width:230px;
    padding: 15px;
    color: #7d7d7d;
    margin: 0 0 20px 3px;
    border: 1px solid #ededed;
    border-radius: 10px;
    position: relative;
    text-decoration: none;
    background-color: #fff;
    }
    .upper-side{
    display:flex;
    flex-direction:column;
    gap:10px
   

    }
    .carousel-product:hover{
     border: 3.5px solid rgb(242, 142, 0);
    }
    .product-image{
    height:203px;
    max-width:100%;
    margin-bottom:45px;
    
    }
    .product-header{
        font-weight: bolder;
        height:42px;
    }
        .product-name{
        font-weight:normal;
        }
    .product-price{
        display: block;
    width: 100%;
    font-size: 2.2rem;
    font-weight: 600;
    height:43px;
    margin-top:45px;
    
    }
    
    .basket-button{
    width: 100%;
    padding: 15px 20px;
    border-radius: 37.5px;
    background-color: #fff7ec;
    color: #f28e00;
    font-family: Poppins, "cursive";
    font-size: 1.4rem;
    font-weight: 700;
    margin-top:40px;
    }

    .basket-button:hover{
    color: white;
    background-color:rgb(242, 142, 0);
    }
  `;

    if (window.location.pathname === "/") {
        const api = 'https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json'
        const addContentAfterStories = () => {
            const targetElement = document.querySelector('.ins-preview-wrapper');

            if (targetElement) {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = html;

                targetElement.insertAdjacentElement('afterend', wrapper.firstElementChild);

                const style = document.createElement('style');
                style.textContent = css;
                document.head.appendChild(style);
            }


        };
        const getAllProducts = async () => {

            try {
                await fetch(api)
                    .then(res => res.json())
                    .then(products => {
                        products.forEach(product => {
                            const targetDiv = document.querySelector('.carousel-items');
                            const link = document.createElement('a');
                            link.href = product.url;
                            link.target = '_blank';
                            const productDiv = document.createElement('div')
                            productDiv.className = 'carousel-product'
                            targetDiv.appendChild(productDiv)
                            link.appendChild(productDiv);
                            targetDiv.appendChild(link);

                            const upperSide = document.createElement('div')
                            upperSide.className = 'upper-side'
                            productDiv.appendChild(upperSide)

                            const productImage = document.createElement('img')
                            productImage.className = 'product-image'
                            productImage.src = product.img
                            upperSide.appendChild(productImage)

                            const header = document.createElement('span')
                            header.className = 'product-header'
                            header.textContent = product.brand + ' -' + ' '
                            upperSide.appendChild(header)

                            const productName = document.createElement('span')
                            productName.className = 'product-name'
                            productName.textContent = product.name
                            header.appendChild(productName)

                            const productPrice = document.createElement('span')
                            productPrice.className = 'product-price'
                            productPrice.textContent = product.price + ' TL'
                            upperSide.appendChild(productPrice)

                            const bottomSide = document.createElement('div')
                            bottomSide.className = 'bottom-side'
                            productDiv.appendChild(bottomSide)

                            const addBasketButton = document.createElement('button')
                            addBasketButton.className = 'basket-button'
                            addBasketButton.textContent = 'Sepete Ekle'
                            bottomSide.appendChild(addBasketButton)


                        }
                        )
                    })
            } catch (error) {
                alert(error)
            }


        }
        
    addContentAfterStories();
    getAllProducts();

    } else {
        console.log("wrong page");
    }






})();
