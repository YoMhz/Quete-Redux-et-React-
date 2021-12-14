import { connect } from "react-redux";

const LightComponent = ({ light, dispatch }) => {
    return (
  <div>
    <p>{light}</p>
    <button onClick={() => dispatch({ type: "SWITCH" })}>switch</button>
  </div>
    )};

function mapStateToProps(state) {
    return ({
        light: state
    });
}

const LightContainer = connect(mapStateToProps)(LightComponent);

export default LightContainer;