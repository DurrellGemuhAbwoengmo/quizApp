import { StyleSheet } from 'react-native';

const styles = StyleSheet.create( {
    mainView: {
        flex: 1,
        //backgroundColor: 'blue'
        justifyContent: 'space-around'
    },
    // mainView1: {
    //     flex: 1,
    //    // backgroundColor: 'blue',
    //    // justifyContent: 'space-around'
    // },
    backgroundanimestyle: {
        backgroundColor: '#ebedf070',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    btnView: {
        flex: 1,
        justifyContent: 'center',
    },
    Button1: {
        margin: 10,
        height: 140  
    },
    Button2: {
        marginTop: 10,
        height: 50,  
    },
    xanswerView: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'flex-end',
    },
    xanswerText: {
        color: '#03C3F6',
        fontSize: 20,
        fontFamily: 'ZhiMangXing-Regular'
    },
    qtnText: {
        textAlign: 'center',
        color: '#03C3F6',
        fontSize: 20,
        fontFamily: 'ZhiMangXing-Regular'
    },
    qtnView: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    


} );

export default styles;