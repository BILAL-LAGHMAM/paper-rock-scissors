import React, { useState, useEffect } from 'react';

function Clock() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const localYear = currentDateTime.getFullYear();
    const localMonth = currentDateTime.getMonth() + 1;
    const localDay = currentDateTime.getDate();
    const localHours = currentDateTime.getHours();
    const localMinutes = currentDateTime.getMinutes();
    const localSeconds = currentDateTime.getSeconds();

    return (
        <div style={{height:"90vh", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <p style={{fontSize:"70px"}}>
                Date: {localYear === 2024 ? localYear - 2 : localYear}-{localMonth}-{localDay}
            </p>
            <p style={{fontSize:"70px"}}>
                Time: {localHours}:{localMinutes}:{localSeconds}
            </p>
        </div>
    );
}

export default Clock;
