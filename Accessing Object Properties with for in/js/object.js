var person = {
  name : 'Blake A',
  country : 'US',
  age : 33,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

for (prop in person) {
  console.log(prop, ': ', person[prop]);
}



// function print(message) {
//   var div = document.getElementById('output');
//   div.innerHTML = message;
// }

// var message = '<p>Hello. My name is ' + person.name + '.</p>';
// message += '<p>I live in the ' + person.country + '.</p>';
// person.name = 'Paco Denver';
// message += '<p>But, I wish my name was ' + person.name + '.</p>';
// person.age += 1;
// message += '<p>My age is ' + person.age + '.</p>';
// message += '<p>I have ' + person.skills.length + ' skills.</p>';
// message += person.skills.join(', ') + '</p>';
// print(message);
