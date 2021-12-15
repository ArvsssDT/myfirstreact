import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8080/api/v1', //https://ics2608-myfirstreact.herokuapp.com/myfirstreact - Cant use ClearDB MYSQl( heroku wont accept my credit and debit cards :(( )
    headers:{
        'content-Type': 'application/json'
    }
})