import { useEffect, useState } from 'react';
import { ScreenSize } from '../../constants/screen';

const useDetectMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    const checkIfMobile = () => {
        setIsMobile(window.innerWidth < ScreenSize.MD);
    }

    useEffect(() => {
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        }
    });

    return isMobile;
}

export default useDetectMobile;