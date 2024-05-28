import { Container, Text, VStack, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";

const Index = () => {
  const { data: events, error, isLoading } = useEvents();

  if (isLoading) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Alert status="error">
          <AlertIcon />
          {error.message}
        </Alert>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Events</Text>
        {events.map(event => (
          <Text key={event.id}>{event.name}</Text>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;