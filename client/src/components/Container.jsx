import { utils } from "ethers";
import React, { useEffect } from "react";

export default function Container({ provider, contracts, accounts }) {
  useEffect(() => {
    const fetchTokens = async () => {
      const dex = contracts.dex;
      let tokens = await dex.getTokens();
      tokens = tokens.map((_item) => utils.toUtf8String(_item.ticker));
      console.log(tokens);
    };

    fetchTokens();
  }, []);

  return <div>Container</div>;
}
