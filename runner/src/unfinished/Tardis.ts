/**
 * @description Uses grep to build a list of "locations" ( components ) where the target component has been imported.
 * @param name `string` Name of target component to match import patterns against.
 * @param path `string` Name of directory to search.
 */
const generateParentComponentList = (name, path) => {
  return require("child_process").execSync(`grep '${name}' ${path} -rl`, {
    encoding: "utf8",
    stdio: "inherit"
  });
};

/**
 * @description Tardis takes in a name ( component ) and a last seen location ( root directory path to start looking in ) and attempts to find all the different locations ( routes ) that the target has been. ( could be rendered )
 * @param name `string` Name of component.
 * @param location `string` Path of root directory to begin searching in.
 */
const Tardis: Tardis = (
  name = "FormField",
  location = "/Users/johnrogers/code/web-application/src/views"
) => {
  /*
      FLOW:
        - Search for imports
          - If imports:
            - Determine if import is "parent" or "route" where {"parent":React.Component, "route": Usage in a React Route}
              - Case "parent": 
                - Generate dependency tree node:
                  - name: name of current search
                  - children: childnodes[]
                - recurse and search again
              - Case "route":
                - Push current dependency tree into dependencyTrees []
        - Return dependencyTrees []
    */
  return {};
};

type Tardis = (name: string, location: string) => Sightings;
type Sightings = {
  route: string;
  path: object;
};

module.exports.Tardis;
