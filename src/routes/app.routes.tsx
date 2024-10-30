import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/login";
import { Perfil } from "../screens/perfil";
import { Name } from "../screens/perfil/style";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator>
            <Screen
                name="login"
                component={Login}
            />
            <Screen
                name="perfil"
                component={Perfil}
            />
        </Navigator>
    )
}