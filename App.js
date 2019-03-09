import React, { Component } from "react";
import { View, Text} from "react-native";

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
}

class App extends Component {
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text>Hello there</Text>
      </View>
    );
  }
}

export default App;
