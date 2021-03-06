import React from "react";
import { List, Avatar } from "antd";
import Wallet from "./Wallet";
import NewOrder from "./NewOrder";

export default function SideBar({
  tokens,
  setSelectedToken,
  selectedToken,
  deposit,
  balance,
  withdraw,
  createLimitOrder,
  createMarketOrder,
}) {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={tokens}
        renderItem={(item) => (
          <List.Item onClick={() => setSelectedToken(item)}>
            <List.Item.Meta
              style={{
                color: "#fff",
              }}
              title={`${item}/DAI`}
            />
          </List.Item>
        )}
      />
      <Wallet
        walletBalance={balance.tokenWallet}
        contractBalance={balance.tokenDex}
        selectedToken={selectedToken}
        deposit={deposit}
        withdraw={withdraw}
      ></Wallet>
      {selectedToken !== "DAI" ? (
        <NewOrder
          createLimitOrder={createLimitOrder}
          createMarketOrder={createMarketOrder}
        ></NewOrder>
      ) : null}
    </div>
  );
}
