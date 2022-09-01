import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from "../utils/Api";

export const Cliente = (props) => {

    const Deletar = (id) => {
        api.delete('usuarios/' + id)
            .then(() =>
                props.navigation.push('Clientes'));
    }

    return (
        <View style={styles.card}>
            <View style={styles.clienteBox}>
                <Text
                    style={{
                        textTransform: 'uppercase',
                        color: '#FFF',
                        fontWeight: 'bold'
                    }}>
                    {props.inicial}
                </Text>
            </View>
            <TouchableOpacity onPress={() => {
                props.navigation.push('Saldos', { id: props.id, nome: props.nome })
            }}>
                <Text>{props.nome}</Text>
                <Text style={{
                    color: '#F56A4D',
                    fontWeight: 'bold', fontSize: '18px'
                }}> R$ {props.valorTotal}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                Deletar(props.id)
            }} >
                <Image
                    style={styles.lixeira}
                    source={{
                        uri: 'https://img.freepik.com/vetores-gratis/ilustracao-do-icone-de-lixeira_53876-5598.jpg',
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Cliente;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '12px',
        marginVertical: '10px',
        paddingVertical: '20px',
        shadowColor: "#3F3D46",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    lixeira: {
        width: 40,
        height: 40,
    },
    clienteBox: {
        backgroundColor: '#F56A4D',
        paddingHorizontal: '20px',
        paddingVertical: '20px',
        borderRadius: '12px'
    }
});