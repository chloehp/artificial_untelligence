const nextResponses = [
    {
        code: "0",        
        ans: [
            {
                kw: ["mean"],
                responses: ["To be honest, you should talk to a human therapist about that."]
            },
            {
                kw: [""],
                responses: [""]
            },
        ]
    },
    {
        code: "1",        
        ans: [
            {
                kw: ["that be enough", "no more"],
                responses: ["Sorry for party responding.[NEXT]1-1[NEXT]"]
            },
        ]
    },
    {
        code: "1-1",        
        ans: [
            {
                kw: ["eep"],
                responses: ["This is a function test put in by the developer, how did you find this?!" ]
            },
        ]
    },
];
const nextResponsesLen = nextResponses.length;