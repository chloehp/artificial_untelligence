

function randomFromAr(ar) {
    const ranNum = Math.floor(Math.random() * ar.length);
    return ar[ranNum];
}

function respond(talk) {
    talk = talk.toLowerCase();
    preparedResponse(talk);
}

function preparedResponse(talk) {
    const talkAr = talk.split(/[.,:;?!]/);                              // split talk into seperate sentences

    for (let i = 0; i < talkAr.length; i++) {                           
        const responseIndex = preparedResponses.indexOf(talkAr[i]);
        if (responseIndex > -1) {                                       //check if any of the sentences are in prepared responses
            
        }
    }
}