// Get references to HTML elements
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

// Function to get a random value from an array
function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

// The main story template
var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Arrays of possible values for placeholders in the story
var insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
var insertY = ["the soup kitchen","Disneyland","the White House"];
var insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Event listener for the randomize button
randomize.addEventListener('click', result);

// Function to generate a new story
function result() {
   // Copy the original story template
   var newStory = storyText;

   // Variables to store the randomly selected items
   var xItem, yItem, zItem;

   // Get random items from arrays
   xItem = randomValueFromArray(insertX);
   yItem = randomValueFromArray(insertY);
   zItem = randomValueFromArray(insertZ);

   // Replace placeholders in the story with random items
   newStory = newStory.replace(":insertx:", xItem);
   newStory = newStory.replace(":inserty:", yItem);
   newStory = newStory.replace(":insertz:", zItem);

   // Check if a custom name is provided and replace the default name in the story
   if (customName.value != '') {
      var name = customName.value;
      newStory = newStory.replace('Bob', name);
   }

   // Check if the UK checkbox is checked and convert units accordingly
   if (document.getElementById("uk").checked) {
      // Conversion for weight and temperature
      var stonesPerPound = 0.0714286;
      var weight = Math.round(300 * stonesPerPound) + ' stone';
      var temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
      newStory = newStory.replace("94 farenheit", temperature);  
      newStory = newStory.replace("300 pounds", weight); 
   }
  
   // Display the new story in the HTML
   story.textContent = newStory;
   story.style.visibility = 'visible';
}
