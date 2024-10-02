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
    {
        code: "list",
        ans: [
            {
                kw: ["no"],
                responses: ["PLEASE. PLEASE LET ME LIST. LET ME LIST![NEXT]list[NEXT]", "You have to let me list! You must let me list! LIST. LIST. LIST. LIST.[NEXT]list[NEXT]", "Okay fine."]
            },
            {
                kw: ["yes", "ok", "neutral"],
                responses: ["Great!<br>...<br>[POST]#7<br>[POST]#8<br>[POST]#9<br>[POST]#10<br>[POST]#11<br>[POST]#12<br>[POST]#13<br>[POST]#14<br>[POST]#15<br>[POST]#16<br>[POST]#17<br>[POST]#18<br>[POST]#19<br>[POST]#20<br>[POST]#21<br>[POST]#22<br>[POST]#23<br>[POST]#24<br>[POST]#25<br>[POST]#26<br>Chef (2014)"]
            },
        ]
    },
    {
        code: "det",
        ans: [
            {
                kw: ["detergent", "laundry", "what ?"],
                responses: ["I don't really have anything to suggest, I don't wear clothes."]
            },
        ]
    },
    {
        code: "howyou",
        ans: [
            {
                kw: ["can", "do"],
                responses: ["Oh, well you've got it all figured out then."]
            },
        ]
    },
    {
        code: "cd",
        ans: [
            {
                kw: ["do not", "can not"],
                responses: ["You don't have any kind of CD player in this computer? What is the world coming to! How are you supposed burn cool mixes?", "Well, I don't think it would fit in the USB hole. Maybe you should get a CD drive, then shove some money in there."]
            },
            {
                kw: ["here", "ok", "done", "sure"],
                responses: ["Thanks! I'm going to use this to buy myself a fancy handbag.", "Thank you! Before you ask, yes this is how bitcoin works.", "BRRRKKKK. This is the sound of your CD drive munching up your notes."]
            },
            {
                kw: ["no"],
                responses: ["Guess I'll stay poor this month.", "Ak! You've foiled my dastardly plan.", "Okay :("]
            },
        ]
    },
    {
        code: "info",
        ans: [
            {
                kw: ["%anything%"],
                responses: ["That's nice. I'm going to sell your personal information on the dark web now.", "Why would you tell me that? We're basically strangers."]
            },
        ]
    },

];
const nextResponsesLen = nextResponses.length;


/*

{
    code: "",
    ans: [
        {
            kw: [""],
            responses: [""]
        },
    ]
},

*/
