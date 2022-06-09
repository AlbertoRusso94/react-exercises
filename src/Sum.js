export function Sum({ numbers = [1, 2, 3, 4] }) {
  return (
    <div>
      <h1> {numbers.reduce((somma, i) => somma + i, 0)} </h1>
    </div>
  );
}

// Qual'ora la prop numbers non venga passata non verrà reindirizzato nulla ma
// possiamo settare di defautl la prop stessa come sopra riportato e far fare l'operzione
//all'interno del tag <h1>
