import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./styles.css";
import Helmet from "react-helmet";

import Counter from "../../components/Counter";
import * as SettingsActions from "./actions"

class Settings extends Component {
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
          onIncrement={ this.props.incrementCounter }
          onDecrement={ this.props.decrementCounter }
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
