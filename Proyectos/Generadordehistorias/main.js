//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){   //que toma un array, y devuelve uno de los items guardados dentro del array al azar.
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

insertX  = ['Willy the Goblin',
             'Big Daddy',
             'Father Christmas']

insertY = ['the soup kitchen',
            'Disneyland',
            'the White House']


insertZ = ['spontaneously combusted',
           'melted into a puddle on the sidewalk',
           'turned into a slug and crawled away']

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  newStory = storyText;
  
  xItem = randomValueFromArray(insertX); 
  yItem = randomValueFromArray(insertY); 
  zItem = randomValueFromArray(insertZ); 

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':insertx:', xItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300* 0.07143) + ' stone';
    let temperature =  Math.round((94-32)/(5/9)) + ' centigrade';
    temperature = temperature.replace('94 fahrenheit', temperature);
    weight = weight.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}