Cypress.Commands.add("login", (options?: LoginOptionsType) => {
  const fixtureCondition =
    options && options.userResponseFixtureCondition
      ? options.userResponseFixtureCondition
      : "good";

  const requests: LoginRequestsType = {
    accountsLogin: {
      type: "response",
      endpoint: "accounts/login",
      method: "POST",
      fixture: "accounts/login",
      condition: fixtureCondition,
      responseId: "accounts/login",
    },
    accountsRefresh: {
      type: "response",
      endpoint: "accounts/refresh",
      method: "POST",
      fixture: "accounts/refresh",
      condition: fixtureCondition,
      responseId: "accounts/refresh",
    },
    usersMy: {
      type: "response",
      endpoint: "users/my",
      method: "GET",
      fixture: "users/my",
      condition: fixtureCondition,
      responseId: "users/my",
    },
    generalSettings: {
      type: "response",
      endpoint: "general/settings",
      method: "GET",
      fixture: "general/settings",
      condition: "good",
      responseId: "general/settings",
    },
  };

  if (options && options.responseModifiers) {
    for (const modifier in options.responseModifiers) {
      requests[modifier as RequestKeyUnion].responseModifier =
        options.responseModifiers[modifier as RequestKeyUnion];
    }
  }

  const { accountsLogin, accountsRefresh, usersMy, generalSettings } = requests;

  cy.mockAPI([accountsLogin, accountsRefresh, usersMy, generalSettings]);

  // Synthetically login
  cy.fixture("api/responses/accounts/login/POST").then((conditions) => {
    const { user, auth } = conditions[fixtureCondition];
    auth.expiresAt = auth.expiresIn * 3600;
    window.localStorage.setItem("user", JSON.stringify(user));
    window.localStorage.setItem("auth", JSON.stringify(auth));
  });

  cy.visit("/");
});
