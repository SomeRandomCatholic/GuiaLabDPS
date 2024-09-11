import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

const Barcodescanner = ({route}) => {
    const [facing, setFacing] = useState('back');
    const [isCameraVisible, setIsCameraVisible] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    const [libre, setLibre] = useState(true);

    if (!permission)
        return <View />
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Necesita permiso para usar la cámara</Text>
                <Button style={styles.buttonText} onPress={requestPermission} title='Otorgar permiso' />
            </View>
        )
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    function handleOpenCamera() {
        setIsCameraVisible(true);
    }

    function handleCloseCamera() {
        setIsCameraVisible(false);
    }

    function codigoEscaneado(codigo) {
        setLibre(false);
        Alert.alert("Resultado", "El código escaneado es " + codigo.data, [
            {
                text: "Guardar",
                onPress: () => {

                    const {guardar} = route.params;
                    guardar(codigo.data);
                    setLibre(true);
                }
            },
            {
                text: "Cancelar",
                onPress: () => setLibre(true)
            }
        ]);
    }

    return (
        <View style={styles.container}>
            {isCameraVisible ? (
                <CameraView style={styles.camera} facing={facing} onBarcodeScanned={(codigo) => {
                    if (libre == true)
                        codigoEscaneado(codigo);
                }}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                            <Text style={styles.text}>Girar Cámara</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleCloseCamera}>
                            <Text style={styles.text}>Cerrar Cámara</Text>
                        </TouchableOpacity>
                    </View>
                </CameraView>
            ) : (
                <View style={styles.contenedorB}>
                    <Button style={styles.buttonText} title="Abrir cámara" onPress={handleOpenCamera}></Button>
                </View>
            )}
        </View>
    )
}

export default Barcodescanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    contenedorB: {
        width: 200,
        alignSelf: 'center',
    }
})