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

// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
	const term = e.target.value.toLowerCase();
	const books = list.getElementsByTagName('li');
	Array.from(books).map((book) => {
		const title = book.firstElementChild.textContent;
		// if statement checks the position of term inside the title
		// -1 means term is not in title
		if (title.toLowerCase().indexOf(term) !== -1) {
			book.style.display = 'block';
		} else {
			book.style.display = 'none';
		}
	});
});

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e) {
	if (e.target.tagName == 'LI') {
		const targetPanel = document.querySelector(e.target.dataset.target);
		Array.from(panels).map((panel) => {
			if (panel == targetPanel) {
				panel.classList.add('active');
			} else {
				panel.classList.remove('active');
			}
		});
	}
});
