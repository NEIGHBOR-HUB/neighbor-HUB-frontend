import Head from 'next/head';

import Form from './components/Form';

import { Container, Title } from './styles';

const Auth: React.FC = () => {
  return (
    <>
      <Head>
        <title>Auth</title>
        <meta name="description" content={'Auth'} />
      </Head>
      <Container>
        <Title></Title>
        <Form />
      </Container>
    </>
  );
};

export default Auth;
