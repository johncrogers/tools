import React from "react";
import { FetchConnect } from "helpers/FetchConnect";

const Sandbox: React.FC<ISandboxPropTypes> = (props: ISandboxPropTypes) => {
  const { state } = props;

  return <div>state</div>;
};

Sandbox.defaultProps = {};

export default FetchConnect({
  state: {
    mapStateToProps: (state: any) => {
      return { ...state };
    }
  },
  ConnectedComponent: Sandbox
});

export interface ISandboxPropTypes {
  state: any;
}
