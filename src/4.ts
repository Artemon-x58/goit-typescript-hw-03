class Key {
  private signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private door: boolean = false;
  private key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }
  comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
  }

  isDoorOpen(): boolean {
    return this.door;
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  comeIn(person: Person): void {
    if (this.isDoorOpen()) {
      this.tenants.push(person);
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
