import React, { useEffect } from "react";

import { Dispatch } from "redux";

import { FetchConnect } from "helpers/FetchConnect";
import { userActions } from "actions/user.actions";
import { CardLoadingComponent } from "views/components/cards/helpers/CardLoadingComponent";

const Sandbox: React.FC<ISandboxPropTypes> = (props: ISandboxPropTypes) => {
  const { text } = props;

  return <div>{text}</div>;
};

interface ISandboxPropTypes {
  text: string;
}

const FetchSandbox: React.FC<IFetchSandboxPropTypes> = ({
  dispatch,
  currentUser: { firstName }
}: IFetchSandboxPropTypes) => {
  useEffect(() => {
    if (!firstName) {
      dispatch(userActions.loadMyUser());
    }
  });

  return firstName ? (
    <Sandbox text={firstName} />
  ) : (
    <CardLoadingComponent display={true} />
  );
};

export default FetchConnect({
  state: { stores: ["currentUser"] },
  ConnectedComponent: FetchSandbox
});

interface IFetchSandboxPropTypes {
  currentUser: IUserStoreType;
  dispatch: Dispatch;
}

describe("Sandbox:", () => {
  const testHome = "/";

  it("Plays in the sandbox:", () => {
    cy.login();
    cy.visit(testHome);
    cy.wait(2000);
  });
});
