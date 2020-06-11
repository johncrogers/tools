import React, { useEffect, useState } from "react";

import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router";

import { FetchConnect } from "helpers/FetchConnect";
import { BEM } from "helpers/BEM.helper";
import { FetchCard } from "views/common/cards/FetchCard";
import { FetchTable } from "views/common/tables/FetchTable";

export const $1TableCard: React.FC<I$1TableCardPropTypes> = (
  props: I$1TableCardPropTypes
) => {
  const { dispatch, text } = props;

  const [isSatisfied, setIsSatisfied] = useState(true);

  useEffect(() => {
    // Mount

    return () => {
      // Unmount
    };
  }, []);

  const classes = new BEM({
    block: { name: "$1TableCard" },
    elements: [{ name: "temporaryPassword", extras: [] }],
  });

  return (
    <FetchCard title="$1">
      <FetchTable
        {...{
          className: "-striped -highlight primary-pagination",
          columns: [
            {
              Header: "First Name",
              accessor: "firstName",
            },
            {
              Header: "Last Name",
              accessor: "lastName",
            },
          ],
          data: [{ firstName: "John", lastName: "Rogers" }],
          defaultSorted: [{ id: "name", desc: false }],
          manual: false,
          minRows: 20,
          filterable: true,
          pageSizeOptions: [20, 50, 100],
          showPaginationBottom: true,
          showPaginationTop: false,
        }}
      />
    </FetchCard>
  );
};

export default FetchConnect({
  ConnectedComponent: $1TableCard,
  state: { stores: [] },
});

export interface I$1TableCardPropTypes
  extends IRootStateType,
    RouteComponentProps<{}> {
  text: string;
  dispatch: Dispatch;
}
