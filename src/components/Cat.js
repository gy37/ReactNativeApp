import React, {useState} from 'react'
import { Text, View, TextInput, Image, Button } from 'react-native'

const getFullName = (firstName, middleName, lastName) => {
  return firstName + " " + middleName + " " + lastName;
}

const Cat = (props) => {
  //[<取值>, <设值>] = useState(<初始值>)
  const [isHungry, setIsHungry] = useState(true);
  //当你调用setIsHungry这样的设置状态的函数时，其所在的组件会重新渲染。此处这一整个Cat函数都会从头重新执行一遍。重新执行的时候，useState会返回给我们新设置的值。
  const name = "Maru";
  return (
    <View>
      {/* <Text>Hello, I am your cat!</Text>
      <Text>Hello, I am {name}!</Text>
      <Text>Hello, I am {getFullName("Rum", "Tum", "Tugger")}!</Text> */}
      {/* <Text>Hello, I am {props.name}</Text> */}
      {/* <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} defaultValue="input name"></TextInput> */}
      {/* <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}} style={{width: 200, height: 200}}></Image> */}
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button 
        onPress={()=>{ setIsHungry(false) }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
        ></Button>
    </View>
  )
}

export default Cat;//使用了export default语句来导出这个组件，以使其可以在其他地方引入使用
