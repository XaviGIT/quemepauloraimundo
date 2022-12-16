const Sentence = () => {
    const answers = [
        "Infelizmente o senhor não tem página no LinkedIn. Nem Facebook, Nem Tik Tok. Isso seria apoiar o capitalismo!",
        "Uma vizinha conta que foi padeiro quando era mais novo.",
        "Diz que foi um operário da linha, nascido e criado no clube Estoril Praia!",
        "Desconfiamos que é o Jerónimo com umas plásticas. Alguém já os viu juntos? Nunca! E o discurso é o mesmo!",
        "É mais um português que ganha o salário mínimo. Pelo menos teve direito ao cheque do Costa..",
      ];

      const random = (until: number) => {
        return Math.floor(Math.random()*until);
      }


      const selected = answers[random(answers.length)];


    return (
        <p className="text-2xl">{selected}</p>
    )
}

export default Sentence;