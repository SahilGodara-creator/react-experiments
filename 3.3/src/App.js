import "./App.css";
import Person from "./classes/Person";
import Student from "./classes/Student";
import Teacher from "./classes/Teacher";

function App() {
  const people = [
    new Person("Sahil Godara", 18),
    new Student("Neha Sharma", 21, "Artificial Intelligence"),
    new Teacher("Prof. Sneha Verma", 50, "Data Structures"),
  ];

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div className="card" key={index}>
          <h2>
            {person.name} ({person.constructor.name})
          </h2>

          <p>Age: {person.age}</p>
          <p className="intro">{person.introduce()}</p>

          {person.major && <p>Major: {person.major}</p>}
          {person.subject && <p>Teaching: {person.subject}</p>}
        </div>
      ))}
    </div>
  );
}

export default App;