import React from "react";

import AddedFeature from "./AddedFeature";
// connect
import { connect } from "react-redux";

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature
              removeFeature={props.removeFeature}
              key={item.id}
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("STATE IN ADDED FEATURES", state);
  return {
    features: state.car.features
  };
};

export default connect(
  mapStateToProps,
  {}
)(AddedFeatures);
