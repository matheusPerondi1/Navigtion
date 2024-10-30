import { useState } from "react";
import { Button, ButtonText, Card, Container, Input, Title } from "./style";
import { useNavigation } from "@react-navigation/native";

export function Login(){
    
    const [userName, setUserName] = useState<string>("");
    const navigation = useNavigation();

    function handleLogin(){
       navigation.navigate("perfil", {userName}) 
    }

    return (
        <Container>
            <Card>
                <Title>Login</Title>
                <Input/>
                <Input/>

                <Button onPress={handleLogin}>
                    <ButtonText>Entrar</ButtonText>
                </Button>
            </Card>
        </Container>
    )
}