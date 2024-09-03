import react from "react";
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const StepScreen = ({step, description, image, onNextStep}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.stepText}>Paso {step}</Text>
            <Text style={styles.descriptionText}>{description}</Text>
            <Image source={{uri: image}} style={styles.imagenes}></Image>
            <Button title="Siguiente" onPress={onNextStep}/>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    stepText:{
        fontSize: 24,
        marginBottom: 10,
    },
    descriptionText: {
        textAlign: 'center',
        marginBottom: 20
    },
    imagenes:{
        width: '100%',
        height: 300,
        marginBottom: 50,
    }
})

export default StepScreen;