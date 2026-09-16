import { useEffect, useRef, useState } from 'react';
import './loading.css';

const Loading = ({ loading, startVisible }) => {

  const [shouldRender, setShouldRender] = useState(loading);
  const [visible, setVisible] = useState(loading && startVisible);
  const prevLoading = useRef(loading);

  // Maneja entradas y salidas posteriores al montaje
  useEffect(() => {
    if (prevLoading.current === loading) return;
    prevLoading.current = loading;

    if (loading) {
      setShouldRender(true);
      setVisible(false);

      let raf2;
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setVisible(true));
      });

      return () => {
        cancelAnimationFrame(raf1);
        if (raf2) cancelAnimationFrame(raf2);
      };
    } else {
      setVisible(false);
      const timeout = setTimeout(() => setShouldRender(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  // Si la primera carga no es visible desde el inicio, forzamos el fade-in inicial
  useEffect(() => {
    if (loading && !startVisible) {
      let raf2;
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setVisible(true));
      });

      return () => {
        cancelAnimationFrame(raf1);
        if (raf2) cancelAnimationFrame(raf2);
      };
    }
  }, []); // solo en montaje

  if (!shouldRender) return null;

  return (
    <div
      className="loading"
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: visible ? '0.5s' : '1s',
      }}
    />
  );
};

export default Loading;
