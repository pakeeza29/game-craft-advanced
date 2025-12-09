import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar';

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <>
    <NavBar />
    <Box margin={5}>
    <Heading> Oops</Heading>
    <Text>{isRouteErrorResponse(error) ? 'This Page Does Not Exist!' : 'An unexpected ERROR has occured!' }</Text>
    </Box>
    </>
  )
}

export default ErrorPage