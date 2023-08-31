import { StyleSheet, Text, View, Button , TextInput, ScrollView, FlatList, Pressable} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText){
    //setCourseGoals([...courseGoals, enteredGoalText])//adiciona o novo
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])//forma mais recomendada, fiz com o objeto por causa do flatList
    endAddGoalHandler()
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal)=>goal.id !== id)
    })
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add new goal' color="#a065ec" onPress={startGoalHandler}/>   
      <GoalInput onAddGoal = {addGoalHandler} visible = {modalIsVisible} onCancel = {endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData)=>{
          return <GoalItem text={itemData.item.text} onDeleteItem= {deleteGoalHandler} id={itemData.item.id}/>
        }} keyExtractor={(item, index)=>{
          return item.id//para mostrar que o key deve ser o item.id, fazer quando o objeto nao tem necessariamnete o nome da proprieade key.
        }}/>
      </View>
    </View>
    </>
  );
}



const styles = StyleSheet.create({//usar o stylesheet para conseguir o autocomplete
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,//para pegar todo o espaço disponivel
  },
  goalsContainer: {
    flex: 6,
  },
  
});
