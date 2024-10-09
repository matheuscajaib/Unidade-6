let grocery = document.getElementById("lista");

grocery.addEventListener('submit', addItem);

function addItem(event){
    event.preventDefault();

    let data = this.elements.writeList.value;
    let list = document.querySelector('ol');
    let item = document.querySelector('li');
    let text = document.querySelector('p');

    text.textContent = data;
    this.elements.writeList.value = "";
    item.append(text);
    list.append(item);

    let removeButton = document.createElement('span');
    removeButton.classList.add('remove');
    item.append(removeButton);
    removeButton.addEventListener('click', deleteItem);
    item.addEventListener('click', doneItem);

}

function deleteItem(event){

    this.parentElement.remove();

}

function doneItem(event){

    this.classList.toggle('done');
}