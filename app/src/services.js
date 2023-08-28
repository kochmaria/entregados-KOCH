const products = [
    {id: "1", name: "Apple AirPods Pro", price: 500, category: "Inalambricos", Image: "/imagenes/airpod.jpeg"},
    {id: "2", name: "HeadPhones Bluetooth Marshal", price: 700, category: "Inalambricos", Image: "../imagenes/marshall.jpeg", },
    {id: "3", name: "Headphones Bluetooth JBL", price: 400, category: "Inalambricos", Image: "../imagenes/jbl.png" },
    {id: "4", name: "Auriculares Marshal Minor III Black ", price: 600, category: "Inalambricos", Image: "../imagenes/227528-800-800.webp" },
    ///gamers
    {id: "5", name: "Headphones NogaStromer ", price: 350, category: "Gamers", Image: "../imagenes/nogastromer.jpeg" },
    {id: "6", name: "Headphones gamer Redragon", price: 200, category: "Gamers", Image: "../imagenes/Auricular-Gamer-Redragon-Zeus-H510-Rgb_41187_1.jpeg"},
    {id: "7", name: "Razer Barracuda X", price: 500, category: "Gamers", Image: "../imagenes/barracuda.webp" },
    {id: "8", name: "Headphones Stromberg Smith", price: 500, category: "Gamers", Image: "../imagenes/smith.jpeg" },
    ///runners
    {id: "9", name: "Auriculares Runner JBL", price: 270, category: "Runners", Image: "../imagenes/jblrunner.webp" },
    {id: "10", name: "Sennheiser Sport True Wireless", price: 600, category: "Runners", Image: "/imagenes/wirerunner.jpeg" },
    {id: "11", name: "HUAWEI FreeBuds Pro 2", price: 300, category: "Runners" , Image: "/imagenes/huaweii.jpg"},
    {id: "12", name: "Energy Sistem Earphones Sport 2 True Wireless", price: 150, category: "Runners", Image: "/imagenes/energy.avif" },
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