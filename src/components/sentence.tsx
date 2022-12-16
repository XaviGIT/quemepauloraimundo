const Sentence = () => {
    const answers = [
        "Infelizmente o senhor não tem página no LinkedIn.",
        "Uma vizinha conta que foi padeiro quando era mais novo.",
        "Diz que foi um operário da linha, nascido e criado no clube Estoril Praia!",
        "Desconfiamos que é o Jerónimo com umas plásticas. Alguém já os viu juntos? Nunca!",
        "É mais um português que ganha o salário mínimo. Pelo menos teve direito ao cheque do Costa..",
      ];

      const random = (until: number) => {
        // const date = new Date();
        // return (date.getFullYear() * date.getDate() * (date.getMonth() + 1)) % answers.length;
        return Math.floor(Math.random()*until);
      }


      const selected = answers[random(answers.length)];


    return (
        <p className="text-2xl">{selected}</p>
    )
}

export default Sentence;