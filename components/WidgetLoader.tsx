"use client"
import { useEffect } from 'react';

const WIDGETS_TOKEN = 'ae11cb31-6e34-4173-9d40-bb0fbab4c995'; // Substitua pelo seu token

const WidgetLoader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://widget.planne.com.br/widget.js?token=${WIDGETS_TOKEN}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default WidgetLoader;

