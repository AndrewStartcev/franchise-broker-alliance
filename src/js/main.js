const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.header-menu');

burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('active');
  menu.classList.toggle('menu--active');
});


const tabButtons = document.querySelectorAll('.tab-head__btn');
const tabs = document.querySelectorAll('.tabs__item');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedTab = button.dataset.tab;
    activateTab(selectedTab);
  });
});

function activateTab(selectedTab) {
  tabs.forEach(tab => {
    if (tab.id === selectedTab.substring(1)) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  tabButtons.forEach(button => {
    if (button.dataset.tab === selectedTab) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}


const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionBody = header.nextElementSibling;

    accordionItem.classList.toggle('active');

    if (accordionItem.classList.contains('active')) {
      accordionBody.style.maxHeight = '100%';
      accordionBody.style.display = 'block';
    } else {
      accordionBody.style.maxHeight = null;
      accordionBody.style.display = 'none';
    }

    accordionHeaders.forEach(otherHeader => {
      if (otherHeader !== header) {
        const otherItem = otherHeader.parentElement;
        otherItem.classList.remove('active');

        otherItem.querySelector('.accordion-body').style.maxHeight = null;
        otherItem.querySelector('.accordion-body').style.display = 'none';
      }
    });
  });
});

// получаем все ссылки и кнопки с атрибутом data-popup
const popupTriggers = document.querySelectorAll('[data-popup]');

// добавляем обработчик клика на каждую ссылку и кнопку
popupTriggers.forEach(function (popupTrigger) {
  popupTrigger.addEventListener('click', function (event) {
    event.preventDefault(); // отменяем действие по умолчанию

    // находим id popup элемента
    const popupId = popupTrigger.getAttribute('data-popup');

    // находим popup элемент по id
    const popupElement = document.querySelector(`#${popupId}`);

    // закрываем все открытые popup элементы
    const popupElements = document.querySelectorAll('.popup.show');
    popupElements.forEach(function (popupElement) {
      popupElement.classList.remove('show');
    });

    // открываем выбранный popup элемент
    popupElement.classList.add('show');
  });
});

// получаем все кнопки закрытия popup элемента
const closeButtons = document.querySelectorAll('.popup__close, .popup-close');

// функция для закрытия popup элемента
function closePopup() {
  const popupElements = document.querySelectorAll('.popup.show');
  popupElements.forEach(function (popupElement) {
    popupElement.classList.remove('show');
  });
}

// добавляем обработчик клика на каждую кнопку закрытия popup элемента
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener('click', function (event) {
    event.preventDefault(); // отменяем действие по умолчанию
    closePopup();
  });
});

// добавляем обработчик события нажатия клавиши ESC
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closePopup();
  }
});


function scrollToBlock(id) {
  const block = document.getElementById(id);

  if (block) {
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;

    const top = block.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
}

// добавляем обработчик клика на все ссылки с href, начинающимся с символа #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault(); // отменяем действие по умолчанию
    const id = this.getAttribute('href').substring(1);
    scrollToBlock(id);
  });
});

// добавляем обработчик клика на все кнопки с атрибутом data-scroll
document.querySelectorAll('[data-scroll]').forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault(); // отменяем действие по умолчанию
    const id = this.getAttribute('data-scroll');
    scrollToBlock(id);
  });
});
