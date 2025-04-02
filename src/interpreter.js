// Function to translate KannadaLang (MagaLang) to JavaScript
export const translateToJS = (kannadaCode) => {
  let jsCode = kannadaCode

    // Remove program start ("hi maga") and end ("bye maga") keywords
    .replace(/hi maga/g, "")
    .replace(/bye maga/g, "")

    // Convert variable declaration: "maga idu x = 10;" → "let x = 10;"
    .replace(/maga idu (\w+) = (.+?);/g, "let $1 = $2;")

    // Convert variable reassignments (without redeclaring 'let' inside loops)
    .replace(/(\w+) = (.+?);/g, "$1 = $2;")

    // Convert print statement: "hel maga 'Hello';" → "console.log('Hello');"
    .replace(/hel maga (.+?);/g, "console.log($1);")

    // Convert if condition: "nod maga (x > 5) adre" → "if (x > 5)"
    .replace(/nod maga \((.+?)\) adre/g, "if ($1)")

    // Convert else statement: "illa andre" → "else"
    .replace(/illa andre/g, "else")

    // Convert while loop: "maga (x > 0) ago tanka" → "while (x > 0)"
    .replace(/maga \((.+?)\) ago tanka/g, "while ($1)");

  // Debugging: Print the translated JavaScript code in the console
  //console.log("Translated JavaScript:\n", jsCode);

  return jsCode;
};
