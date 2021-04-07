let btn = document.getElementById('btn');
let quote = document.getElementById('h1');

let randomQuotes = [
    "Fools admire, but men of sense approve. - Alexander Pope (1688 - 1744)",
    "But when a young lady is to be a heroine, the perverseness of forty surrounding families cannot prevent her. Something must and will happen to throw a hero in her way. - Jane Austen (1775 - 1817)",
    "Give what you have. To someone, it may be better than you dare to think. - Henry Wadsworth Longfellow (1807 - 1882)",
    "Whenever you commend, add your reasons for doing so; it is this which distinguishes the approbation of a man of sense from the flattery of sycophants and admiration of fools. - Sir Richard Steele",
    "It's hard to be nostalgic when you can't remember anything. - Unknown",
    "I have a rock garden. Last week three of them died. - Richard Diran",
    "No man is justified in doing evil on the ground of expediency. - Theodore Roosevelt (1858 - 1919)",
    "My theology, briefly, is that the universe was dictated but not signed. - Christopher Morley (1890 - 1957)",
    "We judge ourselves by what we feel capable of doing, while others judge us by what we have already done. - Henry Wadsworth Longfellow (1807 - 1882)",
    "Half the money I spend on advertising is wasted; the trouble is I don't know which half. - John Wanamaker (1838 - 1922)",
    "Though I am not naturally honest, I am so sometimes by chance. - William Shakespeare (1564 - 1616)",
    "Things are more like they are now than they ever were before. - Dwight D. Eisenhower (1890 - 1969)",
    "The trouble with lies was that once started, the fiction had to be continued, and it was hard always to be remembering details that you had made up upon the spur of the moment. - Elizabeth Aston",
    "Seasons change, so do cities. People come into your life and people go, but it's comforting to know: the ones you love are always in your heart and if you're very lucky, a plane ride away. - Michael Patrick King",
    "Education is a method whereby one acquires a higher grade of prejudices. - Laurence J. Peter (1919 - 1988)",
    "Every journalist has a novel in him, which is an excellent place for it. - Russel Lynes",
    "Not only is there no God, but try getting a plumber on weekends. - Woody Allen (1935 - )",
    "People demand freedom of speech as a compensation for the freedom of thought which they seldom use. - Soren Kierkegaard (1813 - 1855)",
    "Flowers never emit so sweet and strong a fragrance as before a storm. When a storm approaches thee, be as fragrant as a sweet-smelling flower. - Jean Paul Richter (1763 - 1825)"
];

btn.addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * randomQuotes.length);
    quote.textContent = randomQuotes[randomNumber];
})