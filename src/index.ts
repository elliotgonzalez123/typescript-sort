import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numberCollection = new NumbersCollection([10, 3, -4, 2]);
const charCollection = new CharactersCollection('xYZab');
const sorter = new Sorter(charCollection);
sorter.sort();
console.log(charCollection.data);
