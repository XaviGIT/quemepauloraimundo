const Sentence = () => {
    const answers = [
        "Infelizmente o senhor não tem página no LinkedIn.",
        "Uma vizinha conta que foi padeiro quando era mais novo.",
        "Diz que é um beto da linha, morava no clube Estoril Praia!",
        "Desconfiamos que é o Jerónimo com umas plásticas. Alguém já os viu juntos? Nunca!"
      ];

      const random = (until: number) => {
        // const date = new Date();
        // return (date.getFullYear() * date.getDate() * (date.getMonth() + 1)) % answers.length;
        return Math.floor(Math.random()*until);
      }


      const selected = answers[random(answers.length)];


    return (
        <p class="text-2xl">{selected}</p>
    )
}

export default Sentence;