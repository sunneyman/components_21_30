(function() {

'use strict';

// Code goes here

class Menu {

		/**
		* Конструктор класс Menu
		* @parm {Object} options
		*/
		constructor (options) {
			this.el = options.el;
			this.data = options.data;

			this._initEvents();

			this.render();
		}

		/**
		* Установка обработчиков событий 
		*/
		_initEvents () {
			this.el.addEventListener('click', this._onCLick.bind(this));
		}


		/**
		* Обработчик всех кликов по меню
		* @param {MouseEvent} event
		*/
		_onCLick (event) {
			event.preventDefault();
			let target = event.target;

			if (target.classList.contains('menu__title')) {
				this.toggle();
			}

			if (target.classList.contains('menu__item')) {
				this.toggleItem(event.target);
			}
		}

		render () {
			this.el.innerHTML = '';

			let title = document.createElement('a');
			title.classList.add('menu__title');
			title.classList.add('pure-menu-heading');
			title.innerHTML = this.data.title;

			let list = document.createElement('ul');
			list.classList.add('menu__list');
			list.classList.add('pure-menu-list');

			this.data.items.forEach(itemData => {
				let item = document.createElement('li');
				item.classList.add('menu__item');
				item.classList.add('pure-menu-link');

				item.innerHTML = itemData.anchor;
				list.appendChild(item);
			});

			this.el.appendChild(title);
			this.el.appendChild(list);
		}

		/**
		* Выбор элемента меню
		* @param {HTMLElement} elem
		*/
		toggleItem (elem) {
			elem.classList.toggle('menu__item_selected');
			elem.style.color = elem.dataset.highlight;
		}

		/**
		* Переключение состояния меню
		*/
		toggle() {
			this.el.classList.toggle('menu_close');
		}
	}

	window.Menu = Menu;
	
})();