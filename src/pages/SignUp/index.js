
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './../../contexts/auth'
import logo from '../../Assets/logo.png'

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);
    

  function handleSubmit(e){
    e.preventDefault();
  
    if( nome !== '' && email !== '' && password !== '' ){
      signUp(email, password, nome)
    }

  }
  
  return (
      <div className="container-center">
        <div className="login">
        <div class="corner"></div>
          <div className="login-area">
            <img src={logo} alt="Logo" />
          </div>

          <form onSubmit={handleSubmit}>
            <h1> Cadrastrar </h1>
            <input type="text" placeholder="Seu Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit"> { loadingAuth ? 'Carregando...' : 'Cadastrar' } </button>
          </form>

          <Link to="/"> Já possui uma conta? <strong> Entre </strong> </Link>
        </div>        
      </div>
    );
  }
  
  export default SignUp;
  