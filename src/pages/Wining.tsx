import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';

const Wining: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <Fade cascade damping={0.2} duration={1000} triggerOnce>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-500 mb-4">Parabéns! Você venceu!</h1>
          <p className="text-lg text-gray-700">Você é o campeão!</p>
        </div>
      </Fade>
      <Fade delay={500} triggerOnce>
        <Link to="/" className="mt-8 text-lg text-blue-500 hover:underline">Voltar para a página inicial</Link>
      </Fade>
    </div>
  );
};

export default Wining;
