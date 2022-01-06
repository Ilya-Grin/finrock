function ValidMail() {
	var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
	var myMail = document.getElementById('email').value;
	var valid = re.test(myMail);
	if (valid) {
		document.getElementById('email-error').style.display = 'none';
		return true;
	}
	else {
		let output = 'Адрес электронной почты введен неправильно!';
		if (myMail)
			document.getElementById('email-error').innerHTML = output;
		document.getElementById('email-error').style.display = 'block';
		return false;
	}
	if (document.getElementById('email').value == '') {
		console.log('dsd');
		document.getElementById('email-error').innerHTML = 'Адрес электронной почты введен неправильно!';
		document.getElementById('email-error').style.display = 'block';
		return false;
	}
}

function ValidName() {
	if (document.querySelector('#form-name').value != '') {
		let value = document.querySelector('#form-name').value;
		if (value.split(' ').length == 2) {
			console.log('True');
			document.querySelector('#form-name-error').style.display = 'none';
			return true;
		} else {
			document.querySelector('#form-name-error').innerHTML = 'Введите имя и фамилию!'
			document.querySelector('#form-name-error').style.display = 'block'
			return false;
		}
	} else {
		document.querySelector('#form-name-error').innerHTML = 'Введите имя и фамилию!'
		document.querySelector('#form-name-error').style.display = 'block'
		return false;
	}
}

function ValidPhone() {
	var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	let res = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
	var myPhone = document.getElementById('phone').value;
	var valid = res.test(myPhone);
	if (valid) {
		document.getElementById('phone-error').style.display = 'none';
		return true;
	}
	else {
		let output = 'Номер телефона введен неправильно!';
		document.getElementById('phone-error').innerHTML = output;
		document.getElementById('phone-error').style.display = 'block';
		return false;
	}
	if (document.getElementById('phone-error').value == '') {
		document.getElementById('phone-error').innerHTML = 'Номер телефона введен неправильно!';
		document.getElementById('phone-error').style.display = 'block';
		return false;
	}
}

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href')

		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
