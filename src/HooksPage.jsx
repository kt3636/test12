import React, { useState, useEffect } from "react";

export default function CustomerPage(props) {
  const [allowNext, setAllowNext] = useState(false);
  const [sampleText, setSampleText] = useState("");
  const [sampleText1, setSampleText1] = useState("");

  useEffect(() => {
    moveNextPage();
  }, [allowNext]);

  useEffect(() => {
    test();
  }, [sampleText && sampleText1]);

  function moveNextPage() {
    if (allowNext) {
      console.log({ allowNext, allowNext });
    }
  }

  function test() {
    console.log({ sampleText, sampleText1 });
  }

  return (
    <div>
      <p>Customer Page</p>
      <button onClick={() => setAllowNext(true)}>Next</button>
      <button className="m-3" onClick={() => setSampleText("123")}>
        Update Text
      </button>
      <button className="m-3" onClick={() => setSampleText1("1234")}>
        Update Text1
      </button>
      <div>
        The state is {sampleText}, {sampleText1}{" "}
      </div>
    </div>
  );
}

// export default CustomerPage;
