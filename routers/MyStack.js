import {createStackNavigator} from "@react-navigation/stack"
import CustomNavigationBar from "../Components/CustomNavigationBar"
import HomeScreen from "../screens/HomeScreen"
import DetailScreen from "../screens/DetailScreen"

const Stack = createStackNavigator();
const MyStack =()=>{
    return(
           <Stack.Navigator 
            initialRouteName="Home"
            ScreenOptions={{
                Header:(props)=><CustomNavigationBar {...props}/>,
            }}
           >
        <Stack.Screen name="home" 
            component={HomeScreen}
            options={{
                title: "Home Screen",
                headerTinColor: "blue",
                HeaderStyle: { backgroudcolor:"aqua"}
            }}
            />
        <Stack.Screen name="detail" component={DetailScreen}/>
    </Stack.Navigator>
    )
}
export default MyStack