import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState(0);
  const [percent2, setPercent2] = useState(0);
  function handleReset() {
    setBill("");
    setPercent(0);
    setPercent2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percent={percent} onSelectPercent={setPercent}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percent={percent2} onSelectPercent={setPercent2}>
        How did your friend liked service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <OutPut bill={bill} percent={percent} percent2={percent2} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <p>
        How much was the bill? $
        {
          <input
            type="text"
            placeholder="Bill value"
            value={bill}
            onChange={(e) => onSetBill(Number(e.target.value))}
          />
        }
      </p>
    </div>
  );
}
function SelectPercentage({ children, percent, onSelectPercent }) {
  return (
    <div>
      <p>
        {children}
        {
          <select
            value={percent}
            onChange={(e) => onSelectPercent(Number(e.target.value))}
          >
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>It was ok (5%)</option>
            <option value={10}>DissatisfiedIt was good (10%)</option>
            <option value={20}>Amazing! (20%)</option>
          </select>
        }
      </p>
    </div>
  );
}
function OutPut({ bill, percent, percent2 }) {
  return (
    <div>
      <h3>
        You pay $ {bill + bill * 0.01 * (percent + percent2) * 0.5} (${bill}+$
        {bill * 0.01 * (percent + percent2) * 0.5} tip)
      </h3>
    </div>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
