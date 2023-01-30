import { useState } from "react";
import "./home.css"
import { toast } from "react-toastify";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../../firebaseConnection";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault()

    if (email !== '' && password !== '') {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
        toast.success("Login successfully!", {
          theme: "dark"
        })
        navigate('/admin', {replace: true})
        })
        .catch(() => {
          toast.error("Login Failed!", {
            theme: "dark"
          })
      })
    } else {
      toast.error("Please type in your data!", {
        theme: "dark"
      });
    }
  }
    return (
      <div className="home-container" onsu>
        <span className="login-warning">Log-in below to access your tasks</span>
        <form onSubmit={handleLogin}>
          <label htmlFor="">Email:</label>
          <input type="email" placeholder="Type in your e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="">Password:</label>
          <input type="password" placeholder="Type in your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Acessar</button>
        </form>
        <Link to="/register" className="button-link">
          No Account? Register now
        </Link>
      </div>
    );
  }
  
  export default Home;
  