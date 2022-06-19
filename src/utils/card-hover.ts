const card: any = document.getElementsByClassName("champion")!;
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

/* Store the elements with class "tilt" in elements */
let elements = Array.from(<any>document.getElementsByClassName("champion"));

/* For each 'item' in the "elements" array... */
elements.forEach((item) => {
  /* Assign each 'item' in the "elements" array to a variable called "el" */
  let el: any = item;
  

  /*
   * Add a listener for mousemove event
   * Which will trigger function 'handleMove'
   * On mousemove
   */
  el.addEventListener("mousemove", handleMove);

  /* Get the height and width of the element */
  const height = el.clientHeight;
  const width = el.clientWidth;

  /* Define function a */
  function handleMove(e: any) {
    /*
     * Get position of mouse cursor
     * With respect to the element
     * On mouseover
     */
    /* Store the x position */
    const xVal = e.layerX;
    /* Store the y position */
    const yVal = e.layerY;

    /*
     * Calculate rotation valuee along the Y-axis
     * Here the multiplier 20 is to
     * Control the rotation
     * You can change the value and see the results
     */
    const yRotation = THRESHOLD * ((xVal - width / 2) / width);

    /* Calculate the rotation along the X-axis */
    const xRotation = -THRESHOLD * ((yVal - height / 2) / height);

    /* Generate string for CSS transform property */
    const string =
      "perspective(500px) scale3d(1,1,1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    /* Apply the calculated transformation */
    el.style.transform = string;
  }

  /* Add listener for mouseout event, remove the rotation */
  el.addEventListener("mouseout", function () {
    el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });

  /* Add listener for mousedown event, to simulate click */
  el.addEventListener("mousedown", function () {
    el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
  });

  /* Add listener for mouseup, simulate release of mouse click */
  el.addEventListener("mouseup", function () {
    el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
  });
});
