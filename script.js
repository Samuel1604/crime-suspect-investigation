// A crime suspect is been investigated for a chain of rubbery that happened at different locations in Ikeja. The suspects visit to to some of these location over the past month is been tracked. To further help this on going investigation, Write a script that counts the frequency of a given item/element in an array and returns its frequency. For instance given an array of places visited by the crime suspect in a month:

let array_locations = [
  "market",
  "church",
  "office",
  "mall",
  "gym",
  "bank",
  "saloon",
  "eatery",
  "spa",
  "club",
  "office",
  "airport",
  "gym",
  "eatery",
  "market",
  "office",
  "mall",
  "eatery",
  "spa",
  "market",
  "eatery",
  "saloon",
  "church",
  "office",
  "spa",
  "club",
  "office",
  "office",
  "mall",
  "eatery",
  "gym",
  "bank",
  "saloon",
  "airport",
  "gym",
  "eatery",
];
let target_place = document.getElementById("target_place");
let result = document.getElementById("result");
let submit = document.getElementById("submit");
function frequency(locations, target_place) {
  let count = 0;
  for (let i = 0; i < locations.length; i++) {
    if (locations[i] === target_place) {
      count++;
      result.innerHTML = `Criminal was at <b>"${target_place}"</b> ${count} times.`;
    } else if (locations.includes(target_place) === false) {
      result.innerHTML = `Criminal was never at <b>"${target_place}"</b>.`;
    }

    if (target_place === "") {
      result.textContent = `Please select a location.`;
    }
  }
}
submit.addEventListener("click", () => {
  frequency(array_locations, target_place.value);
});