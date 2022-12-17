const Sentence = () => {
    const answers = [
        "Infelizmente o senhor não tem página no LinkedIn. Nem Facebook, Nem Tik Tok. Isso seria apoiar o capitalismo!",
        "Uma vizinha conta que foi padeiro quando era mais novo.",
        "Diz que foi um operário da linha, nascido e criado no clube Estoril Praia!",
        "Desconfiamos que é o Jerónimo com umas plásticas. Alguém já os viu juntos? Nunca! E o discurso é o mesmo!",
        "É mais um português que ganha o salário mínimo. Pelo menos teve direito ao cheque do Costa..",
        "Tem 3 filhos, Lenin, Che e Cunhal.",
        "Antes de ser eleito líder do partido, nunca foi visto de foice na mão.",
        "Apesar de ter apenas 46 anos, é uma alma pré-histórica!",
        "Defende a subida do salário mínimo para 850 euros. Pudera, os 730 que ganha não dão para comprar charutos cubanos..",
        "Fez o 5º e o 6º ano com a telescola. Um visionário, solidário com as crianças da pandemia.",
        "Já alguém reparou como é parecido com o sr. da \"Informação Dramática?\"?!"
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