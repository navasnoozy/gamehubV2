import { GameType } from "@/entities/GameType";
import { DataList, SimpleGrid } from "@chakra-ui/react";
import GameMetaData from "./GameMetaData";
import MetaCriticScore from "./MetaCriticScore";

interface PropsType {
  game: GameType;
}

const GameAttributes = ({ game }: PropsType) => {
  return (
    <SimpleGrid columns={2} as='dl' gap={6}>
      <DataList.Root>
        <DataList.Item>
          <GameMetaData heading="Platform">
            {game.parent_platforms.map(({ platform }) => (
              <DataList.ItemLabel key={platform.id}>
                {platform.name}
              </DataList.ItemLabel>
            ))}
          </GameMetaData>
        </DataList.Item>
      </DataList.Root>

      <DataList.Root>
        <DataList.Item>
          <GameMetaData heading="MetaScore">
            <MetaCriticScore metacritic={game.metacritic}></MetaCriticScore>
          </GameMetaData>
        </DataList.Item>
      </DataList.Root>

      <DataList.Root>
        <DataList.Item>
          <GameMetaData heading="Genres">
            {game.genres.map((genres) => (
              <DataList.ItemLabel key={genres.id}>
                {genres.name}
              </DataList.ItemLabel>
            ))}
          </GameMetaData>
        </DataList.Item>
      </DataList.Root>

      <DataList.Root>
        <DataList.Item>
          <GameMetaData heading="Publisher">
            {game.publishers.map((publisher) => (
              <DataList.ItemLabel key={publisher.id}>
                {publisher.name}
              </DataList.ItemLabel>
            ))}
          </GameMetaData>
        </DataList.Item>
      </DataList.Root>
    </SimpleGrid>
  );
};

export default GameAttributes;
