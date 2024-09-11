const preparedResponses = [
    {
        input: " what be this ",
        responses: ["??? What are you?", "puter...", "I'm a web site :)"]
    },

];

// preparedResponsesTalk is array of .talk - things the user could say that i have full prepared responses for
// this is for indexing purposes and other baked in array functions
const preparedResponsesLength = preparedResponses.length;
const preparedResponsesInput = [];
for (let i = 0; i < preparedResponsesLength; i++) {
    preparedResponsesInput.push(preparedResponses[i].input);
}
