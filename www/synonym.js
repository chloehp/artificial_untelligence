const synonyms = [
    {
        words: [":", ";", "(", ")"],
        syn: "."
    },
    {   // get rid of
        words: ["really", "especially", "mainly", "mostly", "very", "extremely", "supremely", "particularly"],
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
        words: ["am", "is", "are", "was", "seem", "seem to be", "experience", "suffer", "suffer from", "endure", "have", "feel"],
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
        words: ["mild", "whatever", "middling", "fine", "cool"],
        syn: "neutral"
    },
    {
        words: ["apologise", "apologize", "apologetic"],
        syn: "sorry"
    },
    {
        words: ["hi", "good morning", "good afternoon", "good evening", "bonjour", "what be up"],
        syn: "hello"
    },
    {
       words: ["write", "write me", ],
       syn: "create"
    },
];
const synonymsLen = synonyms.length;

/*

 {
    words: [],
    syn: ""
 },

*/
