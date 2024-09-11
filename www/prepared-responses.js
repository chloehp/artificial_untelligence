const preparedResponses = [
    {
        talk: "what is this",
        responses: [
            "??? What are you?",
        ]
    },
    {
        talk: "hello",
        responses: []
    },
    {
        talk: "love you",
        responses: ["Would you still love me if I was a worm?"]
    }

];

// preparedResponsesTalk is array of .talk - things the user could say that i have full prepared responses for
// this is for indexing purposes and other baked in array functions
const preparedResponsesLength = preparedResponses.length;
const preparedResponsesTalk = [];
for (let i = 0; i < preparedResponsesLength; i++) {
    preparedResponsesTalk.push(preparedResponses[i].talk);
}
