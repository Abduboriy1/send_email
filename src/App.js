import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
    async function s() {
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        var params = {
            'client_id': '495620211017-4a40bpifilee69e1nt4bnjg4cl6dv07c.apps.googleusercontent.com',
            'redirect_uri': 'http://localhost:3000',
            'response_type': 'token',
            'scope': 'https://mail.google.com',
            'include_granted_scopes': 'true',
            'state': 'pass-through value',
        };

        axios.get(oauth2Endpoint, {params})
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })
        // .finally(function () {
        // // always executed
        // });
    }
    function oauthSignIn() {
        // Google's OAuth 2.0 endpoint for requesting an access token
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&approval_prompt=force';
    
        // Create <form> element to submit parameters to OAuth 2.0 endpoint.
        var form = document.createElement('form');
        form.setAttribute('method', 'GET'); // Send as a GET request.
        form.setAttribute('action', oauth2Endpoint);
    
        // Parameters to pass to OAuth 2.0 endpoint.
        var params = {
            'client_id': '495620211017-4a40bpifilee69e1nt4bnjg4cl6dv07c.apps.googleusercontent.com',
            'redirect_uri': 'http://localhost:3000',
            'response_type': 'token',
            'scope': 'https://mail.google.com',
            'include_granted_scopes': 'true',
            'state': 'pass-through value',
        };
    
        // Add form parameters as hidden input values.
        for (var p in params) {
            var input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', p);
            input.setAttribute('value', params[p]);
            form.appendChild(input);
        }
    
        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form);
        form.submit();
    }
    
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Login With Google</p>
                <button onClick={s}>Login</button>
            </header>
        </div>
    );
}

export default App;
