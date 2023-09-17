const quotes = [
  {
    quote: "He mocks proud mockers but gives grace to the humble.",
    author: "proverbs 3:34",
  },
  {
    quote:
      "Do not rebuke a mocker or he will hate you; rebuke a wise man and he will love you.",
    author: "proverbs 9:8",
  },
  {
    quote:
      "The wise in heart accept commands, but a chattering fool comes to ruin.",
    author: "proverbs 10:8",
  },
  {
    quote:
      "When pride comes, then comes disgrace, but with humility comes wisdom.",
    author: "proverbs 11:2",
  },
  {
    quote:
      "The sluggard craves and gets nothing, but the desires of the diligent are fully satisfied.",
    author: "proverbs 13:4",
  },
  {
    quote: "Even in laughter the heart may ache, and joy may end in grief.",
    author: "proverbs 14:13",
  },
  {
    quote:
      "All a man's ways seem innocent to him, but motives are weighed by the LORD.",
    author: "proverbs 16:2",
  },
  {
    quote:
      "In his heart a man plans his course, but the LORD determines his steps.",
    author: "proverbs 16:9",
  },
  {
    quote:
      ".The crucible for silver and the furnace for gold, but the LORD tests the heart.",
    author: "proverbs 17:3",
  },
  {
    quote: "e who answers before listening-- that is his folly and his shame.",
    author: "proverbs 18:13",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;