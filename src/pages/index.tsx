import type { NextPage } from 'next';
import { ForgotPassword } from './ForgotPassword';
import { Login } from './Login';
import { Register } from './Register';

const Home: NextPage = () => {
  return (
    <Register/>
    <ForgotPassword/>
    // <Login/>
  );
};

export default Home;
