import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([2, 1, 4, 0]);
numberCollection.sort();
const chars = new CharactersCollection('aXYb');
const ll = new LinkedList();
ll.add(11);
ll.add(9);
ll.add(2);
ll.add(6);
ll.sort();
ll.print();
