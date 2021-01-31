import React from 'react';
import { ReduxContext } from './provider';

const connect = (mapStateToProp, mapDispatchToProp) => Component => {
    class Connect extends React.Component {
        constructor(prop) {
            super(this.props);
            this.state = props.store.getState();
        }

        render() {
            return <Component  {...this.props} {...mapStateToProp(props.store.getState())} {...mapDispatchToProp(props.store.dispatch)} />
        }
    }
    return props => {
        return <ReduxContext.Consumer>
            {store => <Connect {...props} store={store} />}
        </ReduxContext.Consumer>
    }
}

export default connect;