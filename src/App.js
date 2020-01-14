import React from "react";
import "./App.css";

import Header from "./components/Header";
import CardList from "./components/CardList";
import Form from "./components/Form";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook"
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu"
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook"
  }
];

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData
  //   };
  // }

  state = {
    profiles: testData
  };

  addNewProfile = profileData => {
    console.log("App", profileData);
    this.setState(previousState => ({
      profiles: [...previousState.profiles, profileData]
    }));
  };

  render() {
    return (
      <>
        <Header title="The Github Cards App" />
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </>
    );
  }
}

export default App;
