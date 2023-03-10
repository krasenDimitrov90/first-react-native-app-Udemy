import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

    const [goals, setGoals] = React.useState([]);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const onModalOpen = () => setModalIsOpen(true);
    const onModalClose = () => setModalIsOpen(false);

    const onBtnPresHandler = (enteredGoal) => setGoals((curr) => {
        onModalClose();
        return (
            [...curr,
            {
                text: enteredGoal,
                id: Math.random().toString(),
            }
            ]
        );
    });

    const onDeleteHandler = (id) => setGoals(curr => {
        return curr.filter(goal => goal.id !== id);
    });


    return (
        <View style={styles.appContainer}>
            <Button title='Open input' onPress={onModalOpen} />
            {modalIsOpen &&
                <GoalInput
                    onAddGoal={onBtnPresHandler}
                    visible={modalIsOpen}
                    onCancel={onModalClose}
                />}

            <View style={styles.goalsSection}
            >
                <FlatList
                    data={goals}
                    renderItem={(itemData) => { // here itemData comes like an OBJECT becouse of the FlatList implemantation
                        return <GoalItem
                            text={itemData.item.text}
                            onDelete={onDeleteHandler.bind(null, itemData.item.id)}
                        />
                    }}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
        flex: 1,
    },

    goalsSection: {
        flex: 5,
        paddingTop: 10,
    },

});
