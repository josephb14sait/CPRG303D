import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const Footer = () => (
    <View style={styles.footer}>
      <Text>2024</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;