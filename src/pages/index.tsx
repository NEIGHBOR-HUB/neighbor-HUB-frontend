import type { NextPage } from 'next';
import { ForgotPassword } from './ForgotPassword';
import { Login } from './Login';

const Home: NextPage = () => {
  return (
    <ForgotPassword/>
    // <Login/>
  );
};

export default Home;
