import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Motion, spring } from 'react-motion';
import { map, range } from 'lodash';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showList: true
      });
    }, 3000);
  }
  render() {
    const { showList } = this.state;
    return (
      <View style={styles.container}>
        {!showList && (
          <Motion
            defaultStyle={{ translateY: 32, opacity: 0 }}
            style={{ translateY: spring(0), opacity: spring(1) }}
          >
            {value => (
              <Image
                source={{
                  uri:
                    'http://edge.innovaccer.com/public/img/datashop-care@2x.png'
                }}
                style={{
                  height: 40,
                  width: '100%',
                  transform: [{ translateY: value.translateY }],
                  opacity: value.opacity
                }}
                resizeMode="contain"
              />
            )}
          </Motion>
        )}
        {showList && (
          <FlatList
            style={{ width: '100%' }}
            data={map(range(100), item => ({ key: item }))}
            ListHeaderComponent={<Text>Header</Text>}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        )}
      </View>
    );
  }
}

export default App;
