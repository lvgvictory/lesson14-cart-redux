var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        description : 'San pham do Apple san xuat',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        price : 500,
        inventory : 10,// so luong ton trong kho
        rate : 4
    },
    {
        id : 2,
        name : 'SamSung Galaxy S7',
        description : 'San pham do SamSung san xuat',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        price : 400,
        inventory : 15,// so luong ton trong kho
        rate : 5
    },
    {
        id : 3,
        name : 'Oppo F1s',
        description : 'San pham do China san xuat',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        price : 450,
        inventory : 5,// so luong ton trong kho
        rate : 3
    }
];

var products = (state = initialState, action) => {
    switch (action.type) {
        default : return [...state];
    }
};

export default products;