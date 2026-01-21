function searchFood(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Found ${item}`);
        }, 2000);
    });
}

// function orderFood(item) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(Math.floor(Math.random() * 1000));
//         }, 2000);
//     });
// }

// function payment(id) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(true);
//         }, 2000);
//     });
// }

// searchFood("Burger")
// .then(data => {
//     console.log(data);
//     return orderFood("Burger");
// })
// .then(id => {
//     console.log("Order ID:", id);
//     return payment(id);
// })
// .then(status => {
//     console.log("Payment success:", status);
// });
