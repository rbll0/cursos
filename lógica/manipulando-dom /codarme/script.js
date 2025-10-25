const inputElement = document.querySelector('input#tarefa')
const buttonElement = document.querySelector('form button')
const ulElement = document.querySelector('ul')

buttonElement.onclick = ev => {
  ev.preventDefault();

  if (inputElement.value) {
    const textElement = document.createElement('span')
    const btnElement = document.createElement('button')
    const liElement = document.createElement('li')

    textElement.innerHTML = inputElement.value
    btnElement.innerHTML = "Remover";

    liElement.appendChild(textElement)
    liElement.appendChild(btnElement)

    btnElement.onclick = () => {
      ulElement.removeChild(liElement)
    }

    ulElement.appendChild(liElement);
    inputElement.value = "";
  }

}
