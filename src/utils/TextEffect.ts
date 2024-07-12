export default function textEffect(strings: any) {
  const resolver = {
    resolve: function resolve(options: any, callback: any) {
      // The string to resolve
      const resolveString = options.resolveString || options.element.getAttribute(options.htmlAttr);
      const element = options.element;
      const combinedOptions = Object.assign({}, options, { resolveString: resolveString, element: element });

      function getRandomInteger(min: any, max: any) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      function randomCharacter(characters: any) {
        return characters[getRandomInteger(0, characters.length - 1)];
      };

      function doRandomiserEffect(options: any, callback: any) {
        const characters = options.characters;
        const element = options.element;
        const partialString = options.partialString;

        let iterations = options.iterations;

        setTimeout(() => {
          if (iterations >= 0) {
            const nextOptions = Object.assign({}, options, { iterations: iterations - 1 });

            // Ensures partialString without the random character as the final state.
            if (iterations === 0) {
              element.textContent = partialString;
            } else {
              // Replaces the last character of partialString with a random character
              element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
            }

            doRandomiserEffect(nextOptions, callback)
          } else if (typeof callback === "function") {
            callback();
          }
        }, options.timeout);
      };

      function doResolverEffect(options: any, callback: any) {
        const resolveString = options.resolveString;
        // const characters = options.characters;
        const offset = options.offset;
        const partialString = resolveString.substring(0, offset);
        const combinedOptions = Object.assign({}, options, { partialString: partialString });

        doRandomiserEffect(combinedOptions, () => {
          const nextOptions = Object.assign({}, options, { offset: offset + 1 });

          if (offset <= resolveString.length) {
            doResolverEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        });
      };

      doResolverEffect(combinedOptions, callback);
    }
  }

  let counter = 0;

  const options = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 5,
    // Number of random characters to show
    iterations: 10,
    // Random characters to pick from
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'],
    // String to resolve
    resolveString: strings[counter].string,
    // The element
    element: document.querySelector(`[${strings[counter].htmlAttr}]`),
    // Html attribute name
    htmlAttr: strings[counter].htmlAttr,
  }

  // Callback function when resolve completes
  function callback() {
    setTimeout(() => {
      counter++;

      if (counter < strings.length) {
        let nextOptions = Object.assign(
          {},
          options,
          {
            resolveString: strings[counter].string,
            element: document.querySelector(`[${strings[counter].htmlAttr}]`),
            htmlAttr: strings[counter].htmlAttr
          }
        );
        resolver.resolve(nextOptions, callback);
      }

    }, 1000);
  }

  resolver.resolve(options, callback);
}