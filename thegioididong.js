function showList() {
  const showBtn = document.querySelector('.btn')
  const ul = document.querySelector('.categories-list').style.display = 'grid'
  const divBrand = document.querySelector('.brand')
  console.log(divBrand);
  if (ul == 'none') {
    showBtn.addEventListener('click', () => {
      ul.style.display = 'grid'
    })
  }else{
    showBtn.addEventListener('click', () => {
      document.querySelector('ul').style.display = 'none'
      document.querySelector('.brand').style.display = 'none'
    })
  }
}
function showProduct(element) {
  const product = element;
  const laptop = document.querySelector('div.product-laptop').id ;
  const phone = document.querySelector('div.product-phone').id ;
  const tablet = document.querySelector('div.product-tablet').id ;
  console.log(element.id);
  console.log(laptop);
  if(element.id == laptop){
    product.addEventListener('click', () => {
       document.querySelector('div.product-laptop').style.display = 'block'
       document.querySelector('div.product-phone').style.display = 'none'
       document.querySelector('div.product-tablet').style.display = 'none'
    })
  }else if(element.id == phone){
    document.querySelector('div.product-phone').style.display = 'block'
    document.querySelector('div.product-laptop').style.display = 'none'
    document.querySelector('div.product-tablet').style.display = 'none'
  }else{
    document.querySelector('div.product-tablet').style.display = 'block'
    document.querySelector('div.product-laptop').style.display = 'none'
    document.querySelector('div.product-phone').style.display = 'none'
  }

}