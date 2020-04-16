// eslint-disable @typescript/interface-name
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    // api.ts helpers
    /**
     * @description Used to actually attempt to login.
     * @param user - `{ email: string; password: string;}` - User credentials object used to fill out the form.
     * @param visit - `string` - Where to visit once logged in.
     */
    actuallyLogIn: (
      { email, password }: { email: string; password: string },
      visit: string
    ) => Chainable;
    /**
     * @description Used to simulate the login process.
     */
    login: (options?: LoginOptionsType) => Chainable;
    /**
     * @description Consumes MockAPIType request / response descriptions used to simulate API behavior.
     * @param fixture - Folder path to fixture. Ex: "users/my"
     * @param endpoint - Exact match, including query params, of requested path.
     * @param condition - Root key of JSON fixture. Ex: "good" or "newResident".
     * @param method - HTTP method
     * @param type - Response or request. Also part of the fixture folder path.
     * @param responseModifier - Function used to map fixture content before it is supplied to the response body.
     * @param responseId - Custom tag for request. Typically used for waiting on a specific response.
     * @param enableLogging - Enables viewing the fixture content being returned as the response.
     */
    mockAPI: (mock: MockAPIType | MockAPIType[]) => Chainable;
    /**
     * @description Force Cypress to wait until the given responseId has resolved.
     */
    waitOnResponse: (responseId: string | string[]) => Chainable;
    /**
     * @description Verify deep equality of query parameters for provided route.
     */
    verifyQueryParameters: (
      urlPropertiesToMatch: {
        basePath: string;
        paramMatchPatternString: string;
      },
      expectedParameters: object
    ) => void;
  }
}

/**
 * @description Request / response description to be consumed by mockAPI to simulate API behavior.
 */
type MockAPIType = {
  fixture: string;
  endpoint: string;
  condition: string;
  method: string;
  type: "response" | "request";
  responseModifier?: (fixtureContent: any) => any;
  responseId?: string;
  enableLogging?: boolean;
};

type LoginOptionsType = {
  userResponseFixtureCondition?: string;
  responseModifiers?: {
    [key in RequestKeyUnion]?: (fixture: any) => any;
  };
};

type LoginRequestsType = {
  [key in RequestKeyUnion]: MockAPIType;
};

type RequestKeyUnion =
  | "accountsLogin"
  | "accountsRefresh"
  | "usersMy"
  | "generalSettings";
