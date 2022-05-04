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
  getProductList(categoryId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: productList.filter((item) => item.categoryId !== categoryId),
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
    imageUrl:
      "https://i.pinimg.com/236x/bc/cd/2e/bccd2e3ad2bbd881f7a9318e073190fa.jpg",
    stars: 4,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    imageUrl:
      "https://i.pinimg.com/236x/f3/60/31/f36031f081af4dcfd7f25476c7e9f56b.jpg",
    stars: 3,
    categoryId: 1,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    imageUrl:
      "https://i.pinimg.com/236x/76/db/1f/76db1f762b4f753b567819b3ab43fcfb.jpg",
    stars: 2,
    categoryId: 1,
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    imageUrl:
      "https://i.pinimg.com/236x/9f/79/0a/9f790a1933cefa2d8950a97b42f2eaae.jpg",
    stars: 1,
    categoryId: 1,
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    imageUrl:
      "https://i.pinimg.com/236x/27/1a/9e/271a9e09e9b17c96918b487567937078.jpg",
    stars: 5,
    categoryId: 1,
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    imageUrl:
      "https://i.pinimg.com/236x/b7/e6/a1/b7e6a13077a03e2f8c9d53831bef4349.jpg",
    stars: 4,
    categoryId: 1,
  },
  {
    id: 7,
    name: "Product 7",
    price: 700,
    imageUrl:
      "https://i.pinimg.com/236x/a4/ec/a5/a4eca52c4b8da266c3e5872b596afd34.jpg",
    stars: 3,
    categoryId: 1,
  },
  {
    id: 8,
    name: "Product 8",
    price: 800,
    imageUrl:
      "https://i.pinimg.com/236x/c0/0a/e0/c00ae0caaaeda1494557fd53718d12d6.jpg",
    stars: 2,
    categoryId: 1,
  },
  {
    id: 9,
    name: "Product 9",
    price: 900,
    imageUrl:
      "https://i.pinimg.com/236x/88/8d/92/888d9248aa5e8983d94f069dc4ff28d0.jpg",
    stars: 1,
    categoryId: 1,
  },
  {
    id: 10,
    name: "Product 10",
    price: 1000,
    imageUrl:
      "https://i.pinimg.com/236x/3f/9d/78/3f9d78c541d931f4c98ad4ce1b5ea18f.jpg",
    stars: 5,
    categoryId: 1,
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
