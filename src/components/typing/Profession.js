import TypeIt from "typeit-react";

import { useEffect, useState } from "react";

export default function Name() {
  const [finishedTimeout, setFinishedTimeout] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setFinishedTimeout(true);
    }, 1000);

    return () => clearTimeout(id);
  }, []);

  return (
    <>
      {finishedTimeout && (
        <TypeIt
          options={{
            speed: 120,
            loop: true,
            waitUntilVisible: false,
            lifeLike: true,
          }}
          getBeforeInit={(instance) => {
            instance
              .type("Web Fullstack")
              .pause(750)
              .delete()
              .pause(600)
              .type("Node.Js")
              .pause(500)
              .delete()
              .pause(600)
              .type("React.Js")
              .pause(500)
              .delete()
              .pause(600)
              .type("Express.Js")
              .pause(500)
              .delete()
              .pause(600)
              .type("Styled Components")
              .pause(500)
              .delete()
              .pause(600)
              .type("Git")
              .pause(500)
              .delete()
              .pause(600)
              .type("Scrum");

            return instance;
          }}
        />
      )}
    </>
  );
}
