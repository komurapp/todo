import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#0288d1"
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 30
  },
  input: {
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    width: "100%",
  },
  header: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "400"
  },
  todo: {
    fontSize: "18px",
    color: "#fff"
  }
}

class App extends Component {
  state = {
    text: "",
    todo: []
  }

  onChangeText = text => {
    this.setState({ text: text });
  }

  addTodo = () => {
    const newItem = this.state.text;
    const newTodo = this.state.todo;
    newTodo.push(newItem);
    this.setState({
      todo: newTodo,
      text: ""
    });
  }

  deleteTodo = index => {
    const todoList = this.state.todo;
    const position = todoList[index];
    todoList.splice(position, 1);
    this.setState({ todo: todoList });
  }

  renderTodos = () => (
    this.state.todo.map((el, index) => (
      <TouchableOpacity key={index}>
        <Text
          style={styles.todo}
          onPress={() => this.deleteTodo(index)}
        >
          {el}
        </Text>
      </TouchableOpacity>
    ))
  );

  render() {
    console.log('this.state', this.state)
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.header}>Notes App</Text>
          <TextInput
            style={styles.input}
            onChangeText={t => this.setState({ text: t })}
            value={this.state.text}
          />
          <Button
            title="Add Todo"
            color="green"
            onPress={this.addTodo}
          />
          <View style={{ marginTop: 100 }} />
          {this.renderTodos()}
        </View>
      </View>
    );
  }
}

export default App;
