import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const GoogleTranslator = () => {
  const cookies = new Cookies();
  const googtrans = cookies.get("googtrans");
  const languageCode = googtrans ? googtrans.split('/')[2] : 'en'; // Valor predeterminado 'en' si no se encuentra la cookie
  
  const [code, setCode] = useState(languageCode);

  const setGoogleTrans = () => {
    cookies.remove("googtrans", {
      domain: window.location.hostname,
      path: "/"
    });
    cookies.set("googtrans", `/en/${code}`, {
      domain: window.location.hostname,
      path: "/"
    });
    window.location.reload();
  };

  useEffect(() => {
    setGoogleTrans();
  }, [code]);

  return (
    <button
      onClick={() => setCode(code === 'en' ? 'tl' : 'en')}
    >
      Change language
    </button>
  );
};

export default GoogleTranslator;
