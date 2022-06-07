# How this game "works"

No content (aside from the tutorial) is hardcoded into the game, everything is defined in the gameData.json file (sort of like a database of levels). Below is described the structure of this file.

# gameData.json format

gameData.json is structured as an Array of objects representing individual levels
each level object should include these properties:

-   title<String> (shown in level selection and browser tab title)
-   description<String> (shown in level selection)
-   imageUrl<String> (url of image shown during transition from level selection to game)
-   transitionText<String> (text shown during transition)
-   pages<Array> (an Array containing objects representing pages shown during gameplay)
    -   each page object should contain these properties:
        -   text<String> (text that is shown during the censoring phase, for formating take a look at #redacted parts formatting)
        -   explanation<String> (short informational text about this page shown at the end of each level)

## example level object

`{ "title": "Example title", "description": "Some description", "imageUrl": "/images/trans1.jpg", "transitionText": "transition text", "pages": [ { "text": "Lorem <?ipsum?>1", "explanation": "explanation 1" }, { "text": "Lorem ipsum", "explanation": "explanation 2" } ] }`

# redacted parts formatting

Segments which should be redacted by the player are defined in the text property of each page object. The format in which these segments are defined is as follows: <?[text which can be redacted]?>(0 or 1). The number at the end dictates whether that part should or shouldn't be redacted (0 means should not be redacted, 1 means should)

## example redacted part

I know that ?they live in my walls?1. (should be redacted)
I think that ?old ThinkPads were the peak of computing?0. (should not be redacted)
