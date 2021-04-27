import "./App.css";
import React /*useState*/ from "react";

class App extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ people: data.results });
  }

  render() {
    return (
      <div className="data">
        {this.state.loading & !this.state.people.length ? (
          <div>loading...</div>
        ) : (
          <div>
            {this.state.people.map((person, i) => (
              <div className="mappingPeople" key={i}>
                <div>Name: {person.name.first}</div>
                <div>Lastname: {person.name.last}</div>
                <div>State: {person.location.state}</div>
                <div>e-mail: {person.email}</div>
                <div>
                  <img src={person.picture.large} alt="" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default App;
