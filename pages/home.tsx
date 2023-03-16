import React from "react";

const PageHome = () => {
    return(
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-bl from-violet-900 to-teal-400">
        <div className="p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
          <div className="-mb-20 -translate-y-1/2 transform">
            <img src="https://o.remove.bg/downloads/645e26a4-8d7b-4555-b121-d650718ecdf7/medicos-removebg-preview.png" alt="Kobe Bryant" title="Kobe Bryant" className="mx-auto h-64" />
          </div>
          <div className="text-center">
          <h3 className="text-center text-4xl font-bold" style={{ color: '#086D75' }}>Kobe Bryant</h3>
            <span className="text-sm" style={{ color: '#086D75' }}>Shooting Guard</span>
          </div>
          <ul className="mt-16 mb-20 flex justify-center text-center text-2xl">
          <li className="flex flex-col" style={{ color: 'black' }}><span className="font-bold" style={{ color: '#086D75' }}>PTS</span> 25.00</li>
          <li className="mx-6 flex flex-col">
          <span className="font-bold" style={{ color: '#086D75' }}></span>
          <span className="font-bold" style={{ color: '#086D75' }}>AST</span> 
          <span style={{ color: 'black' }}>4.7</span>
          </li>

                <li className="flex flex-col">
        <span className="font-bold" style={{ color: '#086D75' }}>FG%</span> 
        <span style={{ color: 'black' }}>44.7</span>
        </li>

          </ul>
          <div className="text-center">
            <button className="rounded-xl bg-black px-24 py-2 text-white" >Elegir Jugador</button>
          </div>
        </div>
      </div>
    );
}

export default PageHome;
