//例：Map(2) {'1010' => '2', '1011' => '3'}

// var OrderData = class {
//     constructor() {
//         //this.OrderDatas = null;
//         //this.instance = null;
//         console.log("orderData instance");
//     }

//     // static getInstance() {
//     //     if(!this.instance) {
//     //         this.instance = new OrderData();
//     //     }

//     //     return this.instance;
//     // }

//     // static SetOrderData (Data) {
//     //     this.OrderDatas = Data;
//     //     console.log(this.OrderDatas);
//     // }


//     // static GetOrderData () {
//     //     console.log("getorderdata () ");
//     //     return this.OrderDatas;
//     // }

    
// }


class OrderData {
    static instance  = null;
    
    static getInstance() {
        if (OrderData.instance == null) {
            console.log("aaaaaaaaaaa");
            OrderData.instance = new OrderData();
        }
        return OrderData.instance;
    }

    SetOrderData = function(Data) {
        OrderData.OrderDatas = Data;
        console.log(OrderData.OrderDatas);
        console.log(OrderData.instance);
    }


    GetOrderData  = function() {
        return OrderData.OrderDatas;
    }
}

OrderData.prototype.OrderDatas = null;

//OrderData.instance = null;

// OrderData.getInstance = function() {
//     //let instance
//     if(!OrderData.instance) {
//         console.log("orderdata instance panduan")
//         OrderData.instance = new OrderData();
//     }
//     console.log(OrderData.instance)
//     return OrderData.instance;
// }


// //本次订单数
// OrderData.SetOrderData = function(Data) {
//     OrderData.OrderDatas = Data;
//     console.log(OrderData.OrderDatas);
//     console.log(OrderData.instance)
// }

// OrderData.GetOrderData = function() {
//     return OrderData.OrderDatas;
// }