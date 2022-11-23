import { useState } from 'react' 
    

const Signup = () => {
    const [username , setUsername ] = useState('')
    const [password , setPassword] = useState('')
    const [email ,    setEmail ] = useState('')
    const [membership , setMembership ] = useState('')

    const handleSubmit = async event => {
       
        event.preventDefault()
    
        const response = await fetch('http://localhost:5005/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password,email,membership }),
        })
        const parsed = await response.json()
        console.log(parsed)
      }
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <input type="text"      value={username}   placeholder="username" required onChange={event => setUsername(event.target.value)}  />
                <input type="password"  value={password}  placeholder="Password"  required onChange={event => setPassword(event.target.value)}  />
                <input type="email"     value={email}  placeholder="Email"  required       onChange={event => setEmail(event.target.value)}   />
                <input type="text"     value={membership}  placeholder="Membership"  required onChange={event => setMembership(event.target.value)}   />
                {/* <label for="me">Membership:</label>
                <select name="Membership" id="me" onChange={event => setMembership(event.target.value)}>
                <option value={membership}>Teacher</option>
                <option value={membership}>Student</option>
                </select> */}
                <button type="submit">Signup</button>
            </form>
        </div>
      );
}
 
export default Signup;