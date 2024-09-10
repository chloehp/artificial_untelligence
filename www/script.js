

function randomFromAr(ar) {
    const ranNum = Math.floor(Math.random() * ar.length);
    return ar[ranNum];
}

function respond(talk) {
    talk = talk.toLowerCase();
    const prepResp = preparedResponse(talk);
    if (prepResp) return prepResp;                                      // if preparedResponse is not null, preparedResponse
}

function preparedResponse(talk) {
    const talkAr = talk.split(/[.,:;?!]/);                                  // split talk into seperate sentences
    for (let i = 0; i < talkAr.length; i++) {                               // for each 'sentence' (broken up by any of .,:;?!)
        const responseIndex = preparedResponsesTalk.indexOf(talkAr[i]);     // search for and get index of prepared response (pre-written response)
        if (responseIndex > -1) {                                           // check if [i] prepared responses exist
            return randomFromAr(preparedResponse[responseIndex].responses)  // return a random prepared response to what the user said
        }
    }
    return null
}