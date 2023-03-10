import React from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";


const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = React.useState();

    const inputOnChangeHandler = (enteredText) => setEnteredGoal(enteredText);

    onBtnPresHandler = () => props.onAddGoal(enteredGoal);

    return (
        <Modal visible={props.visible} animationType='slide' >
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput style={styles.textInput}
                    ref={props.ref}
                    placeholder='Enter your goal'
                    value={enteredGoal}
                    onChangeText={inputOnChangeHandler}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={onBtnPresHandler} title='Add goal' color={"#5e0acc"} />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={props.onCancel} title='Cancel' color={"#f31282"} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        borderBottomWidth: 1,
        backgroundColor: '#870dd8',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        padding: 10,
        width:  '100%',
        borderRadius: 6,
    },
    buttonContainer: {
        width:  '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    button: {
        marginTop: 20,
        width: 100,
    },
});