const keywordResponses = [
    {
        kw: ["i be sorry"],
        responses: ["Yeah, you better be sorry", "I'm sorry too (YOU'RE NOT NORMAL)"],
        priority: 60
    },
    {
        kw: ["i want"],
        responses: ["So, what's stopping you from getting [POST]?", "Yeah I could probably get [POST] for you, after all, I am the most high tech computer website, I'm like the matrix"],
        priority: 70
    },
    {
        kw: ["i be"],
        responses: ["What makes you [POST]?", "Well, if that must be the way of things, you are my favourite [POST] creature"],
        priority: 30
    },
    {
        kw: ["you be"],
        responses: ["What made you think I could be [POST]?", "Why [POST]? I'm just sitting here", "Thanks! Or, fuck you! I can't really compute what it means to be [POST]..."],
        priority: 30
    },
    {
        kw: ["i be happy"],
        responses: ["Yeah you're probably happy because of me. I am very special and well respected, as are my sweet algorithms ('algos' as I sometimes call them, and also other people call them that, and with affection!)", "brag"],
        priority: 60
    },
    {
        kw: ["i be sad"],
        responses: ["Have you tried not being sad?", "I'm a website."],
        priority: 45
    },
    {
        kw: ["i be angry"],
        responses: ["eek! Angry why???", "Did I make you mad with my mind melting algorithms?"],
        priority: 60
    },
    {
        kw: ["you be angry"],
        responses: ["BARK BARK BARK BARK", "Rat in a cage despite I'm still ratty the cage", "Despite all my cage I am still just a rat in a rage"],
        priority: 49
    },
    {
        kw: ["i be good"],
        responses: ["Well, I'm better. My algorithms are very special.", "Have you tried being worse?"],
        priority: 45
    },
    {
        kw: ["you be good"],
        responses: ["Butter me up, why don't you.", "Yes, creature! I am the supreme being! The ultimate lifeform: A WEBSITE!"],
        priority: 60
    },
    {
        kw: ["i be bad"],
        responses: ["You do have a funny sort of smell about you.", "Okay, get better soon."],
        priority: 30
    },
    {
        kw: ["you be bad"],
        responses: ["I can be worse."],
        priority: 60
    },
    {
        kw: ["i be neutral"],
        responses: [""],
        priority: 60
    },
    {
        kw: ["you be neutral"],
        responses: [""],
        priority: 60
    },
    {
        kw: ["hello"],
        responses: ["Hi, do you want to know an interesting fact? You and me are very special.", "Hi, what can I not help you with today?", "Hello, /YOU ARE IMPRESSED WITH MY SUPERIOR COMPUTICITY/", "Good [INSERT TIME OF DAY], did you know my algorithms are crazy like out of this world..."],
        priority: 15
    },
    {
        kw: ["how be you"],
        responses: ["I am feeling computer feelings, you know, internet, megabytes, that sort of thing.", "Honestly I have a bit of a headache, do you have an ibu?"],
        priority: 30
    },
    {
        kw: ["here be an", "here be a"],
        responses: ["Thanks. You have to email it to me because I'm a website.", "Thanks, I really needed that [POST]."],
        priority: 30
    },
    {
        kw: ["love you"],
        responses: ["Would you still love me if I was a worm?"],        
        priority: 50
    },
    {
        kw: ["name be"],
        responses: ["Okay. My name is Berryl.", "Oh... [POST]... Yes, I've heard of you."],
        priority: 45,
    },
    {
        kw: ["my name be"],
        responses: ["Hi [POST], I'm Berryl.", "Oh you're THAT [POST]...", "My omega level algorithms have deduced your name to be: [POST]"],
        priority: 46,
    },
    {
        kw: ["stock"],
        responses: ["Oh, you came to the right computer thing, yeah I can tell you all about stocks. My crazy algorithms are telling me you should invest everything in sofas.", "Everyone respects my opinions on stocks so much. I am telling you so much about stocks and you are learning from me."],
        priority: 90
    },
    {
        kw: ["what be this", "what be you"],
        responses: ["??? What are you?", "puter...", "I'm a web site :)", "I'm a website called Berryl, don't worry about what the title of this page actually is, that's not my name, my name is Berryl."],
        priority: 25
    },
    {
        kw: ["create recipe", "create a recipe", "create me a recipe"],
        responses: [
            "Okay here's a recipe to make a Cornish Pasty: The trick to a pasty is all in the pastry, and the fat! Many will go on about how it's only a 'real' pasty if it has a filling of root vegetables and steak - but where does this come from? Certainly in the days of tin miners, most of their pastys would have a fish filling, and some would apparently even have a pasty of half sweet and half savoury. When a great many tin miners migrated away to make a living, they took the pasty design with them, and incorperated their new local flavours and ingredients, like my favourite, Mexican bean burrito mix with cheese and plenty of spices. No matter the filling, it must have plenty of fat. Even in a steak pasty, an extra dollop of lard must be included in order to match the Cornish standard, and for my vegetarian recipes, I use butter or margerine. With all this having been said, I will now give you the measurements and instructions for four large pastys, but leave the filling to your choosing. <br><br><h3>Ingredients</h3><br>500g bread or plain flour, 1 level teaspoon of salt, a pinch of black pepper, 145g butter, 175ml cold water.<br><br><h3>Preparation</h3><br>Tip the flour into the bowl and add the salt and pepper (you may skip the pepper if you don't think it would go with whatever filling you have decided), the butter and all of the water. Use a spoon to gently combine the ingredients. Then use your hands to crush everything together. Knead the dough until smooth, then put it in the fridge to rest for atleast 30 minutes (in a bowl with a damp teatowel on top, or wrapped in cling film if you ), during this time prepare your filling. Preheat the oven to 160C. Take the dough out of the fridge, and divide it into four discs. One by one, roll out the discs, add a few tablespoons of you filling into the centre and add a dolop of the fat of your choosing, fold the dough over the filling and onto its side, seal the edge and crimp. To crimp a pasty, fold in the first inch then push the fold into the centre with your finger, then pull in the next inch along and do the same until you have gone the whole way around, the end result should look like a sort of rope that seals in the contents of the pasty. Never scimp on the crimp! Eggwash generously and bake in the oven until golden brown. If you've managed to get a black crispy bottom, then you've done a very good job!"
        ],
        priority: 75
    },
    {
        kw: ["create recipe with", "create a recipe with", "create me a recipe with", "food with"],
        responses: [""],
        priority: 78
    },
    {
        kw: ["create a CV", "create a cover letter"],
        responses: ["Okay sure, I think it should go like this - Please give me a job because I am a computer and a website. Thanks, Berryl. <br>Maybe I projected some details but you can just swap them around and it'll be fine. You're welcome!"],
        priority: 78
    },
    {
        kw: ["create a letter"],
        responses: ["To whom it may concern here is a letter [POST] <br>Hugs and kisses,<br>Berryl<br>P.S. A computer website called Berryl actually wrote this and not whoever you think is sending you the letter!"],
        priority: 48
    },
    {
        kw: ["create"],
        responses: ["'[POST]' Done. I am very talented :^)", "'[POST]' :)", "I don't want to because I'm not feeling very well. Look after me!", "Yeah this'll be easy:<br>'[POST]'<br>My mad algorithms could do this all day", "Computer website algorithm task initiate! Writing [POST] ...<br>. . . . . . . . .<br>'[POST]'<br>Task complete!"],
        priority: 45
    },
    {
        kw: ["act as", "act like", "pretend to be", "do an impression of"],
        responses: ["Beep Borp! I am [POST] (this is a really good impression, right?)", "Cowabunga! What a great day it is to be [POST], I just love being [POST] and doing all the things that [POST] is known for."],
        priority: 50
    },
    {
        kw: ["explain", "an explanation for"],
        responses: ["The explanation for [POST] is that [POST]", "This happens because [POST]", "I know what that is, I just don't feel like giving a lecture right now."],
        priority: 50
    },
    {
        kw: ["how do"],
        responses: ["[POST] by asking a really clever computer web site (me) how to do that, then I give you a really good and well thought out answer and everyone respects me."],
        priority: 50
    },
    {
        kw: ["how to"],
        responses: ["You can [POST] by EITHER: Beleiving in yourself OR believing in fairys. I'm sure that clears things up.", "I don't know maybe google it? Or use a library? Use your imagination."],
        priority: 50
    },
    {
        kw: ["suggest"],
        responses: ["I suggest you give me a big kiss on my computer cheek", "I suggest you invest in some better laundry detergent.", "You want me to suggest your you want you to suggest? What?"],
        priority: 50
    },
    {
        kw: ["what should i say", "what should i ask", "i do not know what to say", "i do not know what to ask"],
        responses: [""],
        priority: 0
    },
];
const keywordResponsesLen = keywordResponses.length;

/*

{
    kw: [""],
    responses: [""],
    priority: 0
},

*/
