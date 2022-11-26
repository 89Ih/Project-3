import Header from '../comps/Header'
import { useState } from 'react'


const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [membership, setMembership] = useState('')

  const handleSubmit = async event => {

    event.preventDefault()

    const response = await fetch('http://localhost:5005/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email, membership }),
    })
    const parsed = await response.json()
    console.log(parsed)
  }



  return (
    <div className="App-body ">
      <Header />
      <form
        className="d-flex flex-column  align-self-center border border-1 w-50"
        onSubmit={handleSubmit}
      >
        <div className="form-group p-2 w-100">
          <input
            type="text"
            className="form-control"
            value={username}
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group p-2 w-100">
          <input
            value={password}
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group p-2 w-100">
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="form-control"
            required
            onChange={(event) => setEmail(event.target.value)}
          /></div>
        <div className="form-group p-2 w-100">
          <input
            type="text"
            value={membership}
            placeholder="Membership"
            className="form-control"
            required
            onChange={(event) => setMembership(event.target.value)}
          /></div>
        {/* <label for="me">Membership:</label>
                <select name="Membership" id="me" onChange={event => setMembership(event.target.value)}>
                <option value={membership}>Teacher</option>
                <option value={membership}>Student</option>
                </select> */}

        <div className="form-group p-2 ">
          <button className="btn w-100 css " type="submit">Signup</button>
        </div>

      </form>
      <footer  >
      {/* <a  className="nav-link css" href="#">About us</a> */}
     </footer>
    </div>
  );
}

export default Signup;