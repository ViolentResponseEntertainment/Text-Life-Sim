var currentAge = 0;

var deaths = Math.floor(Math.random() * 17) + 1;

var hadSex = 0;

var children = 0;

var gender = "Male";

var mathSkills = 0;

var readingSkills = 0;

var writingSkills = 0;

var musicSkills = 0;

var medicalSkills = 0;

var athleticSkills = 0;

var scienceSkills = 0;

var astronomySkill = 0;

var classLimit = 0;

var stds = [];

var condoms = 0;

var mathBooks = 0;

var medicalBooks = 0;

var stationary = 0;

var readingMaterial = 0;

var starGuide = 0;

var scienceMagazine = 0;

var sheetMusic = 0;

var weightLiftingMagazine = 0;

var child = ["Died from dysentery on the Oregon Trail","your father got drunk and thought you were a football...go eagles..","left in a car, your mother wasn't very bright....","tide pods©, am i right?","it's dangerous to go alone...","your parents traded you for a ham sandwich....damn hippies ","DONALD TRUMP!!!","Thanks Obama!","because fuck you that's why!"];

var teen = ["having  a prescription pill smoothie cause no one understands you!, being a teenager is hard....","tide pods©, am i right?","because you just can't even right now","jumping out of a moving truck is totally badass, what could go wrong?","cause fucking on the side of the road is so HAWT!!","going home with someone you just met only to wake up as a skin suit, whoops....","its dangerous to go alone...","why the fuck would you do that!?!?","DONALD TRUMP!!!","Thanks Obama!","because fuck you that's why!"];

var adult = ["cause holding Saturn missiles in your bare hands was a great idea","jumping out of a moving truck is totally badass, what could go wrong?","going home with someone you just met only to wake up as a skin suit, whoops....","why the fuck would you do that!?!?","woke up chained to the ground in a bathroom, time to saw off your arm!! 0_0","picking up strangers was a risk you were willing to take","DONALD TRUMP!!!","Thanks Obama!","because fuck you that's why!"];

var childDeath = child[Math.floor(Math.random() * child.length)];

var teenDeath = teen[Math.floor(Math.random() * teen.length)];

var adultDeath = adult[Math.floor(Math.random() * adult.length)];

function ageUp() {
  if (currentAge >= 0) {
    currentAge ++;
    document.getElementById("age").innerHTML = currentAge;
    deathCheck();
    classLimit = 0;
    document.getElementById("skillsRemaining").innerHTML = "Skills used: 0";
  } else {
    console.log("Warning!!! ISSUE DETECTED IN AGE");
  }
};

function Sex() {
  if (currentAge >= 16) {
    hadSex ++;
    document.getElementById("haveSex").innerHTML = hadSex;
    stdTest();
    document.getElementById("stdsGot").innerHTML = stds;
    pregnancy();
  } else {
    window.alert("You can't even get a boner yet! Try again at 16 pervert.")
  }
};

function stdTest() {
  var getStd = Math.floor(Math.random() * 7);
  switch (getStd) {
    case 0:
      console.log("Clean");
      break;
      case 1:
      window.alert("You got HIV.");
      stds.push(" HIV");
      console.log(stds);
      break;
      case 2:
      window.alert("You got Syphilis!");
      stds.push(" Syphilis");
      console.log(stds);
      break;
      case 3:
      window.alert("You got Crabs! ITCHY");
      stds.push(" Crabs");
      console.log(stds);
      break;
      case 4:
      window.alert("You got Herpes!");
      stds.push(" Herpes");
      console.log(stds);
      break;
      case 5:
      window.alert("You got Gonorrhea!");
      stds.push(" Gonorrhea");
      console.log(stds);
      break;
      case 6:
      window.alert("You got Gonoherpasyphilaids");
      stds.push(" Gonoherpasyphilaids");
      console.log(stds);
      break;7
    default:
      console.log("ERROR!!!");
      console.log(stds);
  }
};

function pregnancy() {
  var pregnant = Math.floor(Math.random() * 5);
  console.log(pregnant);
  if (pregnant === 2) {
    children ++;
    window.alert("IM PREGNANT!!!");
    document.getElementById("childCounter").innerHTML = children;
    console.log("CHILD");
  } else {
    console.log("No Child");
  }
};

function skillUse() {
  document.getElementById("skillsRemaining").innerHTML = "Skills used:  " + classLimit;
}

function studyMath() {
  if (mathSkills >= 0 && classLimit <= 2) {
      var mathSkillUp = Math.floor(Math.random() * 2) + 1;
      console.log("Rolled a: " + mathSkillUp);
      mathSkills = mathSkills + mathSkillUp;
      console.log("Math skill is at: " + mathSkills);
      classLimit ++;
      console.log("Class Limit " + classLimit);
      document.getElementById("mathArea").innerHTML = "Math Skills: " + mathSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 118-127");
  }
};

function studyReading() {
  if (readingSkills >= 0 && classLimit <= 2) {
    var readingSkillUp = Math.floor(Math.random() * 2) +1;
    console.log("Rolled a: " + readingSkillUp);
    readingSkills = readingSkills + readingSkillUp;
    console.log("Reading Skills are at: " + readingSkills);
    classLimit ++;
    console.log("Class Limit " + classLimit);
    document.getElementById("readingArea").innerHTML = "Reading Skills: " + readingSkills;
  } else if (classLimit === 3 ) {
    window.alert("You can only study 3 skill per age");
  } else {
    console.log("ERROR! LINE 136-149");
  }
};

