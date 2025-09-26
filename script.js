

const searchBox = document.getElementById("searchBox");

const butterflies = [
  [
    "Danaus plexippus",
    "Monarch",
    "Very large, with FW long and drawn out. Above, bright, burnt-orange with black veins and black margins sprinkled with white dots; FW tip broadly black interrupted by larger white and orange spots. Below, paler, duskier orange. 1 black spot appears between HW cell and margin on male above and below. Female darker with black veins smudged.",
  ],
  [
    "Heliconius charitonius",
    "Zebra Longwing",
    "Wings long and narrow. Jet-black above, banded with lemon-yellow (sometimes pale yellow). Beneath similar; bases of wings have crimson spots.",
  ],
  [
    "Heliconius erato",
    "Crimson-patched Longwing",
    "Wings long, narrow, and rounded. Black above, crossed on FW by broad crimson patch, and on HW by narrow yellow line. Below, similar but red is pinkish and HW has less yellow.",
  ],
  [
    "Junonia coenia",
    "Common Buckeye",
    "Wings scalloped and rounded except at drawn-out FW tip. Highly variable. Above, tawny-brown to dark brown; 2 orange bars in FW cell, orange submarginal band on HW, white band diagonally crossing FW. 2 bright eyespots on each wing above: on FW, 1 very small near tip and 1 large eyespot in white FW bar; on HW, 1 large eyespot near upper margin and 1 small eyespot below it. Eyespots black, yellow-rimmed, with iridescent blue and lilac irises. Beneath, FW resembles above in lighter shades; HW eyespots tiny or absent, rose-brown to tan, with vague crescent-shaped markings.",
  ],
  [
    "Lycaena phlaeas",
    "American Copper",
    "Above, FW bright copper or brass-colored with dark spots and margin; HW dark brown with copper margin. Undersides mostly grayish with black dots; FW has some orange, HW has prominent submarginal orange band.",
  ],
  [
    "Nymphalis antiopa",
    "Mourning Cloak",
    "Large. Wing margins ragged. Dark with pale margins. Above, rich brownish-maroon, iridescent at close range, with ragged, cream-yellow band, bordered inwardly by brilliant blue spots all along both wings. Below, striated, ash-black with row of blue-green to blue-gray chevrons just inside dirty yellow border.",
  ],
  [
    "Papilio cresphontes",
    "Giant Swallowtail",
    "Very large. Long, dark, spoon-shaped tails have yellow center. Dark brownish-black above with 2 broad bands of yellow spots converging at tip of FW. Orange spot at corner of HW flanked by blue spot above; both recur below, but blue continuing in chevrons across underwing, which also has orange patch. Otherwise, yellow below with black veins and borders. Abdomen yellow with broad black midline tapering at tip; notch on top of abdomen near rear. Thorax has yellow lengthwise spots or stripes.",
  ],
  [
    "Pieris rapae",
    "Cabbage White",
    "Milk-white above with charcoal FW tips, black submarginal sex spots on FW (1 on male, 2 on female) and on HW costa. Below, FW tip and HW pale to bright mustard-yellow, speckled with grayish spots and black FW spots.",
  ],
  [
    "Vanessa atalanta",
    "Red Admiral",
    "FW tip extended, clipped. Above, black with orange-red to vermilion bars across FW and on HW border. Below, mottled black, brown, and blue with pink bar on FW. White spots at FW tip above and below, bright blue patch on lower HW angle above and below.",
  ],
  [
    "Vanessa cardui",
    "Painted Lady",
    "FW tip extended slightly, rounded. Above, salmon-orange with black blotches, black-patterned margins, and broadly black FW tips with clear white spots; outer HW crossed by small black-rimmed blue spots. Below, FW dominantly rose-pink with olive, black, and white pattern; HW has small blue spots on olive background with white webwork. FW above and below has white bar running from costa across black patch near tip.",
  ]
  
];



  document.getElementById("resultsDropdown").addEventListener("change", function() { //This is to get the value selected from the dropdown
    let selectedValue = this.value;
    searchDropdown(selectedValue);
    //alert("You selected: " + selectedValue);
    
  });

  function searchDropdown(String){    //This is for the Dropdown Alert
    let word = String.trim().toLowerCase();
    let found = false;
    let index = 0;
    //alert(word);
      for (let i = 0; i < butterflies.length; i++) 
      {
        for (let j = 0; j < butterflies[i].length; j++) 
        {
        const section = butterflies[i][0].trim().toLowerCase();
            if (section == word)
            {
              found = true;
              index = i;
            }
        }
      }
      let common = butterflies[index][1].trim().toLowerCase();
      let desc = butterflies[index][2].trim().toLowerCase();
      if (found == true){
        alert("You selected "+ common + ". \nDescription: "+ desc);
      }
  }




searchBox.addEventListener("keydown", function(event) { //This is to make the enter key work
    if (event.key == "Enter")
    {
      event.preventDefault();
      document.getElementById("enter").click();
    }
    });


  


 function searchButterflies() { //This is for the search bar

      let word = document.getElementById("searchBox").value.trim().toLowerCase();

      let found = false;
      let key = [];
      for (let i = 0; i < butterflies.length; i++) 
      {
        for (let j = 0; j < butterflies[i].length; j++) 
        {
        const section = butterflies[i][1].trim().toLowerCase();
        const value = butterflies[i][j].trim().toLowerCase();

            if (value.includes(word) && key.length < 5 && !key.includes(section))
            {
              found = true;
              key.push(section);
            }
        }
      }

      if (!/^[a-zA-Z\s]+$/.test(word)) { alert("Search term must only contain letters (A–Z)."); }
      else if (found == true)
      { alert("The word " + word + " was found inside: " + key);}
      else
      alert("Could not find: " + word);
      
      
 }