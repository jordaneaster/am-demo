import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
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
        <StaticImage
        alt="a beautiful body of water"
        src="https://images.unsplash.com/photo-1615393915491-2b7cb33b2678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZSUyMGRpc3RyaWN0JTIwdWt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        </Layout>
       
    )
}

export default IndexPage