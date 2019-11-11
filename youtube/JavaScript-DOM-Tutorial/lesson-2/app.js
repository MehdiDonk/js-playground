const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', function(e) {
	console.log(e.target);
	if (e.target.className == 'delete') {
		const li = e.target.parentElement;
		li.remove();
	}
});

// add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;
	console.log(value);

	// create elements
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deleteBtn = document.createElement('span');

	// add content
	deleteBtn.textContent = 'delete';
	bookName.textContent = value;

	// add class
	deleteBtn.classList.add('delete');
	bookName.classList.add('name');

	// append to document
	li.appendChild(bookName);
	li.appendChild(deleteBtn);
	list.appendChild(li);
});

// hide book
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
	if (hideBox.checked) {
		list.style.display = 'none';
	} else {
		list.style.display = 'block';
	}
});
