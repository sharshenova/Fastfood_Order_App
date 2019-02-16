import React, { Component } from 'react';
import {importAll} from './utils/import-all';
import './App.css';
import Menu from './Components/Menu/Menu';
//import Order from './Components/Order/Order';

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
		order: [],
		total: 0
	};





	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col col-4">
					</div>
					<div className="col col-8">
						<Menu foods={FOODS}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
