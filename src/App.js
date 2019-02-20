import React, { Component } from 'react';
import {importAll} from './utils/import-all';
import './App.css';
import Menu from './Components/Menu/Menu';
import Order from './Components/Order/Order';
import Total from './Components/Order/Total/Total';


// создает объект контекста, содержаций ключи и пути ко всем файлам
// используется для массового импорта файлов из ./images/icons
// false показывает, что нужно импортировать только файлы верхнего уровня
// (true - импортировать файлы из вложеных папок тоже)
// третий аргумент - регулярное выражение: \. - только символ ".", $ - конец строки
const context = require.context('./images/icons', false, /\.png$/);

// вызываем функцию, преобразующую объект контекста в словарь,
// хранящий в качестве ключей названия файлов,
// а в качестве значений - пути к ним
const icons = importAll(context);

const FOODS = [
	{name: 'hamburger', price: 80, label: 'Hamburger', icon: icons['burger.png']},
	{name: 'coffee', price: 70, label: 'Coffee', icon: icons['coffee.png']},
	{name: 'cheeseburger', price: 90, label: 'Cheeseburger', icon: icons['cheese.png'] },
	{name: 'tea', price: 50, label: 'Tea', icon: icons['tea.png']},
	{name: 'fries', price: 45, label: 'Fries', icon: icons['fried-potatoes.png']},
	{name: 'cola', price: 40, label: 'Cola', icon: icons['cola.png']}
];

class App extends Component {
	state = {
		foods: [],
		total: 0
	};

	// добавление блюда в заказ
	addOrderFood = (event, name) => {
		event.stopPropagation();

		// находим индекс элемента по имени
		const index = this.state.foods.findIndex(food => food.name === name);
		// копируем массив для выполнения изменений
		let foods = [...this.state.foods];

		let food;
		// если блюдо не найдено в списке заказов, то создаем его
		if(index < 0) {
			// находим информацию о блюде в константе FOODS по имени
			const foodInfo = FOODS.find(foodInfo => foodInfo.name === name);
			// создаем новое блюдо с нужными параметрами
			food = {
				name: name,
				price: foodInfo.price,
				total: foodInfo.price,
				label: foodInfo.label,
				icon: foodInfo.icon,
				count: 1
			};
			// добавляем новое блюдо в список блюд
			foods.push(food);
		// если блюдо уже есть в списке, увеличиваем его количество на 1,
		// пересчитываем total и вносим измененный food в список
		} else {
			food = {...this.state.foods[index]};
			food.count++;
			food.total = food.price * food.count;
			foods[index] = food;
		}

		// вызываем метод, пересчитывающий общую стоимость заказа
		let total = this.getTotal(foods);

		// вносим полученные значения foods и total в стейт
		this.setState({...this.state, foods, total});
	};


	// подсчет общей стоимости заказа: складываем total каждого блюда в общую сумму
	getTotal = (foods) => {
		return foods.reduce((total, food) => total + food.total, 0);
	};


	// удаление блюда из заказа
	removeOrderFood = (event, name) => {
		event.preventDefault();

		// находим индекс элемента по имени
		const index = this.state.foods.findIndex(food => food.name === name);
		// копируем массив foods в новую переменную для проведения манипуляций
		let foods = [...this.state.foods];

		// копируем блюдо, уменьшаем его количество на 1,
		let food = {...this.state.foods[index]};
		food.count--;

		// если это блюдо осталось в заказе, то пересчитываем его стоимость
		// и копируем полученные данные в foods (находим элемент по индексу)
		if(food.count > 0) {
			food.total = food.price * food.count;
			foods[index] = food;
		// если блюда больше нет в заказе, удаляем его из foods, найдя по индексу
		} else {
			foods.splice(index, 1);
		}

		// вызываем метод, пересчитывающий общую стоимость заказа
		let total = this.getTotal(foods);

		// вносим полученные значения foods и total в стейт
		this.setState({...this.state, foods, total});
	};	


	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col col-4">
						<Order 
							foods={this.state.foods}
							total={this.state.total}
							removeOrderFood={this.removeOrderFood}
						/>
					</div>
					<div className="col col-8">
						<Menu
							foods={FOODS}
							addOrderFood={this.addOrderFood}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
