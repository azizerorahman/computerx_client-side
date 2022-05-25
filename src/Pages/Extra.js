import React from "react";

const Extra = () => {
  const products = [
    {
      name: "Alyce Guy",
      price: 22,
      description:
        "Anim exercitation nulla deserunt eiusmod. Exercitation Lorem sint cupidatat do elit tempor velit non esse laborum consequat. Fugiat pariatur laborum esse est deserunt deserunt incididunt.\r\n",
    },
    {
      name: "Jackie Joseph",
      price: 62,
      description:
        "Tempor ipsum non adipisicing voluptate culpa tempor nisi. Nulla eiusmod id ad anim. Labore fugiat enim reprehenderit magna proident laboris sunt aliquip adipisicing. Ipsum esse veniam consequat mollit nisi qui esse quis nostrud enim consectetur reprehenderit. Veniam sint laboris id qui consequat amet veniam magna. Enim magna proident nulla ex reprehenderit.\r\n",
    },
    {
      name: "Small David",
      price: 136,
      description:
        "Dolor qui consequat ad est elit dolore proident occaecat nulla deserunt quis. Dolore consectetur ea consequat non eiusmod aliqua. Ullamco cupidatat eiusmod culpa duis elit. Ea non officia amet consequat mollit cillum cupidatat nulla incididunt magna nostrud reprehenderit. Aliquip magna et Lorem anim cupidatat aliqua laborum. Et sint labore anim commodo elit pariatur. In sunt excepteur consequat Lorem eiusmod ipsum excepteur voluptate exercitation tempor excepteur est irure.\r\n",
    },
    {
      name: "Mullins Zimmerman",
      price: 111,
      description:
        "Esse magna amet mollit ad deserunt nostrud do sint Lorem ea occaecat. Ullamco veniam occaecat enim commodo reprehenderit excepteur est consequat Lorem id quis. Irure quis ea ut fugiat excepteur dolor ea nisi. Enim qui ipsum sint reprehenderit officia. Eu magna ea laborum nostrud eiusmod.\r\n",
    },
    {
      name: "Polly Preston",
      price: 54,
      description:
        "Dolor ipsum duis deserunt Lorem excepteur dolore nulla tempor ad excepteur nisi. Dolor sint aute duis sint anim eu cupidatat nostrud ut eu amet. Labore aliqua dolore irure ipsum dolor mollit sunt aliqua. Do non excepteur deserunt veniam exercitation aute. Culpa pariatur fugiat irure magna pariatur proident nulla deserunt eu dolore. Nulla ex amet voluptate ullamco eiusmod qui.\r\n",
    },
    {
      name: "Nolan",
      price: 41,
      description:
        "Dolor tempor officia sit veniam minim adipisicing mollit ex mollit officia magna Lorem. Quis incididunt enim minim ipsum eiusmod anim amet labore ipsum nisi quis nisi. Lorem laborum esse elit non ullamco voluptate labore amet. Ea veniam mollit officia fugiat et aute in velit aute aute. Anim adipisicing incididunt excepteur occaecat culpa labore tempor quis consectetur. Ipsum anim ad id incididunt amet ad cillum pariatur do nostrud eiusmod excepteur aliqua.\r\n",
    },
  ];

  const searchProducts = (products, searchText) => {
    const searchResult = [];
    for (const product of products) {
      if (product.name.includes(searchText)) {
        searchResult.push(product);
      }
    }
    return searchResult;
  };

  const results = searchProducts(products, "n");
  console.log(results);

  return <></>;
};

export default Extra;
