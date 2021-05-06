import {Route, Switch} from 'react-router-dom';
import React from 'react';
import {routes} from './../routes';
export const Content = () => {
    return (
        <Switch>
            {
                routes.map(route => (
                    <Route
                        path={route.path}
                        render={props => (
                            <route.component {...props} />
                        )}
                    />

                ))
            }
        </Switch>
    );
};
