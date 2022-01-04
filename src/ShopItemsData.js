//商品纵览数据
var ShopData = new Map();


//数据录入接口  暂不用假数据
function SetData() {
    ShopData.set(1001,  {"name" : "赤身", "Price" : 120} );
    ShopData.set(1002, {"name" : "大トロ", "Price" : 134} );
    ShopData.set(1003, {"name" : "黒鮪", "Price" : 155}  );
    ShopData.set(1004, {"name" : "鬢長鮪", "Price" : 245} );

    ShopData.set(1005, {"name" : "鰯", "Price" : 344}  );
    ShopData.set(1006, {"name" : "赤貝", "Price" : 510 }  );
    ShopData.set(1007, {"name" : "真牡蠣", "Price" : 700} );
    ShopData.set(1008, {"name" : "サーモン", "Price" : 400} );
    ShopData.set(1010, {"name" : "蝦夷馬糞海胆", "Price" : 1200}  );
    ShopData.set(1011, {"name" : "玉子焼", "Price" : 110} );
}

let ShopItemData = class {
    constructor() {
        SetData();
    }
};


ShopItemData.instance = null

ShopItemData.getInstance = function() {
    if(!this.instance ) {
        this.instance = initShopItemData();
    }
    return this.instance;
}

function getShopItemData() {
    return ShopData;
};

function initShopItemData() {

    new ShopItemData();
}