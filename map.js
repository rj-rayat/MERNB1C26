const phones = [
    {name:"Samsung", color:"Rose Gold", price:22000, version:"F23"},
    {name:"Xioami", color:"Green", price:30000, version:"M23"},
    {name:"Apple", color:"Orange", price:122000, version:"13"},
    {name:"Oppo", color:"Yellow", price:50000, version:"A26"},
    {name:"Nokia", color:"Black", price:12000, version:"Hatura"},
]

// for (phone of phones){
  

//     if ( phone.price > 70000){
//         console.log(`You can buy ${phone.name}, taka is ${phone.price}`)
//     }

// }

// phones.map(phone => console.log(phone));


const items = phones.filter(phone => phone.price >  30000);
console.log(items)
items.map(item => console.log(item.name, item.price));

const findHight = phones.find(item => item.price >= 30000);
console.log(findHight)



