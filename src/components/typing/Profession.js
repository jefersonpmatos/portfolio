import TypeIt from "typeit-react";

import { useEffect, useState } from "react";

export default function Name() {
  const [finishedTimeout, setFinishedTimeout] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setFinishedTimeout(true);
    }, 7600);

    return () => clearTimeout(id);
  }, []);

  return (
    <>
      {finishedTimeout && (
        <TypeIt
          options={{
            speed: 100,
            waitUntilVisible: false,
            lifeLike: true,
          }}
          getBeforeInit={(instance) => {
            instance
              .type("Desenvolvedor Web Fullstack")
              .pause(750)
              .delete()
              .pause(600)
              .type("Desenvolvedor frontend Jr")
              .pause(500)
              .type(".");
            return instance;
          }}
        />
      )}
    </>
  );
}
