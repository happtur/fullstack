import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({
    handleSubmit, handleFieldChange, username, password
}) => {
    return (
        <div>
            <h2>Kirjaudu sovellukseen</h2>
            <form onSubmit={handleSubmit}>
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

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleFieldChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default LoginForm