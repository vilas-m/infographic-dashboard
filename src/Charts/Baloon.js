import React from 'react';

const Baloon = ({text}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
        }}>
            <div
             style={{
                borderRadius: "50%",
                width: 60,
                height: 60,
                background: "linear-gradient(132deg, rgba(28,21,114,1) 20%, rgba(212,42,147,1) 95%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 'bold',
                color: '#adb5bd'
              }}>{text}</div>
        </div>
    );
};

export default Baloon;