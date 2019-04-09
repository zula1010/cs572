const item = {
  name: "avocado",
  type: "fruit",
  category: "food",
  price: 200
};
const applyCoupon = function(item) {
  return function(num) {
    item.price = (item.price / 100) * (100 - num);
    return item;
  };
};
console.log(applyCoupon(item)(10).price === 180);
