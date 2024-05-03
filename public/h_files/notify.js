function iatapayNotify( status) {
    const { location } = window.top;
    console.log(status)
    console.log(status)
    const event = new CustomEvent("iatapayMessage", {
        detail: {
          action: "didInitialize",
          ...status
        }
      });
    if(status !== null || status !== undefined) {
        window.dispatchEvent(event)
    }
    // const path = _getPath(location, status);
    // console.log("path",path)
    // if (!path) return;
    // location.replace(path);
}

function _getPath(location, status) {
    const webPath = `${location.origin}`;
    const purchase = _getPurchase(location);
    const getPurchasePath = (page) => `${webPath}/${page};${purchase}`;

    if (
        status === "SETTLED" ||
        status === "CLEARED" ||
        status === "INITIATED"
    )
        return getPurchasePath("confirm");
    else if (status === "FAILED")
        return `${getPurchasePath("error")};error=true`;
}

function _getPurchase(location) {
    return location.href.toString().split(";")[1];
}