document.querySelectorAll('.category__item').forEach((item)=>{
  item.addEventListener('click', ()=>{
      if(document.querySelector('.chosen')) {
          document.querySelector('.chosen').classList.remove('chosen');
      }
      item.classList.add('chosen');
      document.querySelector('.guest__name').textContent = item.innerText;
      document.querySelector('.guest__description').textContent = document.querySelector('.category__item-descr').textContent;

      document.querySelectorAll('.link-disabled').forEach((link)=>{
          link.classList.remove('link-disabled')
      })
      document.querySelector('.guest__img').style.backgroundImage = `url('../img/guests_olga.png')`
  })
})