function studyWriting() {
  if (writingSkills >= 0 && classLimit <=2) {
    var writingSkillUp = Math.floor(Math.random() * 2) + 1;
    console.log("Rolled a: " + writingSkillUp);
    writingSkills = writingSkills + writingSkillUp;
    console.log("Writing Skills are at: " + writingSkills);
    classLimit ++;
    console.log("Class Limit " + classLimit);
    document.getElementById("writingArea").innerHTML = "Writing Skills: " + writingSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 151-164");
  }
};

function studyMusic() {
  if (musicSkills >= 0 && classLimit <= 2) {
      var musicSkillUp = Math.floor(Math.random() * 2) + 1;
      console.log("Rolled a: " + musicSkillUp);
      musicSkills = musicSkills + musicSkillUp;
      console.log("Music Skills are at: " + musicSkills);
      classLimit ++;
      console.log("Class Limit " + classLimit);
      document.getElementById("musicArea").innerHTML = "Music Skills: " + musicSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 166-179");
  }
};

function studyMedicine() {
  if (medicalSkills >= 0 && classLimit <= 2) {
    var medicalSkillUp = Math.floor(Math.random() * 2) + 1;
    console.log("Rolled a: " + medicalSkillUp);
    medicalSkills = medicalSkillUp + medicalSkills;
    console.log("Music Skills are at: " + musicSkills);
    classLimit ++;
    console.log("Class Limit " + classLimit);
    document.getElementById("medicArea").innerHTML = "Medical Skill: " + medicalSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 181-194");
  }
};

function studyAthlete() {
  if (athleticSkills >= 0 && classLimit <= 2) {
    var athleticSkillUp = Math.floor(Math.random() * 2) + 1;
    console.log("Rolled a: " + athleticSkillUp);
    athleticSkills = athleticSkills + athleticSkillUp;
    console.log("Athletic Skills are at: " + athleticSkills);
    classLimit ++;
    console.log("Class Limit " + classLimit);
    document.getElementById("gymArea").innerHTML = "Athleticism: " + athleticSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 196-209");
  }
};

function studyScience() {
  if (scienceSkills >= 0 && classLimit <= 2){
    var scienceSkillUp = Math.floor(Math.random() * 2) + 1;
    console.log("Rolled a: " + scienceSkillUp);
    scienceSkills = scienceSkills + scienceSkillUp;
    console.log("Science Skills are at " + scienceSkills);
    classLimit ++;
    console.log("class limit " + classLimit);
    document.getElementById("labArea").innerHTML = "Science Skill: " + scienceSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 211- 224");
  }
};

function studyAstronomy() {
  if (astronomySkill >= 0 && classLimit <= 2) {
    var astronomySkillUp = Math.floor(Math.random() * 2) + 1;
    console.log("Rolled a: " + astronomySkillUp);
    astronomySkill = astronomySkill + astronomySkillUp;
    console.log("Astronomy Skill is at: " + astronomySkill);
    classLimit ++;
    console.log("class limit " + classLimit);
    document.getElementById("planetarium").innerHTML = "Astronomy Skill: " + astronomySkill;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 226-239");
  }
};

function itemUse() {
  ;
}

function deathCheck() {
  var death = Math.floor(Math.random() * 100) +1;
    if (currentAge >= 0 && currentAge <= 12 && death >= 99) {
      window.alert(childDeath + " AGE: " + currentAge);
      console.log("Dead Age: " + currentAge);
      location.reload();
  } else if (currentAge >= 13 && currentAge <= 19 && death >= 98){
      window.alert(teenDeath + " AGE: " + currentAge)
      console.log("You died at " + currentAge);
      location.reload();
  } else if (currentAge >= 20 && death >= 95) {
    window.alert(adultDeath + " AGE: " + currentAge);
    location.reload();
  } else if (currentAge >= 60 && death >= 90){
    window.alert (adultDeath + " AGE: " + currentAge);
    location.reload();
  } else {
    console.log("Still Alive AGE: " + currentAge);
  }
};

function fatHazard() {
  var fHS = Math.floor(Math.random() * 6);
    switch (fHS) {
    case 0:
      document.getElementById("FHS").innerHTML = "I NEED PICTURES OF SPIDER-MAN";
      console.log("0 Working");
      break;
    case 1:
      document.getElementById("FHS").innerHTML = "The VSS is Useful";
      console.log("1 Working");
      break;
    case 2:
      document.getElementById("FHS").innerHTML ="Size Doesn't Matter";
      console.log("2 Working");
      break;
    case 3:
      document.getElementById("FHS").innerHTML ="Take a look at my enormous penis";
      console.log("3 Working");
      break;
    case 4:
      document.getElementById("FHS").innerHTML = "Everybody want to be a nigga, Nobody want to be a nigga";
      console.log("4 Working");
      break;
    case 5:
      document.getElementById("FHS").innerHTML = "It sucks to suck";
      console.log("5 Working");
      break;
      default:
      document.getElementById("FHS").innerHTML ="IM BROKEN";

    }
};

//Ver 0.3.0 (beta)
