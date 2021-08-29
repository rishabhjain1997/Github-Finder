import Users from "../users/Users"
import React, { Fragment } from "react"
import Search from "../users/Search"

const Home = () => {
    return (
                <Fragment>
                  <Search/>
                  <Users />
                </Fragment>
    )
}

export default Home
