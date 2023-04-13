import axios from 'axios';
import {
    Move,
    PokeapiResponse,
} from '../interfaces/pokeapi-response.interface';

// export class Pokemon {
//     public id: number;
//     public name: string;

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }

// https://pokeapi.co/api/v2/pokemon/4

export class Pokemon {
    constructor(public readonly id: number, public name: string) {}

    get imageURL(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    public scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    public speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    public async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>(
            'https://pokeapi.co/api/v2/pokemon/4'
        );

        // const resp = await fetch('https://pokeapi.co/api/v2/pokemon/4');
        // const data = (await resp.json()) as PokeapiResponse;

        console.log(data.moves);

        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'Charmander');

console.log(charmander);
// console.log(charmander.imageURL);

// charmander.scream();
// charmander.speak();

// console.log(charmander.getMoves());
charmander.getMoves();
