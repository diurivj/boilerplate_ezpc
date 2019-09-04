console.log('ye');

document.querySelector('button').onclick = () => {
  const li = document.createElement('li');
  li.innerText = 'Lisbon';
  document.querySelector('ul').appendChild(li);
};
