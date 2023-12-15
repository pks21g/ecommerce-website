const HomeScreen = {
  render: async () => {

    const respose = await fetch("http://localhost:5000/api/products", {
      headers: { "Content-Type": "application/json" },
    });
    if (!respose || !respose.ok){
      return `<div>
            Error in getting data
        </div>`;
    }
    const products = await respose.json();
    if (products === "undefined") return null;
    else {
      return `<ul class="products">
            ${products
              .map(
                (product) => `<li>
                    <div class="product">
                        <a href="/#/product/${product._id}">
                            <img src="${product.image}" alt="${product.name}" />
                        </a>
                        <div class="product-name">
                            <a href="">${product.name}</a>
                        </div>
                        <div class="product-brand">
                            <a href="">${product.brand}</a>
                        </div>
                        <div class="product-price">
                            <a href="">$${product.price}</a>
                        </div>
                    </div>
                </li>
                `
              )
              .join("\n")}
            </ul>`;
    }
  },
};

export default HomeScreen;
