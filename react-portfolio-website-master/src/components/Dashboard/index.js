import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from "./home";
import Login from '../Login';

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        console.log('useEffect called', auth); // Log to see when useEffect is called and the value of auth
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                console.log('User is set', user); // Log to see the user object when it's set
                setUser(user);
            } else {
                setUser(null);
            }
        });
    // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, [auth]); // Include `auth` in the dependency array



    return (
       <div>
             {console.log('Rendering', user ? 'Home' : 'Login')} // Log to see which component is about to render
           {user ? <Home /> : <Login />}
       </div>
    )
}

export default Dashboard;