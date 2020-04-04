const LoadingPage = function() {
  useEffect(() => {
    return () => {
      document.body.classList.toggle("loading-page");
    };
  });
  useEffect(() => {
    document.body.classList.toggle("loading-page");
  });
  const classes = new BEM({
    block: { name: "LoadingPage" },
    elements: [{ name: "container" }, { name: "logo" }, { name: "spinner" }]
  });

  return (
    <div className={classes.getElementClassNames("container")}>
      <div className={classes.getElementClassNames("logo")}>
        <img
          src={require("assets/img/fetch-package-logo-full-white.svg")}
          alt="Fetch Package"
        />
      </div>
      <div className={classes.getElementClassNames("spinner")}>
        <Spinner animation="border" variant="light" />
      </div>
    </div>
  );
};
