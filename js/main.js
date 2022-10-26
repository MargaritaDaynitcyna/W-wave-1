window.addEventListener('DOMContentLoaded', () => {
  showGuestInfo()
})


function showGuestInfo() {
  document.querySelectorAll('.category__item').forEach((item) => {
    item.addEventListener('click', () => {

      if (document.querySelector('.chosen')) {
        document.querySelector('.chosen').classList.remove('chosen');
      }
      item.classList.add('chosen');

      if (item.hasAttribute('data-descr')) {
        document.querySelectorAll('.link-disabled').forEach((link) => {
          link.classList.remove('link-disabled')
        })

        document.querySelector('.guest__img').style.backgroundImage = `url('../img/${item.dataset.img}')`
        document.querySelector('.guest__name').textContent = item.innerText;
        document.querySelector('.guest__description').textContent = item.dataset.descr;

        let socialLinks = document.querySelector('.guest__social').querySelectorAll('.social__link');
        socialLinks[0].setAttribute("href", item.dataset.links.split(', ')[0])
        socialLinks[1].setAttribute("href", item.dataset.links.split(', ')[1])
        socialLinks[2].setAttribute("href", item.dataset.links.split(', ')[2])

        document.querySelector('.guest__link').setAttribute("href", item.dataset.radio)
      }
    })
  })
}
