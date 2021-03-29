const specialProducts = [{

    id: 0,
    catagory: 'Aplifier',
    image: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/d72a6425c68f5a0dea6bb1740df20f69_2048x2048_948164fd-1273-4f59-b25e-a48a0c9c4197_360x.png?v=1596526020',

    name: 'White Aplifier',
    review: 3,
    price: 1000,
    salePrice: 800,
    onSale: true,
    featuredItem: false,
    specs: [{ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit. Ullamcorper malesuada proin libero nunc consequat.  ", feature: ['feature 1', 'feature 2'], inBox: ['amplifier','cable','antena'] }],
    variation: [{ img: "https://cdn.shopify.com/s/files/1/0276/5304/6345/products/c0c6a360c71c961ae33f54fe4f71405f_2048x2048_5875c2a7-e056-4f31-9f7e-0007cb3cd2e2_2048x2048.jpg?v=1614045257", color: "white" }, { img: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/c0c6a360c71c961ae33f54fe4f71405f_2048x2048_5875c2a7-e056-4f31-9f7e-0007cb3cd2e2_2048x2048.jpg?v=1614045257', color: "black" }]
},
    {  
        id: 1,
        catagory: 'network cable',
        image: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/usb_470x.jpg?v=1594106992',

        name: 'Audio USB cable',
        review: 2,
        price: 400,
        salePrice: 200,
        onSale: false,
        featuredItem: false,
        specs: [{
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit. Ullamcorper malesuada proin libero nunc consequat.  ", feature: ['Main conductor: Silver-plated α (Alpha) OFC Conductors', 'Connectors: Furutech-engineered 24k gold-plated USB series Connectors'], inBox: ['amplifier', 'cable', 'antena'] }],
        variation: [{ img: "https://cdn.shopify.com/s/files/1/0276/5304/6345/products/20210112_190833_2048x2048.jpg?v=1611041233", color: "blue" }, { img: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/20201118_203234_2048x2048.jpg?v=1606203046', color: "stripe" }]
    },

    {
        id: 2,
        catagory: 'IDM',
        image: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/s-l500_30ccdb65-c357-4cae-ad6d-040c9a3cbc03_360x.jpg?v=1596526063',

        name: 'portable audio',
        review: 4,
        price: 600,
        salePrice: 450,
        onSale: false,
        featuredItem: false,
        specs: [{
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit. Ullamcorper malesuada proin libero nunc consequat.  ", 
            feature: ['Main conductor: Silver-plated α (Alpha) OFC Conductors', 'Connectors: Furutech-engineered 24k gold-plated USB series Connectors'], inBox: ['amplifier', 'cable', 'antena']
        }],
        variation: [{ img: "https://cdn.shopify.com/s/files/1/0276/5304/6345/products/9bdbbbb23a44fe610eba9208424de14b_2048x2048_ae565e05-c079-41b7-8537-c053e271c829_2048x2048.jpg?v=1603180704", color: "black" }, { img: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/57_bfb3e6e6-f83a-4cf1-9aff-4f06563714d4_470x.jpg?v=1595624752', color: "white" }]
    },

    {
        id: 3,
        catagory: 'cable',
        image: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/s-l1600_5247a72c-bd63-466f-bb22-494188f17840_2048x2048.jpg?v=1612826394',

        name: 'USB Cable',
        review: 1 ,
        price: 300,
        salePrice: 200,
        onSale: true,
        featuredItem: true,
        specs: [{
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit. Ullamcorper malesuada proin libero nunc consequat.  ",
            feature: ['Main conductor: Silver-plated α (Alpha) OFC Conductors', 'Connectors: Furutech-engineered 24k gold-plated USB series Connectors'],
             inBox: ['amplifier', 'cable', 'antena']
        }],
        variation: [{ img: "https://cdn.shopify.com/s/files/1/0276/5304/6345/products/s-l1600_10a3a71c-81fd-4084-a9f3-b2a92d25b22e_600x.jpg?v=1612826394", color: "black" }, { img: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/20210127_161052_2048x2048.jpg?v=1611724978', color: "blue" }]
    },

    {
        id: 4,
        catagory: 'buffer',
        image: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/d72a6425c68f5a0dea6bb1740df20f69_2048x2048_948164fd-1273-4f59-b25e-a48a0c9c4197_360x.png?v=1596526020',

        name: 'Sony buffer',
        review: 5,
        price: 1000,
        salePrice: 850,
        onSale: false,
        featuredItem: true,
        specs: [{
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit. Ullamcorper malesuada proin libero nunc consequat.  ",
            feature: ['Main conductor: Silver-plated α (Alpha) OFC Conductors', 'Connectors: Furutech-engineered 24k gold-plated USB series Connectors'],
            inBox: ['amplifier', 'cable', 'antena']
        }],
        variation: [{ img: "https://cdn.shopify.com/s/files/1/0276/5304/6345/products/s-l1600_10a3a71c-81fd-4084-a9f3-b2a92d25b22e_600x.jpg?v=1612826394", color: "black" }, { img: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/20210127_161052_2048x2048.jpg?v=1611724978', color: "blue" }]
    },

    {
        id: 5,
        catagory: 'cable',
        image: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/20200808_123859_360x.jpg?v=1598964984',

        name: 'USB cable',
        review: 2,
        price: 200,
        salePrice: 150,
        onSale: true,
        featuredItem: false,
        specs: [{
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit. Ullamcorper malesuada proin libero nunc consequat.  ",
            feature: ['Main conductor: Silver-plated α (Alpha) OFC Conductors', 'Connectors: Furutech-engineered 24k gold-plated USB series Connectors'],
            inBox: ['amplifier', 'cable', 'antena']
        }],
        variation: [{ img: "https://cdn.shopify.com/s/files/1/0276/5304/6345/products/s-l1600_10a3a71c-81fd-4084-a9f3-b2a92d25b22e_600x.jpg?v=1612826394", color: "black" }, { img: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/20210127_161052_2048x2048.jpg?v=1611724978', color: "blue" }]
    },
    {
        id: 6,
        catagory: 'Extension',
        image: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/20200808_123859_360x.jpg?v=1598964984',

        name: 'power cable',
        review: 4,
        price: 200,
        salePrice: 180,
        onSale: false,
        featuredItem: false,
        specs: [{
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit. Ullamcorper malesuada proin libero nunc consequat.  ",
            feature: ['Main conductor: Silver-plated α (Alpha) OFC Conductors', 'Connectors: Furutech-engineered 24k gold-plated USB series Connectors'],
            inBox: ['amplifier', 'cable', 'antena']
        }],
        variation: [{ img: "https://cdn.shopify.com/s/files/1/0276/5304/6345/products/s-l1600_10a3a71c-81fd-4084-a9f3-b2a92d25b22e_600x.jpg?v=1612826394", color: "black" }, { img: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/20210127_161052_2048x2048.jpg?v=1611724978', color: "blue" }]
    },
    {
        id: 7,
        catagory: 'Extension',
        image: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/20200808_123859_360x.jpg?v=1598964984',

        name: 'headphone',
        review: 5,
        price: 200,
        salePrice: 120,
        
        onSale: true,
        featuredItem: true,
        specs: [{
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit. Ullamcorper malesuada proin libero nunc consequat.  ",
            feature: ['Main conductor: Silver-plated α (Alpha) OFC Conductors', 'Connectors: Furutech-engineered 24k gold-plated USB series Connectors'],
            inBox: ['amplifier', 'cable', 'antena']
        }],
        variation: [{ img: "https://cdn.shopify.com/s/files/1/0276/5304/6345/products/s-l1600_10a3a71c-81fd-4084-a9f3-b2a92d25b22e_600x.jpg?v=1612826394", color: "black" }, { img: 'https://cdn.shopify.com/s/files/1/0276/5304/6345/products/20210127_161052_2048x2048.jpg?v=1611724978', color: "blue" }]
    },



]

export default specialProducts;