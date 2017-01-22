import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./styles.css";
import Helmet from "react-helmet";

import Counter from "../../components/Counter";
import * as SettingsActions from "./actions"

class Settings extends Component {
  static fetchData({ store }) {
    // This is where we could load async data to the server store prior to render
    // store.dispatch(SettingsActions.fetchCounter());
  }
  handleIncrement = (e) => {
    this.props.incrementCounter();
  }
  handleDecrement = (e) => {
    this.props.decrementCounter();
  }
  render() {
    return (
      <div className={ `${ styles.content } ${ styles.container }` }>
        <Helmet
          title="Settings - React Redux Starter Kit"
          meta={[
            { property: "og:url", content: "" },
            { property: "og:title", content: "Settings - React Redux Starter Kit" },
            { property: "og:description", content: "" },
            { name: "description", content: "" }
          ]}
        />
        <h1>Settings</h1>
        <Counter
          counter={ this.props.counter }
          onIncrement={ this.handleIncrement }
          onDecrement={ this.handleDecrement }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.settingsReducer.counter
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(SettingsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
