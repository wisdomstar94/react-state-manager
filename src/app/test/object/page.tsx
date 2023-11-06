"use client"

import { useStateManager } from "@/hooks/use-state-manager/use-state-manager.hook";
import { useEffect } from "react";

interface Item {
  name: string;
  value: string;
}

export default function Page() {
  const items = useStateManager<Item[]>();
  const value = useStateManager('');

  useEffect(() => {
    console.log('@items.statePrev', items.statePrev);
    console.log('@items.state', items.state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.state]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            items.setState([
              { name: '홍길동', value: '1' },
              { name: '고길동', value: '2' },
              { name: '송길동', value: '3' },
            ]);

            if (value.state === '1') {
              items.setState([]);
            }
            console.log('@2', items.sync().statePrev);
            console.log('@2', items.sync().state);
          }}>바꾸기</button>
        <input type="text" value={value.state} onChange={e => value.setState(e.target.value)} />
      </div>
    </>
  );
}