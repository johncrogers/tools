import React, { useEffect, useState } from "react";

import { Dispatch } from "redux";

import { FetchConnect } from "helpers/FetchConnect";
import { RouteComponentProps } from "react-router";

export const ComponentName: React.FC<IComponentNamePropTypes> = (
  props: IComponentNamePropTypes
) => {
  const { dispatch, text } = props;

  const [isSatisfied, setIsSatisfied] = useState(true);

  useEffect(() => {
    // Mount

    return () => {
      // Unmount
    };
  }, []);

  return (
    <div
      onClick={() => {
        setIsSatisfied(!isSatisfied);
      }}
    >
      {text}: {isSatisfied}
    </div>
  );
};

export default FetchConnect({
  ConnectedComponent: ComponentName,
  state: { stores: [""] },
});

export interface IComponentNamePropTypes
  extends IRootStateType,
    RouteComponentProps<{}> {
  text: string;
  dispatch: Dispatch;
}
