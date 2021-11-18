import { useEffect, useState } from "react";
import HelloServices from "../services/HelloServices";


//class - stateful functions
//functions - are stateless
//react - wants the sapplication to be reactive

const Hello =  ()  => {

    //react hooks useState
    const[hello, setHello] = useState("Rewatch some MVs while the server is down!");

    //react hooks useEffects
    //axios - tool for http request promises
    //promises - asynchronous processes
    useEffect( () => { //anonymous function
        HelloServices.getHello()    //promise
        .then(response => {
            setHello(response.data)
        })
        .catch(err =>{  //rejected promise
            console.log("something went wrong!")
        })    
    }
    )

    return hello;
}

export default Hello