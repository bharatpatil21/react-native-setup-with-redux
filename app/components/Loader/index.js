import React from 'react';
import { ActivityIndicator, ScrollView, View, StyleSheet } from 'react-native';

export default class Loader extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={[styles.loading]}>
          <ActivityIndicator size="small" />
        </View>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  loading: {
    marginTop: 200,
    left: 0,
    opacity: 0.5,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
