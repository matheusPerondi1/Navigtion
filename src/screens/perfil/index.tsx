import { useRoute } from "@react-navigation/native";
import { Card, Container, Name } from "./style";

type RouteParams = {
    userName: string;
}

export function Perfil( ){
    
    const route = useRoute();
    const {userName} = route.params as RouteParams;

    return (
        <Container>
            <Card>
                
            </Card>

            <Name> {userName} </Name>
        </Container>
    )
}