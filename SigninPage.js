import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import { Auth0Provider } from "@auth0/auth0-react";

function SigninPage(){

    return(
        <Auth0Provider>
          <main  className='column'>
            <h1>
                Auth0 Login
            </h1>
            <LoginButton/>
            <LogoutButton/>
            </main>
        </Auth0Provider>
        
    );
    
}

export default SigninPage;
