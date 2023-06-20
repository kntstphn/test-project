import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON) => {
  const blocks = JSON.parse(JSON.stringify(blocksJSON));

  const assignIds = (b) => {
    // recursion assign id's for each blocks
    b.forEach((block) => {
      block.id = uuid();

      if (block.innerBlocks?.length) {
        assignIds(block.innerBlocks);
      }
    });
  };

  assignIds(blocks);
  return blocks;
};
