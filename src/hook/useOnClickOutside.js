import React, { useEffect } from 'react';

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      // current.contains(event.target)는 현재 이벤트를 실행한 element가 Ref.current에 포함이 되지 않으면 false, 포함되거나 동일하다면 true입니다.
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      // console.log(listener);
    };
  }, [ref, handler]);

  return <div>useOnClickOutside</div>;
}

export default useOnClickOutside;
