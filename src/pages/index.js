import React from "react";
import Layout from "../../components/layout";
const IndexPage = () =>{
    return (
        <Layout pageTitle="Home Page">
 <h1>Welcome to my site!</h1>
        <p>My name is Jordan Easter.. and I am a developer.</p>
        <h2>Here is a list of what languages and frameworks I use:</h2>
        <ul>
            <li>Java - Spring [Boot/MongoDB]</li>
            <li>JavaScript - SPA</li>
            <li>React</li>
        </ul>
        </Layout>
       
    )
}

export default IndexPage