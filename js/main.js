window.addEventListener('DOMContentLoaded', () => {
  scroll()
  showMorePodcasts()
  showGuestInfo()
  openMenu()
  openAir()
  openLogin()
  validateForm()
  swiper()
  choices()
  accordion()

})

function scroll() {
  const smoothLinks = document.querySelectorAll('.nav-link');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(`${id}`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

function openLogin() {
  document.querySelector('#login').addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'block'
  })
  document.querySelector('#closeModal').addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'none'
  })
}

function showMorePodcasts() {
  let podcastBtn = document.querySelector('#podcastsBtn');

  podcastBtn.addEventListener('click', () => {
    if (podcastBtn.innerText === "Ещё подкасты") {
      for (pod of document.querySelectorAll('.podcasts__item')) {
        pod.style.display = 'flex'
      }
      podcastBtn.innerText = "Скрыть"
    } else if (podcastBtn.innerText === "Скрыть") {

      for (i = 4; i <= (document.querySelectorAll('.podcasts__item').length); i++) {
        document.querySelectorAll('.podcasts__item')[i].style.display = 'none'
        podcastBtn.innerText = "Ещё подкасты"
      }
    }
  })
}

function openMenu() {
  document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('#menu').classList.add('menu-open')
    if (document.documentElement.clientWidth <= 500) {
      document.querySelector('#topics').classList.add('topics-open')
    }
  })
  document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('#menu').classList.remove('menu-open')
    if (document.documentElement.clientWidth <= 500) {
      document.querySelector('#topics').classList.remove('topics-open')
    }
  })
}

function openAir() {
  document.querySelector('#air').addEventListener('click', () => {
    document.querySelector('.air__player').classList.toggle('is-show')
    document.querySelector('.air__open').classList.toggle('air-opened')
  })
}

function showGuestInfo() {
  document.querySelectorAll('.category__item').forEach((item) => {
    item.addEventListener('click', () => {

      if (document.querySelector('.chosen')) {
        document.querySelector('.chosen').classList.remove('chosen')
      }
      item.classList.add('chosen')

      if (item.hasAttribute('data-descr')) {
        document.querySelectorAll('.link-disabled').forEach((link) => {
          link.classList.remove('link-disabled')
        })

        document.querySelector('.guest__img').style.backgroundImage = `url('../img/${item.dataset.img}')`
        document.querySelector('.guest__name').textContent = item.innerText
        document.querySelector('.guest__description').textContent = item.dataset.descr

        let socialLinks = document.querySelector('.guest__social').querySelectorAll('.social__link');
        socialLinks[0].setAttribute("href", item.dataset.links.split(', ')[0])
        socialLinks[1].setAttribute("href", item.dataset.links.split(', ')[1])
        socialLinks[2].setAttribute("href", item.dataset.links.split(', ')[2])

        document.querySelector('.guest__link').setAttribute("href", item.dataset.radio)
      }

      if (document.documentElement.clientWidth <= 500) {
        document.querySelector('#guest').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    })
  })
}

function choices() {
  const element = document.querySelector('#select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });
}

function accordion() {
  new Accordion('.accordion-container')
}

function swiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      651: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    },
  });
}

function validateForm() {
  const validate = new window.JustValidate('#form', {
    errorLabelStyle: {
      color: 'var(--error)',
    },
    errorFieldStyle: {
      border: '1px solid var(--error)',
    },
  });

  validate
    .addField('.input__massage', [{
      rule: 'required',
      errorMessage: 'Напишите сообщение',
    }, ])
    .addField('.input__name', [{
        rule: 'minLength',
        value: 3,
        errorMessage: "Слишком короткое имя"
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: "Слишком длинное имя"
      },
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
    ])
    .addField('.input__email', [{
        rule: 'required',
        errorMessage: 'Введите почту',
      },
      {
        rule: 'email',
        errorMessage: 'Неверно указана почта',
      }
    ])
    .addField('#check', [{
      rule: 'required',
      errorMessage: 'Согласие обязательно',
    }, ])

  const validateLogin = new window.JustValidate('.modal__form');

  validateLogin
    .addField('.input__login', [{
        rule: 'minLength',
        value: 3,
        errorMessage: "Слишком короткий логин"
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: "Слишком длинный логин"
      },
      {
        rule: 'required',
        errorMessage: 'Введите логин',
      },
    ])
    .addField('.input__pass', [{
      rule: 'required',
      errorMessage: 'Введите пароль',
    }, {
      rule: 'password',
      errorMessage: 'пароль',
    }, ])

}
