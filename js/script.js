// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS function for index.html

"use strict"
/**
 * This function calculates area of an ellipse.
 */
function calculate() {
  // input
  const radius_a = parseFloat(document.getElementById("radius-a").value)
  const radius_b = parseFloat(document.getElementById("radius-b").value)

  // process
  const area = 3.14159 * (radius_a * radius_b)

  // output
  document.getElementById("area").innerHTML =
    "Ellipse area is " + area.toFixed(2) + " u²"
}
