import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Chat from './components/Chat';

const App = () => {
    const [authData, setAuthData] = useState(null);

    return (
        <div>
            {!authData ? (
                <LoginForm onLogin={(idInstance, apiToken) => setAuthData({ idInstance, apiToken })} />
            ) : (
                <Chat idInstance={authData.idInstance} apiToken={authData.apiToken} />
            )}
        </div>
    );
};

export default App;
