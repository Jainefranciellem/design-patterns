import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Lucas', age: 22 });
myDatabaseClassic.add({ name: 'Maria', age: 23 });
myDatabaseClassic.add({ name: 'João', age: 24 });

export { myDatabaseClassic };
