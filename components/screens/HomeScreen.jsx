import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {

    const MainLayout = ({ children }) => {
        return (
            <View style={styles.container}>
                {children}
                <Footer />
            </View>
        );
    };

    return (
        <MainLayout>
            <ToDoList />
            <ToDoForm />
            <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
            />
        </MainLayout>
    );
}

const styles = StyleSheet.create({});

export default HomeScreen;
