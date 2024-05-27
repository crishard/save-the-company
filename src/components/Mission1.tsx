import { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/theme/material.css';

export const Mission1 = () => {
  const [code, setCode] = useState(`
  #include <stdio.h>
  int main() {
      
      int idade = "25";  
      float preço_do_produto;  
      char nome = "John";  
  
      int idade_corrigida = 25;

      char nome_corrigido[] = "John";
  
      return 0;
  }
  `);

  return (
    <section>
      <div>
        <h2>Sua primeira missão para salvar a empresa é sobre declaração de variáveis.</h2>

        <p>Declarar uma variável significa informar ao computador que reserve um espaço na memória para armazenar um determinado tipo de dado e que este espaço será identificado por um nome.</p>
      </div>

      <p>Em C, antes de usar uma variável, você precisa declará-la, especificando o tipo de dados que ela irá armazenar.</p>
      <div>
        <h3>Exemplo</h3>
        <p>
          <code>
            int main()
          </code>
          <br />
          int numero;  // Variável do tipo inteiro <br />
          float decimal;  // Variável do tipo ponto flutuante (número com casas decimais) <br />
          char caractere; // Variável do tipo caractere (letra ou símbolo) <br />
          <br />

        // Atribuindo valores às variáveis
          numero = 10; <br />
          decimal = 3.14; <br />
          caractere = 'A'; br

        </p>
      </div>

      <div>
        <h2>O hacker que invadiu a empresa se utilizou de um erro de códio no código fonte da empresa, o seu dever é detect-alo e corrigi-lo</h2>

        <div>
          <h2>Editor de Código</h2>
          <CodeMirror
            value={code}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
            options={{
              lineNumbers: true,
              mode: 'clike',
              theme: 'material'
            }}
          />

        </div>
      </div>

    </section>
  )
}
