import React from "react";

export const FetchControlledFlow: React.FC<IFetchControlledFlowPropTypes> = (
  props: IFetchControlledFlowPropTypes
) => {
  const { requirements, goal } = props;
  const pendingRequirements = requirements.filter((requirement: any) => {
    return !requirement.isSatisfied;
  });
  let componentToRender;

  if (pendingRequirements.length) {
    const currentStep = pendingRequirements[0];
    const { component } = currentStep;
    componentToRender = component;
  } else {
    componentToRender = goal;
  }

  return componentToRender;
};

export interface IFetchControlledFlowPropTypes {
  requirements: Requirement[];
  goal: any;
}

type Requirement = {
  name: string;
  isSatisfied: boolean;
  component: React.ReactNode;
};
