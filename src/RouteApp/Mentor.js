import { Container, Heading, Text, Box } from "@chakra-ui/react";

function Mentor (){

    const boxStyle = {
        p: "10px",
        bg: "purple",
        color: "white",
        m: "20px",
        textAlign: "center",
        ':hover' : {
            color: 'black',
            bg:"blue"
        }
    }
    return(
        <Container>
        <h1>Mentor</h1>
        <Heading as="h1" my="30px" p="10px">Chakra UI</Heading>
        <Text marginLeft="80%" color="red" fontWeight="bold"> Loreum Ispum</Text>
        <Box my="30px" p="20px" bg="orange">
            <Text>This is a box</Text>
        </Box>
        <Box sx={boxStyle}>
         Hello surbhi
        </Box>
        </Container>
    )
}
export default Mentor;

// => box work as div
// => in above boxstyle act as prop and we can give css to the box 
// => the sx prop is a custom prop that allows you to apply inline styles to a component. 
//It is similar to the style prop in React





