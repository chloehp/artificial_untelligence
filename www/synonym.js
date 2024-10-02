const synonyms = [
    {
        words: [":", ";", "(", ")"],
        syn: "."
    },
    {   // get rid of
        words: ["really", "especially", "mainly", "mostly", "very", "extremely", "supremely", "particularly", "some", "lots of", "loads of", "a bit of"],
        syn: ""
    },
    {
        words: ["youre"],
        syn: "you be"
    },
    {
        words: ["im"],
        syn: "i be"
    },
    {
        words: ["am", "is", "are", "was", "seem", "seem to be", "experience", "suffer", "suffer from", "endure", "have", "feel", "been"],
        syn: "be"
    },
    {
        words: ["cant", "cannot", "didnt", "did not", "should not", "could not"],
        syn: "can not"
    },
    //{
    //    words: ["experience", "suffer", "suffer from", "endure", "have"],
    //    syn: "feel"
    //},
    {
        words: ["guess", "reckon", "speculate", "presume", "surmise", "suppose"],
        syn: "believe"
    },
    {
        words: ["desire", "need", "long for", "fancy", "covet", "wish for", "request", ],
        syn: "want"
    },
    {
        words: ["elated", "glad", "better", "pleased", "delighted", "cheerful", "friendly", "calm"],
        syn: "happy"
    },
    {
        words: ["unhappy", "depressed", "sick", "melancholy", "gloomy"],
        syn: "sad"
    },
    {
        words: ["furious", "mad", "outraged", "raging", "annoyed", "irritated", "enraged", "pissed off" ],
        syn: "angry"
    },
    {
        words: ["great", "amazing"],
        syn: "good"
    },
    {
        words: ["terrible", "awful", "horrible", "shit"],
        syn: "bad"
    },
    {
        words: ["cruel", "evil", "vindicative"],
        syn: "mean"
    },
    {
        words: ["mild", "whatever", "middling", "fine", "cool", "eh", "meh"],
        syn: "neutral"
    },
    {
        words: ["apologise", "apologize", "apologetic"],
        syn: "sorry"
    },
    {
        words: ["hi", "good morning", "good afternoon", "good evening", "bonjour"],
        syn: "hello"
    },
    {
       words: ["write", "write me", "generate", "make", "make me", "provide", "give me", "come up with"],
       syn: "create"
    },
    {
       words: ["okay", "o . k .", "o . k", "alright", "sure"],
       syn: "ok"
    },
    {
       words: ["imagine"],
       syn: "think"
    },
];
const synonymsLen = synonyms.length;

/*

 {
    words: [],
    syn: ""
 },

*/
