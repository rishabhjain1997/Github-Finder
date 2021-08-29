import React from 'react'
import spinner from './spinner.gif'
import { Fragment } from 'react'

function Spinner() {
    return (
        <Fragment>
            <img src={spinner} alt='Loading..' style={{width:'200px', margin: 'auto', display:'block'}}/>
        </Fragment>
    )
}

export default Spinner
