import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

/*
#090816 - BACKGROUND
#61D870 - CHECK BUTTON
#FF4248 - DELETE BUTTON
#3F48CC - ADD BUTTON
#F29718 - BACK BUTTON
*/

    container:{
        marginTop: Constants.statusBarHeight,
        width: '100%',
        height: '100%',
        backgroundColor: '#090816',
    },

    navigateBtn:{
        marginTop: '5%',
        width: '80%',
        height: '10%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 2,
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },

    navigateBtnTxt:{
        fontSize: 19,
        fontWeight: '400',
        textTransform: 'uppercase',
    },

    titleLabel:{
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '400',
        textTransform: 'capitalize',
        color: '#FFFFFF',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: '6%',
    },

    taskDisplay:{
        width: '80%',
        marginTop: '10%',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center',
    },

    taskDeleteBtn:{
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    taskCompleteBtn:{
       
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    taskContent:{
        
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: 'white',
    },

    welcomeContainer:{
        width: '100%',
        height: '10%',
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    configButton:{
        //backgroundColor: 'white'
    },
    welcomeText:{
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        marginRight: '5%',
    },
    scrollViewContainer:{
    
       width: '100%',
       height: '60%',
       //backgroundColor: 'white',
       marginBottom: '4%',
    },
    // ADD SCREEN

    input:{
        marginTop: '20%',
        width: '90%',
        height: '10%',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
    },

    btnAdd:{
        position: 'absolute',
        width: 45,
        height: 45,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        right: 25,
        bottom: 100,
        
    },

    backBtn:{
        position: 'absolute',
        width: 45,
        height: 40,
        bottom: 100,
        left: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 40,
    },

    // LOGIN SCREEN

    containerTitleLogin:{
        width: '100%',
        height: '6%',
        marginTop: '2%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLoginTitle:{
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: '400',
        color: 'white',
        marginRight: '2%',
    },

    inputLogin:{
        marginTop: '10%',
        width: '90%',
        height: '10%',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
    },

    inputLoginDate:{
        marginTop: '3%',
        width: '40%',
        height: '4%',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
    },
    
    btnCreateAccount:{
        marginTop: '5%',
        width: '60%',
        height: '5%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    createAccountTxt:{
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
    },

    loginButton:{

        width: '70%',
        height: '5%',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 15,   
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '10%',

    },

    loginButtonTxt:{
        color: 'black',
        fontSize: 17,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '500',
    },

    labelCadTitle:{
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
        alignSelf: 'center',
        marginTop: '10%',
    },

    // EDIT SCREEN

    btnBack:{
        marginLeft: '5%',
        marginTop: '5%',
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textEditTitle:{
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginTop: '5%',
        textTransform: 'uppercase',
        textAlign: 'center',
    },



})