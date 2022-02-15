
import { FormEvent } from 'react';
import './main.css';

function Main() {
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => 
  return (
    <div className="root">
        <h2>Sign up</h2>

        <form className="form" onSubmit={handleOnSubmit}>
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" />

            <label htmlFor="password"></label>
            <input type="password" name="password" id="passowrd" />

            <button type="submit">Sign up</button>
        </form>
    </div>
  )
}

export default Main;