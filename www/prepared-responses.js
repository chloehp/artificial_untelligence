const preparedResponses = [
    {
        talk: "what is this",
        responses: [
            "??? What are you?",
            "Shut up?",
        ]
    },
    {
        talk: "",
        responses: []
    }

];

// preparedResponsesTalk is array of .talk - things the user could say that i have full prepared responses for
// this is for indexing purposes and other baked in array functions
const preparedResponsesLength = preparedResponses.length;
const preparedResponsesTalk = [];
for (let i = 0; i < preparedResponsesLength; i++) {
    preparedResponsesTalk.push(preparedResponses[i].talk);
}
