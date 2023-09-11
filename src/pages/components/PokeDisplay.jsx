import Image from "next/image";
import useThemeStore from "@/stores/themeStore";
import usePokemonStore from "@/stores/pokemonStore";

export default function PokeDisplay(params) {
  const responseData = usePokemonStore((state) => state.responseData); // Getting the data from the store
  const { theme } = useThemeStore();

  if (responseData == null) {
    return <></>;
  } else {
    return (
      <div
        className="card lg:card-side bg-base-100 shadow-xl max-w-md max-h-96 m-auto mt-5 mb-10"
        data-theme={theme}
      >
          <Image
            src={responseData.sprites.front_default}
            alt="pokemon_img"
            width={170}
            height={100}
          />
        <div className="card-body">
          <h2 className="card-title">{responseData.name} </h2>
          <div>
            <p>{responseData.stats[0].stat.name} = {responseData.stats[0].base_stat}</p>
          </div>
          <div>
            <p>{responseData.stats[1].stat.name} = {responseData.stats[1].base_stat}</p>
          </div>
          <div>
            <p>{responseData.stats[2].stat.name} = {responseData.stats[2].base_stat}</p>
          </div>
        </div>
      </div>
    );
  }
}
