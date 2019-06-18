const products = [
    {
      name: " IPhone 6s",
      price: 35,
      category: "Mobiles",
      image: require("../data/images/iphone 6s.jpg"),
      numOfItemsInCart: 0,
      liked: true
    },
    {
      name: "Iphone Xs",
      price: 20,
      category: "Mobiles",
      image: require("../data/images/iphoneXs.jpg"),
      numOfItemsInCart: 0
    },
  ];
  
  export function getProducts() {
    return products;
  }
  