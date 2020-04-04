import React, { useState } from "react";
import { Filter, ReactTableFunction } from "react-table";
import Input from "reactstrap/lib/Input";
import { FetchFieldValidationWrapper } from "views/common/forms/fields/FetchFieldValidationWrapper";
import { BEM } from "helpers/BEM.helper";

export const CustomTableFilter = ({
  filter,
  onChange,
  validate
}: ICustomTableFilterProps) => {
  return (
    <Input
      type="search"
      value={filter ? filter.value : ""}
      onChange={event => {
        if (validate) {
          validate(event, onChange);
        } else if (onChange) {
          onChange(event.currentTarget.value);
        }
      }}
    />
  );
};

export interface ICustomTableFilterProps {
  filter: Filter;
  onChange?: ReactTableFunction;
  validate?: any;
}

export const FetchCustomTableFilter: React.FC<IFetchCustomTableFilterPropTypes> = (
  props: IFetchCustomTableFilterPropTypes
) => {
  const { filter, meta, validate } = props;

  const classes = new BEM({
    prefix: { name: "fetch" },
    block: { name: "CustomTableFilter" },
    elements: [{ name: "error" }]
  });

  return (
    <FetchFieldValidationWrapper
      {...{
        type: "search",
        meta,
        classes,
        children: <CustomTableFilter {...{ filter, validate }} />
      }}
    />
  );
};

export interface IFetchCustomTableFilterPropTypes {
  meta: { touched: boolean; error: string };
  validate?: any;
  filter: Filter;
}

export const PackageIdFilter: React.FC<IPackageIdFilterPropTypes> = (
  props: IPackageIdFilterPropTypes
) => {
  const { filter, onChange } = props;

  const [touched, setTouched] = useState(false);
  const [error, setError] = useState();

  return (
    <FetchCustomTableFilter
      {...{
        validate: (event: any) => {
          setTouched(true);
          const value = event ? event.currentTarget.value : "";

          const containsNonNumberCharacters = /[^\d*]/;
          const isEmpty = value.length === 0;

          if (containsNonNumberCharacters.test(value)) {
            setError("You must enter a number");
          } else if (isEmpty) {
            setTouched(false);
            onChange("");
          } else {
            setError("");
            onChange(parseInt(value, 10));
          }
        },
        meta: { touched, error },
        filter
      }}
    />
  );
};

export interface IPackageIdFilterPropTypes extends ITableFilterProps {}

interface ITableFilterProps {
  onChange: ReactTableFunction;
  filter: Filter;
}
