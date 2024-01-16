
const products = [
    {
      id: '1',
      name: 'iphone 12',
      price: '1000',
      category: 'celular',
      img: 'https://www.macstation.com.ar/img/productos/2493-2317-1.jpg',
      stock: '25',
      description: 'Descripcion de Iphone 12',
    },
    {
      id: '2',
      name: 'Samsung S21',
      price: '2000',
      category: 'celular',
      img: 'https://m.media-amazon.com/images/I/41puyo+i8bL._AC_.jpg',
      stock: '20',
      description: 'Descripcion de Samsung S21',
    },
    {
      id: '3',
      name: 'Samsung S22',
      price: '3000',
      category: 'celular',
      img: 'https://tienda.personal.com.ar/images/720/webp/Galaxy_S22_negro_frente_R30_min_bea302db10.png',
      stock: '40',
      description: 'Descripcion de Samsung S22',
    },
    {
      id: '4',
      name: 'Notebook Lenovo V14',
      price: '1500',
      category: 'notebooks',
      img: 'https://pronotebooks.com.ar/wp-content/uploads/2023/04/Lenovo-V14-1-600x600.webp',
      stock: '10',
      description: 'Descripcion de Notebook Lenovo V14',
    },
    {
      id: '5',
      name: 'Tablet Samsung Tab S6 lite',
      price: '800',
      category: 'tablets',
      img: 'https://images.samsung.com/is/image/samsung/ar-galaxy-tab-s6-lite-p610-sm-p610nzauaro-frontgray-282037279?$1300_1038_PNG$',
      stock: '15',
      description: 'Descripcion de Samsung Tab S6 lite',
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductsById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 500);
    });
  };
  