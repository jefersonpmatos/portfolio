import TypeIt from "typeit-react";

export default function Name() {
  return (
    <>
      <TypeIt
        options={{
          loop: true,
          lifeLike: true,
        }}
        getBeforeInit={(instance) => {
          instance
            .type("Desenvolvedor Web Fullstack")
            .pause(3000)
            .delete()
            .type("Javascript")
            .pause(1200)
            .delete()
            .type("React.Js")
            .pause(1200)
            .delete()
            .type("Vue.Js")
            .pause(1200)
            .delete()
            .type("Node.Js")
            .pause(1200)
            .delete()
            .type("Git")
            .pause(1200)
            .delete()
            .type("Scrum");
          return instance;
        }}
      />
    </>
  );
}
