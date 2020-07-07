const CustomTableFilter = ({
  filter,
  onChange,
  validate,
}: ICustomTableFilterProps) => {
  return (
    <Input
      type="search"
      value={filter ? filter.value : ""}
      onChange={(event) => {
        if (validate) {
          validate(event, onChange);
        } else if (onChange) {
          onChange(event.currentTarget.value);
        }
      }}
    />
  );
};

interface ICustomTableFilterProps {
  filter: Filter;
  onChange?: ReactTableFunction;
  validate?: any;
}

export const FetchInputTableFilter: React.FC<IFetchInputTableFilterPropTypes> = (
  props: IFetchInputTableFilterPropTypes
) => {
  const { filter, meta, validate } = props;

  const classes = new BEM({
    prefix: { name: "fetch" },
    block: { name: "FetchInputTableFilter" },
    elements: [{ name: "error" }],
  });

  return (
    <FetchFieldValidationWrapper
      {...{
        type: "search",
        meta,
        classes,
        children: <CustomTableFilter {...{ filter, validate }} />,
      }}
    />
  );
};

interface IFetchInputTableFilterPropTypes {
  meta: { touched: boolean; error: string };
  validate?: any;
  filter: Filter;
}

export const PackageIdFilter: React.FC<IPackageIdFilterPropTypes> = (
  props: IPackageIdFilterPropTypes
) => {
  const { filter, onChange } = props;

  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  return (
    <FetchInputTableFilter
      {...{
        validations: [mustBeANumber],
        onSuccess: (value: InputValue) => {
          dispatch(packageActions.searchPackages(value));
        },
        /*
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
          filter,
         */
      }}
    />
  );
};

const mustBeANumber: Validator = {
  evaluator: (value: InputValue) => /[^\d*]/.test(value),
  message: "You must enter a number.",
};

interface Validator {
  evaluator: (value: InputValue) => boolean;
  message: string;
}

interface IPackageIdFilterPropTypes extends ITableFilterProps {}

interface ITableFilterProps {
  onChange: ReactTableFunction;
  filter: Filter;
}

type InputValue = any;
