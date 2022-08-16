const people = [
  {
    name: 'Marius',
    lastName: 'pavardenis',
    number: 321651,
    car: 'audi',
    isAlive: 'true',
  },
  {
    name: 'Tadas',
    lastName: 'pavardenis',
    number: 423,
    car: null,
  },
  {
    name: 'Vidmantas',
    lastName: 'pavardenis',
    number: 45555,
  },
  {
    name: 'Juozas',
    lastName: 'pavardenis',
    number: 123123,
  },
];

const mainSection = document.querySelector('main');

const tableElement = document.createElement('table');

const headerRow = document.createElement('tr');

// const tableHeaderName = document.createElement('th');
// tableHeaderName.textContent = 'Name';
// const tableHeaderLastName = document.createElement('th');
// tableHeaderLastName.textContent = 'Last Name';
// const tableHeaderNumber = document.createElement('th');
// tableHeaderNumber.textContent = 'Number';

// tableElement.appendChild(tableHeaderName);
// tableElement.appendChild(tableHeaderLastName);
// tableElement.appendChild(tableHeaderNumber);

const peopleObjectKeys = Object.keys(people[0]);

for (let index = 0; index < peopleObjectKeys.length; index++) {
  const tableHeader = document.createElement('th');
  tableHeader.textContent = peopleObjectKeys[index];

  headerRow.appendChild(tableHeader);
}

tableElement.appendChild(headerRow);

for (let index = 0; index < people.length; index++) {
  const row = document.createElement('tr');

  // const name = document.createElement('td');
  // name.textContent = people[index].name;
  // const lastName = document.createElement('td');
  // lastName.textContent = people[index].lastName;
  // const number = document.createElement('td');
  // number.textContent = people[index].number;

  // row.appendChild(name);
  // row.appendChild(lastName);
  // row.appendChild(number);

  const personValues = Object.values(people[index]);

  for (let j = 0; j < personValues.length; j++) {
    const cell = document.createElement('td');
    cell.textContent = personValues[j];

    row.appendChild(cell);
  }

  tableElement.appendChild(row);
}

mainSection.appendChild(tableElement);
