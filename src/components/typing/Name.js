import TypeIt from "typeit-react";

export default function Name() {
  return (
    <TypeIt
      options={{
        waitUntilVisible: false,
        lifeLike: true,
        afterComplete: function (instance) {
          instance.destroy();
        },
      }}
      getBeforeInit={(instance) => {
        instance
          .type("Jefesron")
          .pause(750)
          .delete(4)
          .pause(500)
          .type("rson ")
          .pause(700)
          .type("P. Matos")
          .is("completed");
        return instance;
      }}
    />
  );
}
