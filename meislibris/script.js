
var cover = {
  doAndroids:'https://biblioklept.files.wordpress.com/2014/02/androids_goodfellow.jpg?w=739',
  stranger:'https://images-na.ssl-images-amazon.com/images/I/51EVK-ibmtL._SX322_BO1,204,203,200_.jpg',
  playerPiano:'https://www.obook.co.il/imgs/site/prod/1000000008177.jpg',
  flowers:'https://images.gr-assets.com/books/1328329308l/402059.jpg',
  flowMyTears:'https://images.gr-assets.com/books/1385189682l/216362.jpg',
  _1984:'https://norberthaupt.files.wordpress.com/2013/07/1984.jpg',
  threeStigmata:'https://images-na.ssl-images-amazon.com/images/I/51jFmNVxy1L._SY350_.jpg',
  lolita:'https://s26162.pcdn.co/wp-content/uploads/2018/08/1997-US-Random-House-Vintage-New-York.jpg',
  house:'https://images-na.ssl-images-amazon.com/images/I/412UQsJKtBL.jpg',
  neverLet:'https://images-na.ssl-images-amazon.com/images/I/41RPHj6pmlL._SX305_BO1,204,203,200_.jpg'
};

row1 = document.querySelector('#row1');
let display = false;
let toggleDetails = () => {
    if(display === true){
        details.style.display="none";
        display = false
    }
    else {
        details.style.display="table-row";
        display = true;
    }
}
let details = document.querySelector('.details');
row1.addEventListener("click",toggleDetails);
details = document.querySelector('.details');
details.addEventListener("click",toggleDetails);
