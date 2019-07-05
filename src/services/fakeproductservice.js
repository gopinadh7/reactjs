const products = [
    {
      name: " IPhone 6s",
      price: 350,
      category: "Mobiles",
      image: require("../data/images/iphone 6s.jpg"),
      numOfItemsInCart: 0,
      liked: true
    },
    {
      name: "Iphone X",
      price: 1300,
      category: "Mobiles",
      image: require("../data/images/iphoneX.jpg"),
      numOfItemsInCart: 0
    },
    {
      name: "IPhone 5s",
      price: 1300,
      category: "Mobiles",
      image: require("../data/images/iphone 6s.jpg"),
      numOfItemsInCart: 0
    },
  ];
  
  export function getProducts() {
    return products;
  }
  