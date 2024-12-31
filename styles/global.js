import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    containerPrompt: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'space-between',
    },
    titleText: {
        fontSize: 20,
        color: '#fff',   
        textAlign: 'center',  
        marginBottom: 10,
    },
    paragraph: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 5,
        lineHeight: 22,
        color: '#fff',
        fontSize: 18,
    },
    submitBtn: {
        minWidth: 200,
        margin: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282ddb',
        borderRadius: 25,
    },
    errorText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    form_inputWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    form_label: {
        color: '#1d1c3b',
        backgroundColor: '#fff',
        padding: 8,
        position: 'relative',
        top: Platform.OS === 'android' ? -8.1 : -7,
        left: 0,
        borderRadius: 5,
        height: 40,
    },
    form_input: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 18,
        width: Platform.OS === 'android' ? 300 : 260,
        height: 40,
        position: 'relative',
        left: -8,
    },
    movieContainer: {
        flexDirection: 'row',
        backgroundColor: '#1d1c3b',
        alignItems: 'center',
        width: 350,
        height: 175,
        marginBottom: 20,
    },
    movieInfoContainer: {
        flex: 1,
        padding: 10,
    },
    moviePoster: {
        width: 117,
        height: 175,
        borderRadius: 10,
    },
    movieTitle: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
    movieYear: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
    }
});