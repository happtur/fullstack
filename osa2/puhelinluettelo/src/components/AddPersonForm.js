import React from 'react';

const AddPersonForm = ({submit, nameValue, nameHandler, numberValue, numberHandler}) => (
    <form onSubmit={submit}>
        <div>
            nimi: <input
                value={nameValue}
                onChange={nameHandler}
            />
        </div>
        <div>
            numero: <input
                value={numberValue}
                onChange={numberHandler} />
        </div>
        <div>
            <button type="submit">lisää</button>
        </div>
    </form>
)

export default AddPersonForm