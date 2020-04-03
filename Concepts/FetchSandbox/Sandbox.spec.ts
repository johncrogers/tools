describe("Sandbox", () => {
  const testHome = "/sandbox";

  beforeEach(() => {
    // cy.actuallyLogIn(
    //   {
    //     email: "jrogers@fetchpackage.com",
    //     password: "Temp1234.",
    //   },
    //   testHome,
    // );

    cy.login();
    cy.visit(testHome);
  });

  it("Has a page", () => {
    cy.server();
    cy.route({
      method: "POST",
      url: "resource/endpoint/",
      response: {}
    }).as("endpoint");

    cy.get(".btn")
      .eq(0)
      .click();

    cy.wait("@endpoint").should(({ requestBody }) => {
      const actual = {
        userToken:
          "eyJraWQiOiJNMjR1RlB4Tm5YcG1CNTRBXC9oXC9ETDlTTnN6Rlh0clV4NjBhaFJtV1lcL0hnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5MDA5Y2RjYy0yODFkLTQ2ZWItYmYxNi1kMGZjODU4YzY5YjQiLCJjb2duaXRvOmdyb3VwcyI6WyJBUFBfV0FSRUhPVVNFIiwiQVBQX0FETUlOSVNUUkFUT1IiLCJBUFBfRFJJVkVSIiwiQVBQX1JFU0lERU5UIl0sImV2ZW50X2lkIjoiMGEyYWNiY2YtYjViMC00YWFmLWFhYTAtOTdhYjkzYTg5NGM2IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTU4MDI0OTIzMCwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfd3hiQmpLYUR0IiwiZXhwIjoxNTgwMjUyODMwLCJpYXQiOjE1ODAyNDkyMzAsImp0aSI6IjMwMTA0ZjhmLTkxZjItNGY3My04NjU3LTI0ZTk0MTViNmY5NyIsImNsaWVudF9pZCI6IjQ2dG8waGpmazc5bWk2YWxhZ3JuN3J1M3B2IiwidXNlcm5hbWUiOiJqcm9nZXJzLWZldGNocGFja2FnZS5jb20ifQ.wl7o1YJf6QQJz3szw_K8_azki9cUYzZ0ImeVe_YEwgFiPd2qdxOm3J1S-l87zzbqOqhySV2a33sSBDEhM8q1EVNJ4y_qNnomjUKPiLGDYGHYwW18jee68hixHe5LhYqlGwYy-KmRm0BaxK3Kth6LsjKGuEHawojtj9C7Mg9oJQn8BKfMiI2ya0sq0aa4eoB33aRk2e522OszICWSvckNnvj6_2nIcoHenGErwbkMtBojXUiKcqlWYqGq9-FWXBdaMYp3ugFLpiOIGox2Z8jFLJI5pCqtvO2WUuYK95WIgrKH9fHVotaWrONM3NY8XLWuhAb0jI2eBwpTy7WHd-FnVA",
        attributeName: "phone_number"
      };
      expect(requestBody).to.deep.equal(actual);
    });
    cy.location("pathname").should("include", "sandbox");
  });
});
