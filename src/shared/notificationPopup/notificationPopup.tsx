import { useEffect, useState } from 'react';
import './notificationPopup.css';
import Card from '../card/card';

interface NotificationPopupProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

function NotificationPopup({ message, isVisible, onClose, duration = 3000 }: NotificationPopupProps) {
    const [closing, setClosing] = useState(false);
    const buttonCloseTimeout = 300;

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            onClose();
            setClosing(false);
        }, buttonCloseTimeout);
    };

    useEffect(() => {
        if (isVisible && duration > 0 && !closing) {
            const timer = setTimeout(() => {
                handleClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [isVisible, closing, onClose, duration]);

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`notification-popup ${closing ? 'closing' : ''}`}>
            <Card>
                <div className="notification-content">
                    <span>{message}</span>
                    <button className="close-button" onClick={handleClose}>×</button>
                </div>
            </Card>
        </div>
    );
}

export default NotificationPopup;
