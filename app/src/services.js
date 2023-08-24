const products = [
    {id: "1", name: "Apple AirPods Pro", price: 500, category: "Inalambricos" },
    {id: "2", name: "HeadPhones Bluetooth Marshal", price: 700, category: "Inalambricos" },
    {id: "3", name: "Headphones Bluetooth JBL", price: 400, category: "Inalambricos" },
    {id: "4", name: "Auriculares Marshal Minor III Black ", price: 600, category: "Inalambricos" },
    ///gamers
    {id: "5", name: "Headphones NogaStromer ", price: 350, category: "Gamers" },
    {id: "6", name: "Headphones gamer Redragon", price: 200, category: "Gamers" },
    {id: "7", name: "Razer Barracuda X", price: 500, category: "Gamers" },
    {id: "8", name: "Headphones Stromberg Smith", price: 500, category: "Gamers" },
    ///runners
    {id: "9", name: "Auriculares Runner JBL", price: 270, category: "Runners" },
    {id: "10", name: "Sennheiser Sport True Wireless", price: 600, category: "Runners" },
    {id: "11", name: "HUAWEI FreeBuds Pro 2 Azul", price: 300, category: "Runners" },
    {id: "12", name: "Energy Sistem Earphones Sport 2 True Wireless", price: 150, category: "Runners" },
]




// getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const product = products.find((p) => p.id === id);
  
        
        if (product) {
          resolve(product);
        } else {
          reject("No existe el producto");
        }
      }, 1000);
    });
  };
  



// getProducts() -> devuelve todos los productos
// getProducts("Inalambricos") -> devuelve todos los productos de la categoría phones
// getProducts("Runners") -> devuelve todos los productos de la categoría tablets
// getProducts("Gamers") -> devuelve todos los productos de la categoría notebooks
export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
         const productsFiltered = category
          ? products.filter((product) => product.category === category)
          : products;
  
         resolve(productsFiltered);
        }, 1000);
    });
  };