import usePokemonStore from "@/stores/pokemonStore";
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

export default function ButtonSearch(params) {
  const searchTerm = usePokemonStore((state) => state.searchTerm);
  const setSearchTerm = usePokemonStore((state) => state.setSearchTerm);
  const setResponseData = usePokemonStore((state) => state.setResponseData);

  function searchPokemon() {
    let temp = document.getElementById("pokename").value; //Validating that theres always lowercase value
    temp = temp.toLowerCase();
    setSearchTerm(temp);// First I get the name
    P.getPokemonByName(temp) // with Promise
    .then((response) => {
      console.log(response);
      setResponseData(response);
    })
    .catch((error) => {
      console.log("There was an ERROR: ", error);
    });
  }

  return (
    <>
      <li>
        <label htmlFor="pokename">Search by name</label>
        <input
          id="pokename"
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
      </li>
      <li>
        <button className="m-auto mt-5" onClick={searchPokemon}>Search</button>
      </li>
    </>
  );
}
