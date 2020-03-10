import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routesIndex from './index'
import components from '../components'

const routesConfig: any = routesIndex
const routerComponent: any = components

class Routes extends React.Component{
    render() {
        return(
            <Switch>
                {Object.keys(routesConfig).map((key: string) => 
                    routesConfig[key].map((r: any) => {
                        const router = (r:any) => {
                            return <Route key={r.key} path={r.key} component={routerComponent[r.component]}/>
                        }
                        return r.component?router(r):r.subs.map((i: any)=>router(i))
                    })
                )}
            </Switch>
        )
    }
}

export default Routes