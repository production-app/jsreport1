
const bwipjs = require('bwip-js');
const moment = require('moment')

function nowPlus20Days() {
    var date = new Date()
    date.setDate(date.getDate() + 20);
    return date.toLocaleDateString();
}

function now() {
    return moment(new Date()).format("DD-MM-YYYY")
}

function formatDate(datetime) {
   return moment(datetime).format("DD/MM/YYYY")
}


function increment(num) {
	return num + 1;
}

function total(items) {
    var sum = 0
    items.forEach(function (i) {
        console.log('Calculating item ' + i.name + '; you should see this message in debug run')
        sum += i.price
    })
    return sum
}




function barcode(id)  {
  id =  Math.floor(Math.random() * 5000)
  return bwipjs.toBuffer({
    bcid:  'code128',
    text:  `${id}`,
    scale:  2,
    height:  13,
    includetext:  true,
    textxalign:  'center',
  }).then(p => p.toString('base64'))
}