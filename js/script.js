//                      1.
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

//           1.1
let stringfor = '';
for(let for_ of friends){
    stringfor += for_+', '
}
console.log('Спосіб for ' + stringfor)
//          1.2
let string = friends.join(', ');
console.log('Спосіб join ' + string)

//            2.
const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
//       add
console.log(" 2.")
cards.push('Карточка-6')
console.log(cards)
//        remove
cards.pop()
console.log(cards)
//         add start
console.log("")
cards.unshift("Карточка-0")
console.log(cards)
//          remove start
console.log("")
cards.shift()
console.log(cards)
//              3.
console.log("3.")
const cardsremove = [
    'Карточка-1', 
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  cardRemove =  'Карточка-3' 
  numbercardtoRemove = cardsremove.indexOf(cardRemove)
  if(numbercardtoRemove == -1){
    console.log(cardsremove)
  }
  else{
    cardsremove.splice(cardsremove.indexOf(cardRemove),1)
    console.log(cardsremove)
  }
//        4.
console.log("4.")
const cardsadd = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  indexAdd = 5
  wordToadd = 'Карточка-6'
cardsadd.splice(indexAdd,0,wordToadd)
console.log(cardsadd)
//       5.
console.log("5.")
const cardsaddremove = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  indexChange = 1
  wordChange = 'Карточка-4'
cardsaddremove.splice(indexChange,1,wordChange)
console.log(cardsaddremove)