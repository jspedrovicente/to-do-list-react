import { useState } from "react";
import "./register.css"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { auth } from '../../firebaseConnection';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate()

  async function handleRegister(e) {
    e.preventDefault()

    if (email !== '' && password !== '' && name !== '') {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Cadastro feito com successo!", {
            theme: "dark"
          })
          navigate('/', {replace:true})
        })
        .catch(() => {
        toast.error("Erro ao fazer o cadastro!", { theme: "dark"})
      })
    } else {
      toast.error("Please type in your data!", {
        theme: "dark"
      });
    }
  }
    return (
      <div className="home-container" onsu>
        <span className="login-warning">Register Below!</span>
        <form onSubmit={handleRegister}>
          <label htmlFor="">Name:</label>
          <input type="text" placeholder="What is your name?" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="">Email:</label>
          <input type="email" placeholder="Type in your e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="">Password:</label>
          <input type="password" placeholder="Type in your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Criar Conta</button>
        </form>
        <Link to="/" className="button-link">
          Already have an account? Login
        </Link>
      </div>
    );
  }
  
  export default Register;
  