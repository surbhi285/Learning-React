 import { Flex, Box, Heading, Button, Text, Spacer, HStack } from "@chakra-ui/react";
function Conatact(props){
  const {user} = props;

    return(
    <div>
      <h1>Welcome, {user.name}!</h1>
      <h2>Age: {user.age}</h2>
    </div>








          // <Flex as="nav" p="10px" alignItems="center" >
          //   <Heading as="h1">Dojo Task</Heading>
          //   <Spacer />
             
          //    <HStack spacing="20px">
          //   <Box bg="gray" p="20px">M</Box>
          //   <Text>yes@gmail.com</Text>
          //   <Button>LogIn</Button>
          //   </HStack> 
          // </Flex>


    //     <Flex bg="black" justifyContent={"space-around"}>
    //     <Box w="100px" h="50px" bg="red">surbhi</Box>
    //     <Box w="100px" h="50px" bg="blue">monika</Box>
    //     <Box w="100px" h="50px" bg="yellow">harshit</Box>
    //     <Box w="100px" h="50px" bg="green">ridhi</Box>
    // </Flex>
    )
}
export default Conatact;

// spacer is used to create space between heading and other box
// instead of using gap we can use HStack which represents to horizontal stack and can give spacing so it work same as what gap is doing
// like hstack one point is also there that is vertical stack