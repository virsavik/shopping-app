export const mockApi = {
  getCategoryList() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: categoryList,
        });
      }, 1000);
    });
  },
  getProductList() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: productList,
        });
      }, 1000);
    });
  },
};

const productList = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    imageUrl: "https://via.placeholder.com/150",
    stars: 4,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    imageUrl: "https://via.placeholder.com/150",
    stars: 3,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    imageUrl: "https://via.placeholder.com/150",
    stars: 2,
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    imageUrl: "https://via.placeholder.com/150",
    stars: 1,
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    imageUrl: "https://via.placeholder.com/150",
    stars: 5,
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    imageUrl: "https://via.placeholder.com/150",
    stars: 4,
  },
  {
    id: 7,
    name: "Product 7",
    price: 700,
    imageUrl: "https://via.placeholder.com/150",
    stars: 3,
  },
  {
    id: 8,
    name: "Product 8",
    price: 800,
    imageUrl: "https://via.placeholder.com/150",
    stars: 2,
  },
];
const categoryList = [
  {
    id: 1,
    name: "Áo",
  },
  {
    id: 2,
    name: "Quần",
  },
  {
    id: 3,
    name: "Giày",
  },
  {
    id: 4,
    name: "Phụ kiện",
  },
  {
    id: 5,
    name: "Đồ chơi",
  },
];
