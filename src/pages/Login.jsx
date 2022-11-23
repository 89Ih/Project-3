import { useState } from 'react' 
// import { SessionContext } from '../contexts/SessionContext'


const Login = () => {
    const [username , setUsername ] = useState('')
    const [password , setPassword] = useState('')
    // const [error, setError] = useState()
    // const { setToken } = useContext(SessionContext)



    const handleSubmit = async event => {
       
        event.preventDefault()
    
        const response = await fetch('http://localhost:5005/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password}),
        })
        const parsed = await response.json()
        console.log(parsed)
        // if (parsed.status === 200) {
        //   setToken(parsed.token)
        // } else {
        //   setError(parsed)
        // }
    
      }
    


    return (
        <div>
            <form onSubmit={handleSubmit}>

            {/* {error?.message && <p>{error.message}</p>} */}

                <input type="text"      value={username}   placeholder="username" required onChange={event => setUsername(event.target.value)}  />
                
                <input type="password"  value={password}  placeholder="Password"  required onChange={event => setPassword(event.target.value)}  />
              
                <button type="submit">Login</button>
            </form>
        </div>
      );
}
 
export default Login;