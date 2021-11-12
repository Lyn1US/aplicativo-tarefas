import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect ,useCallback } from 'react';
import { Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Style from './style.js';
import { Ionicons } from '@expo/vector-icons'

import database from './firebase.js';

export default function App() {

  const [screen, setScreen] = useState('login');  // MUDANÇA DE TELA

    // TAREFAS

  const [tasks, setTasks] = useState([]); // TAREFAS
  const [newTask, setNewTask] = useState(''); // NOVA TAREFA PARA SER ADC


    // CADASTRO DE USUÁRIOS

  const [users,setUsers] = useState([]);  

  const [username, setUsername] = useState(''); 
  const [name, setName] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [cash, setCash] = useState('');   
  const [birthdate, setBirthdate] = useState('');

  // LOGIN DE USUÁRIOS

  const [currentUser, setCUser] = useState('');
  const [currentPassword, setCPassword] = useState('');
  const [welcomeName, setWN] = useState('');
  const [currentID, setCID] = useState('');

  const [user, setUser] = useState([]);

  // ALTERAR USUÁRIOS

  const [newUsername,setNU] = useState('');
  const [newPassword,setNP] = useState('');


  useEffect(()=>{

    database.collection("tasks").onSnapshot((query)=>{

      const list = [];

      query.forEach((doc)=>{
        list.push({...doc.data(),id: doc.id})
      })
      setTasks(list);
    });

    database.collection("users").onSnapshot((query)=>{

      const list = [];

      query.forEach((doc)=>{
        list.push({...doc.data(),id: doc.id})
      })
      setUsers(list);
    })

  },[])

  // FUNÇÕES DA PARTE DE TAREFAS

  function returnTasks(){
    return tasks.map((task)=>{
      return(
        <View style={Style.taskDisplay} key={task.id}>


          
            <TouchableOpacity onPress={()=> checklet(task.id)} style={Style.taskDeleteBtn}>
              <Ionicons  size={30} style={{color: '#FF4248'}} name="trash" />
            </TouchableOpacity>

            <Text style={Style.taskContent}>{task.task}</Text>

            <TouchableOpacity onPress={()=> checklet(task.id)} style={Style.taskCompleteBtn}>
              <Ionicons  size={30} style={{color: '#61D870'}} name="checkmark-circle-outline"/>
            </TouchableOpacity>
   

        </View>
      )
    })
  }

  function addTask(){
    database.collection("tasks").add({task: newTask})
    alert('tarefa adicionada!');
    setScreen('view')
  }

  function checklet(id){
    database.collection("tasks").doc(id).delete();
    alert('tarefa concluida!');
  }

  // FUNÇÕES DA PARTE DE USUÁRIOS

  function addUser(username,name,password,birthdate){

    database.collection("users").add({

      role: "user",
      username: username, 
      name: name,
      password: password, 
      birthdate: birthdate,
    
    })

    alert('usuarios cadastrados com sucesso!');

  }

  function loginUser(username,password){
    users.map((value)=>{
      if(username == value["username"] && password == value["password"]){
        alert('Bem-vindo, ' + value["name"]);
        setWN(value["name"]);
        setCID(value.id);
        setScreen('view');

        user.push(value.id,username,value["name"],value["password"],value["role"],value["birthdate"])

        return;
      }
    })

    console.log(user);

  }

  function logout(){

    setUser([]);
    setScreen('login');
  }

  function editUser(id,newUsername,newPassword){

    database.collection("users").doc(id).update({username: newUsername, password: newPassword})
    alert('Dados alterados com sucesso!');
    setScreen('login');

    database.collection("users").onSnapshot((query)=>{

      const list = [];

      query.forEach((doc)=>{
        list.push({...doc.data(),id: doc.id})
      })
      setUsers(list);
    })


  }



  if(screen == 'login'){

    return(
      <View style={Style.container}>
        
        <View style={Style.containerTitleLogin}>
          <Text style={Style.textLoginTitle}>TAREFITCHAS</Text>
          <Ionicons style={{color: 'white'}} size={35} name="newspaper-outline"/>
        </View>

        <Ionicons size={50} style={{color: 'white', alignSelf: 'center', marginTop: '20%',}} name="person-outline" />

        <TextInput onChangeText={(text)=>setCUser(text)} placeholderTextColor="white" placeholder="Nome de Usuário" style={Style.inputLogin}/>
        <TextInput onChangeText={(text)=>setCPassword(text)} placeholderTextColor="white" placeholder="Senha" style={Style.inputLogin}/>

        <TouchableOpacity onPress={()=>setScreen('cad')} style={Style.btnCreateAccount}>
          <Text style={Style.createAccountTxt}>Não possui conta? Clique aqui!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> loginUser(currentUser,currentPassword)} style={Style.loginButton}>
          <Text style={Style.loginButtonTxt}>Login</Text>
        </TouchableOpacity>
      
      </View>
    );

  }
  else if(screen == 'cad'){

    return(
      <View style={Style.container}>
        
        <Ionicons size={75} style={{color: 'white', alignSelf: 'center', marginTop: '5%'}} name="person-add-outline" />

        <Text style={Style.labelCadTitle} >Novo Usuário</Text>
      
        <TextInput onChangeText={(text)=>setUsername(text)} placeholderTextColor="white" placeholder="Nome de Usuário" style={Style.inputLogin}/>
        <TextInput onChangeText={(text)=>setName(text)} placeholderTextColor="white" placeholder="Seu nome" style={Style.inputLogin}/>
        <TextInput onChangeText={(text)=>setBirthdate(text)} placeholderTextColor="white" placeholder="Data de Nascimento" style={Style.inputLogin}/>
        

        <TextInput onChangeText={(text)=>setPassword(text)} secureTextEntry={true} placeholderTextColor="white" placeholder="Sua senha"style={Style.inputLogin}/>
        

        <TouchableOpacity onPress={()=>addUser(username,name,password,birthdate)} style={Style.loginButton}>
          <Text style={Style.loginButtonTxt}>cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setScreen('login')} style={Style.loginButton}>
          <Text style={Style.loginButtonTxt}>ja tenho uma conta</Text>
        </TouchableOpacity>

      </View>
    );

  }
  else if(screen == 'view'){

    return (
      <View style={Style.container}>

        <View style={Style.welcomeContainer}>
          <Text style={Style.welcomeText}>{"Bem vindo, " + welcomeName}</Text>
          
          <TouchableOpacity onPress={()=> setScreen('edit')} style={Style.configButton}>
            <Ionicons size={35} style={{color: 'white'}} name="settings-outline"/>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={()=> setScreen('add')} style={Style.navigateBtn}>
          <Text style={Style.navigateBtnTxt}> Nova Tarefa </Text>
        </TouchableOpacity>

        <Text style={Style.titleLabel}> Tarefas: </Text>
        
        <View style={Style.scrollViewContainer}>
        <ScrollView >
          {
          returnTasks()
          }
        </ScrollView>
        </View>
      
      </View>
    );
  }
  else if(screen == 'add'){

    return(

      <View style={Style.container}>

        <TextInput onChangeText={(text)=>setNewTask(text)} placeholderTextColor="white" placeholder="Adicione aqui sua nova tarefa" style={Style.input}/>

        <TouchableOpacity onPress={()=> addTask()} style={Style.btnAdd}>
          <Ionicons size={50} style={{textAlign: 'center',color: '#3F48CC'}} name="add-circle-outline" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> setScreen('view')} style={Style.backBtn}>
          <Ionicons name="arrow-back-circle" style={{color: '#F29718'}} size={50}/>
        </TouchableOpacity>

      </View>
    )

  }
  else if(screen == 'edit'){

      return(
        <View style={Style.container}>
         
          {
            (user[4] == "adm")
            ?
              <View style={Style.container}>
                <TouchableOpacity onPress={()=>setScreen('view')} style={Style.btnBack}>
                  <Ionicons size={40} name="arrow-back-outline" style={{alignSelf: 'center'}}/>
                </TouchableOpacity>
      
                <Text style={Style.textEditTitle}>INFORMAÇÕES DA CONTA</Text>

                <TouchableOpacity onPress={()=> logout()} style={Style.loginButton}>
                  <Text style={Style.loginButtonTxt}>fazer logout</Text>
                </TouchableOpacity>

              </View>
            :
            (user[4] == "user")
            ?
            <View style={Style.container}>

              <TouchableOpacity onPress={()=>setScreen('view')} style={Style.btnBack}>
                <Ionicons size={40} name="arrow-back-outline" style={{alignSelf: 'center'}}/>
              </TouchableOpacity>
    
              <Text style={Style.textEditTitle}>INFORMAÇÕES DA CONTA</Text>

              <TextInput onChangeText={(text)=> setNU(text)} placeholderTextColor="white" placeholder="Novo nome" style={Style.inputLogin}/>
              <TextInput onChangeText={(text)=> setNP(text)} placeholderTextColor="white" placeholder="Nova senha" style={Style.inputLogin}/>
      
              <TouchableOpacity onPress={()=>editUser(currentID,newUsername,newPassword)} style={Style.loginButton}>
                <Text style={Style.loginButtonTxt}>editar</Text>
              </TouchableOpacity>
      
              <TouchableOpacity onPress={()=> setScreen('view')} style={Style.loginButton}>
                <Text style={Style.loginButtonTxt}>cancelar</Text>
              </TouchableOpacity> 
      
              <TouchableOpacity onPress={()=> logout()} style={Style.loginButton}>
                <Text style={Style.loginButtonTxt}>fazer logout</Text>
              </TouchableOpacity>
            </View>
            :
            <View></View>
          }

        </View>
      );
    

  }

}

/*

<TouchableOpacity onPress={()=>setScreen('view')} style={Style.btnBack}>
  <Ionicons size={40} name="arrow-back-outline" style={{alignSelf: 'center'}} />
</TouchableOpacity>

<Text style={Style.textEditTitle}>INFORMAÇÕES DA CONTA</Text>

<TextInput onChangeText={(text)=> setNU(text)} placeholderTextColor="white" placeholder="Novo nome" style={Style.inputLogin}/>
<TextInput onChangeText={(text)=> setNP(text)} placeholderTextColor="white" placeholder="Nova senha" style={Style.inputLogin}/>

<TouchableOpacity onPress={()=>editUser(currentID,newUsername,newPassword)} style={Style.loginButton}>
  <Text style={Style.loginButtonTxt}>editar</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=> setScreen('view')} style={Style.loginButton}>
  <Text style={Style.loginButtonTxt}>cancelar</Text>
</TouchableOpacity> 

<TouchableOpacity onPress={()=> setScreen('login')} style={Style.loginButton}>
  <Text style={Style.loginButtonTxt}>fazer logout</Text>
</TouchableOpacity>


*/ 
