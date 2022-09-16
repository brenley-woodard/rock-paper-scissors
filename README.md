## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

https://whimsical.com/GvDH7fovSp7j3fABHYmYrZ

## HTML

div for scoreboard

-   header with class of 'scoreboard'
-   p with display of win, loss, draw, total

div for buttons with images

-   class of throwHand
-   button for rock with img of rock with text
-   button for paper img of paper with text
-   button for scissor img of scissors with text
-   hidden outlines (green for user, red for comp, blue for draw)

div for results display

-   logic statement for 'you win' or 'you lose' or 'its a draw'

div for play again

-   button that resets

1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## JS

1. make random selection (compguess)
2. make sure clicking on rock shows correct random selection
3. make sure clicking on any item shows correct random selection
4. write function that determines win loss or draw
5. call ^ function on results page
