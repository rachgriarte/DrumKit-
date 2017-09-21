// Your task is to write tests for a function that title-cases incoming names. For example: titleize('mr jones') returns 'Mr Jones'.
// As an optional bonus, create a dictionary of titles, such as Dr; Mr; Ms; etc. If the string begins with such a title, capitalize it, and append a period.
// Proceed as with disemvowel, considering:
// What constitutes a "representative expected input"?
// What is unexpected input? How do you want titleize to respond to this?
// Do you want to allow arbitrarily long names, or impose a cutoff? Hint: There's no right answer, here. Choose an implementation, and write a test reflecting your choice.
// Once you've written your tests, run them, to ensure they fail.
// Next, start implementing titleize. Pass a test at a time.
// Once you've passed all tests—congratulate yourself! Be prepared to explain your tests to the rest of the class.


"use strict";

var disemvowel = function(str) {
  if (typeof str === "number") {
    return String(str);
  }
  return str.replace(/[aeiou]/gi, "");
};

module.exports = disemvowel;