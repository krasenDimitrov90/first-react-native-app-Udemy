import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = (props) => {

    return (
        <View style={styles.goalItem} >
            <Pressable
                onPress={props.onDelete}
                android_ripple={{ color: '#a89cee' }}
            >
                <Text style={styles.goalText} >{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 12,
        // flexDirection: 'row',
        // justifyContent: 'center',
        backgroundColor: "#2c0be4",
        borderRadius: 8,
    },
    goalText: {
        color: '#ffffff',
        padding: 6,
        borderRadius: 8,
    },
});