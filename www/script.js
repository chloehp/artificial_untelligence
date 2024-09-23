
const wInput = document.getElementById("w-input");
const wOutput = document.getElementById("w-output");
const thingsUsrSaid = [];
const thingsISaid = [];
let next = -1;

function randomFromAr(ar) {
    if (ar.length < 2) return ar[0]                                 // if there's only 1 thing in array, return that one thing
    console.log("random from array");
    //console.log(ar);
    const ranNum = Math.floor(Math.random() * ar.length);           // get random number between 0 and array's length
    const lastThingISaid = thingsISaid[thingsISaid.length - 1];     // get last thing I remember saying
    const arRan = ar[ranNum];
    if (arRan !== lastThingISaid) return arRan                      // if random thing from array is different to the last thing i said, return random from array
    else return randomFromAr(ar)                                    // else randomiser function again
}

function getNextPhrase(keyword, input) {
    //if (!keyword) return "that";
    const endOfKeyword = input.indexOf(keyword) + keyword.length;
    const endOfNextPhrase = [
        input.indexOf(".", endOfKeyword),
        input.indexOf(",", endOfKeyword),
        input.indexOf("?", endOfKeyword),
        //input.indexOf(" and ", endOfKeyword),
        input.indexOf(" or ", endOfKeyword),
        input.indexOf(" for ", endOfKeyword),
        input.indexOf(" but ", endOfKeyword),
        input.indexOf(" because ", endOfKeyword),
        //input.indexOf("", endOfKeyword)
    ];
    let endNextIndex = input.length;
    for (let i = 0; i < endOfNextPhrase.length; i++) {
        if (
            (endOfNextPhrase[i] > -1)                                   // ending punctuation/word has been found
            && (endOfNextPhrase[i] < endNextIndex)                      //
        ) {endNextIndex = endOfNextPhrase[i] + 1}                       // end of next phrase is this
    }                                                                   // if no ending punctuation/word is found, the next phrase runs till the end of user input
    let nextPhrase = input.substring(endOfKeyword, endNextIndex);
    nextPhrase = nextPhrase.replaceAll(" i ", " you ");
    nextPhrase = nextPhrase.replaceAll(" me ", " you ");
    nextPhrase = nextPhrase.replaceAll(" my ", " your ");
    nextPhrase = nextPhrase.replaceAll(" mine ", " yours ");
    return nextPhrase.slice(1, nextPhrase.length - 1);
}

function synonymise(input) {    
    for (let x = 0; x < synonymsLen; x++) {                                         // through the synonyms list
        for (let y = 0; y < synonyms[x].words.length; y++) {                        // 
            input = input.replaceAll(
                (" " + synonyms[x].words[y] + " "), (" " + synonyms[x].syn + " ")   // replace all the words with their synonym
            );
        }
    }
    return input;                                                                   // return synonymised, simplified user input
}

function berryl(usrInput = wInput.value){
    wInput.value = "";
    thingsUsrSaid.push(usrInput);
    let output = respond(usrInput);
    output = output.replaceAll(" be it", " it is");
    thingsISaid.push(output);
    console.log("response: " + output);
    wOutput.innerHTML = output;
}

function respond(usrInput) {
    usrInput = " " + usrInput + " "
    usrInput = usrInput.toLowerCase();                  // make all lowercase
    usrInput = usrInput.replaceAll("'s ", " is ");
    usrInput = usrInput.replaceAll("'nt ", " not ");
    usrInput = usrInput.replaceAll("'d ", " did ");
    usrInput = usrInput.replaceAll("'", "");            // no apostrophes
    usrInput = usrInput.replaceAll('"', "");            // no speech marks
    usrInput = usrInput.replaceAll(".", " .");          // add space _
    usrInput = usrInput.replaceAll(",", " ,");
    usrInput = usrInput.replaceAll("?", " ?");
    usrInput = usrInput.replaceAll("!", " !");
    usrInput = synonymise(usrInput);                    // synonymise/simplify input
    usrInput = usrInput.replaceAll("  ", " ");          // fix double spaces
    console.log("Dumbed down user input: " + usrInput);
    if (next > -1) {
        const nextResp = nextResponse(usrInput);
        if (nextResp) return nextResp;
    }
    const keyResp = keyResponse(usrInput);
    if (keyResp) return keyResp;                        // if keyResponse is not null, return keyResponse
    else if (usrInput.length > 9) return randomFromAr(noParseResponses);
    else return randomFromAr(nonsenseResponses);
}

function keyResponse(input) {
    let highestPriority = -1;
    let keyword = "";
    let output = "";
    for (let x = 0; x < keywordResponsesLen; x++) {                         // for each object in keywordResponses        
        if (keywordResponses[x].priority > highestPriority)                 // if keyword's priority > previous highest priority
            for (let y = 0; y < keywordResponses[x].kw.length; y++) {       // for each object in kw
                if (input.includes(keywordResponses[x].kw[y])) {            // if input includes the keyword
                    highestPriority = x;                                    // set keyword as highest priority
                    keyword = keywordResponses[x].kw[y];                    // save keyword
                }
            }
    }
    if (highestPriority > -1) {
        output = randomFromAr(keywordResponses[highestPriority].responses);
    }
    else return null;    
    if (output.includes("[POST]")) {                                        // if response includes [POST]
        const nextPhrase = getNextPhrase(keyword, input);                   // get the phrase after the keyword in user input
        output = output.replaceAll("[POST]", nextPhrase);                   // swap user's own words into the response
    }     
    console.log("keyResponse");
    return stringSpecials(output);
}

function nextResponse(input) {
    let keyword = "";
    let output = "";
    for (let x = 0; x < nextResponsesLen; x++) {                                            // 
        if (next === nextResponses[x].code) {                                               // find code in array for next response
            for (let y = 0; y < nextResponses[x].ans.length; y++) {                         // each possible answer
                const kw = nextResponses[x].ans[y].kw;                                //
                for (let z = 0; z < kw.length; z++) {                                 // each possible keyword
                    if (input.includes(kw[z])) {                                      // if input includes this keyword, the answer has been found, respond to it
                        const answersResponses = nextResponses[x].ans[y].responses;      
                        keyword = kw[z];
                        output = randomFromAr(answersResponses);
                        break;                                                              // break out of loop
                    }
                }
            }
            //break;
        }
    }
    if (output === "") return null;  
    if (output.includes("[POST]")) {                              
        const nextPhrase = getNextPhrase(keyword, input);        
        output = output.replaceAll("[POST]", nextPhrase);         
    }
    console.log("nextResponse: " + next);
    return stringSpecials(output);
}

function stringSpecials(str) {
    if (str.includes("[NEXT]")) {                                           // if response includes [NEXT]
        const outAr = str.split("[NEXT]");
        str = outAr[0];
        next = JSON.parse(outAr[1]);                                                    // signifies Berryl can potentially understand next response, and what to respond with
    }
    else {next = -1}
    return str;
}
















