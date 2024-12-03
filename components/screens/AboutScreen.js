import React, { useState } from 'react';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {

    const MainLayout = ({ children }) => {
        return (
            <View style={styles.container}>
                {children}
                <Footer />
            </View>
        );
    };

    const currentDate = new Date().toLocaleDateString();

    return (
        <MainLayout>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About This App</Text>
            <Text>App Name: Incredible ToDo List App</Text>
            <Text>Created By: Your Name</Text>
            <Text>Date: {currentDate}</Text>
        </MainLayout>
    );
}

const styles = StyleSheet.create({});

export default AboutScreen;