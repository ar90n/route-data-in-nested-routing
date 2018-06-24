import React, { Component } from 'react'
import { Router, Route, Switch, withRouteData } from 'react-static'
import { hot } from 'react-hot-loader'

const Outer = withRouteData(
  (props) => {
    return (
      <div>
        <div> {props.data} </div>
        {props.children}
      </div>
    );
  }
);

const Inner = withRouteData(
  (props) => {
    return (
      <div> {props.data} </div>
    );
  }
);

class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/a"
              render={({match}) => (
                <Outer>
                  <Switch>
                    <Route
                      path={`${match.url}/b`}
                      component={Inner}
                    />
                  </Switch>
                </Outer>
              )}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default hot(module)(App)
