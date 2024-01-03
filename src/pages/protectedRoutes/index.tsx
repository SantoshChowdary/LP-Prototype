import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../context/storeContext';

const ProtectedRoute = observer((props : any) => {

    const store: any = useContext(StoreContext);
    const {authStore} = store;

    if (!authStore.isAuthenticated) {
        return <Redirect to="/login" />
    }

    return (
        <Route {...props} />
    )
})

export default ProtectedRoute