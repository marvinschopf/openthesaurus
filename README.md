# openthesaurus 📚
Node wrapper around the API of **[OpenThesaurus](https://www.openthesaurus.de/)**.

## Installation
Using `npm`:
```bash
npm install openthesaurus
```

Using `yarn`:
```bash
yarn add openthesaurus
```

## Usage
The following is a simple example of the single function, `get(word, [options])`.

The individual values returned by the function are specified in the Types and can be [viewed in the source code](https://github.com/marvinschopf/openthesaurus/blob/main/index.d.ts).

```javascript
const openthesaurus = require("openthesaurus")

openthesaurus.get("laufen").then((response) => {
    console.log(response)
});
```
The above example returns the following object:
```javascript
{
  copyright: 'Copyright (C) 2019 Daniel Naber (www.danielnaber.de)',
  warning: 'ACHTUNG: Bitte vor ernsthafter Nutzung feedback@openthesaurus.de kontaktieren, um bei API-Änderungen informiert zu werden',
  license: 'Creative Commons Attribution-ShareAlike 4.0 or GNU LESSER GENERAL PUBLIC LICENSE Version 2.1',
  source: 'https://www.openthesaurus.de',
  synsets: [
    { id: 4569, categories: [], terms: [Array] },
    { id: 9481, categories: [], terms: [Array] },
    { id: 14819, categories: [], terms: [Array] },
    { id: 19046, categories: [], terms: [Array] },
    { id: 7455, categories: [], terms: [Array] },
    { id: 30928, categories: [], terms: [Array] },
    { id: 2857, categories: [], terms: [Array] },
    { id: 19422, categories: [], terms: [Array] },
    { id: 33993, categories: [], terms: [Array] },
    { id: 41440, categories: [], terms: [Array] },
    { id: 43175, categories: [], terms: [Array] },
    { id: 28260, categories: [], terms: [Array] }
  ],
  similarTerms: [
    { term: '(auf jemanden) laufen', distance: 0 },
    { term: '(irgendwie) laufen (es)', distance: 0 },
    { term: 'laufen (es)', distance: 0 },
    { term: 'laufend', distance: 1 },
    { term: 'Launen', distance: 1 }
  ],
  baseforms: [ 'Lauf' ]
}
```

## License
**Apache 2.0**  
Copyright (c) 2021 Marvin Schopf  

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at  

    http://www.apache.org/licenses/LICENSE-2.0  

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.  