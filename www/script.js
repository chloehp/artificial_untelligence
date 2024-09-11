

const thingsUsrSaid = [];
const thingsISaid = [];

function randomFromAr(ar) {
    if (ar.length < 2) return ar[0]                                 // if there's only 1 thing in array, return that one thing
    const ranNum = Math.floor(Math.random() * ar.length);           // get random number between 0 and array's length
    const lastThingISaid = thingsISaid[thingsISaid.length - 1];     // get last thing I remember saying
    const arRan = ar[ranNum];
    if (arRan !== lastThingISaid) return arRan                      // if random thing from array is different to the last thing i said, return random from array
    else randomFromAr(ar);                                          // else try again
}

function getNextPhrase(word, input) {
    const endOfKeyword = input.indexOf(word) + word.length;
    const endKWord = endOfKeyword + 3;
    const endOfNextPhrase = [
        input.indexOf(".", endKWord),
        input.indexOf(",", endKWord),
        input.indexOf("?", endKWord),
        input.indexOf("and", endKWord),
        input.indexOf("or", endKWord),
        input.indexOf("but", endKWord),
        input.indexOf("because", endKWord),
        //input.indexOf("", endKWord)
    ];
    let endNextIndex = input.length;
    for (let i = 0; i < endOfNextPhrase.length; i++) {
        if (
            (endOfNextPhrase[i] > 0)                                    // ending punctuation/word has been found
            && (endOfNextPhrase[i] < endNextIndex)                      //
        ) {endNextIndex = endOfNextPhrase[i]}                           // end of next phrase is this
    }                                                                   // if no ending punctuation/word is found, the next phrase runs till the end of user input
    const nextPhrase = input.substring(endOfKeyword, endNextIndex);
    return nextPhrase
}

function synonymise(input) {    
    for (let x = 0; x < synonymsLen; x++) {                                         // through the synonyms list
        for (let y = 0; y < synonyms[x].words.length; y++) {                        // 
            input = input.replaceAll(
                (" " + synonyms[x].words[y] + " "), (" " + synonyms[x].syn + " ")   // replace all the words with their synonym
            );
        }
    }
    return input                                                                    // return synonymised, simplified user input
}

function respond(usrInput) {
    thingsUsrSaid.push(usrInput);
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
    console.log("Dumbed down user input: " + usrInput);

    const prepResp = preppedResponse(usrInput);
    let response = "";
    if (prepResp) {response = prepResp}                 // if preppedResponse is not null, return preppedResponse
    else {        
        const keyResp = keyResponse(usrInput);
        if (keyResp) {response = keyResp}               // else if keyResponse is not null, return keyResponse
        else if (usrInput.length > 9) {response = randomFromAr(noParseResponses)}
        else {response = randomFromAr(nonsenseResponses)}
    }
    thingsISaid.push(response);
    return response
}

function preppedResponse(input) {
    const inputAr = input.split(/[.,:;?!]/);                                    // split input into seperate sentences
    for (let i = 0; i < inputAr.length; i++) {                                  // for each 'sentence' (broken up by any of .,:;?!)
        const responseIndex = preparedResponsesInput.indexOf(inputAr[i]);       // search for and get index of prepared response (pre-written response)
        if (responseIndex > -1) {                                               // check if [i] prepared responses exist
            console.log("returning prepared reponse for: " + preparedResponses[responseIndex].input);
            return randomFromAr(preparedResponses[responseIndex].responses)     // return a random prepared response to what the user said
        }
    }
    return null                                                                 // if there are no prepared responses for user input, return null
}

function keyResponse(input) {
    let highestPriority = -1;
    for (let i = 0; i < keywordResponsesLen; i++) {                         // for each object in keywordResponses
        if (
            (input.includes(keywordResponses[i].kw))                        // if input includes the keyword
            && (keywordResponses[i].priority > highestPriority)             // and the keyword's priority > previous highest priority
        ) {highestPriority = i}                                             // set keyword as highest priority
    }                                                                       
    if (highestPriority > -1) return randomFromAr(keywordResponses[highestPriority].responses)  // if keyResponse got a hit, highestPriority will be above default value
    else return null                                                                            // else return null
}