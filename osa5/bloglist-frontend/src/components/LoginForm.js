import React from 'react'

const LoginForm = ({
    login, handleFieldChange, username, password
}) => {
    return (
        <div>
            <h2>Kirjaudu sovellukseen</h2>
            <form onSubmit={login}>
                <div>
                    Käyttäjätunnus
            <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleFieldChange}
                    />
                </div>
                <div>
                    Salasana
            <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleFieldChange}
                    />
                </div>
                <button type="submit">Kirjaudu</button>
            </form>
        </div>
    )
}

export default LoginForm