"use client"

import { useStateManager } from "@/hooks/use-state-manager/use-state-manager.hook";

export default function Page() {
  const number = useStateManager(0);
  const value = useStateManager('1');

  return (
    <>
      <div>
        { number.state }
      </div>
      <div>
        <button
          onClick={() => {
            // console.log('@1', number.state);
            if (value.state === '1') {
              number.setState((number.state ?? 0) + 1);
            } else {
              number.setState(55);
            }
            // console.log('@2', number.sync().state);
          }}>증가시키기</button>
        <input type="text" value={value.state} onChange={e => value.setState(e.target.value)} />
      </div>
    </>
  );
}