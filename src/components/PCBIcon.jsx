const PCBIcon = ({ size = 40, color = "#27ae60" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100"
      style={{ marginRight: '10px', verticalAlign: 'middle' }}
    >
      {/* Placă PCB verde */}
      <rect x="10" y="10" width="80" height="80" rx="5" ry="5" fill={color} />
      
      {/* Linii de circuit (albe) */}
      <rect x="20" y="25" width="60" height="4" fill="white" />
      <rect x="20" y="40" width="60" height="4" fill="white" />
      <rect x="20" y="55" width="60" height="4" fill="white" />
      <rect x="20" y="70" width="60" height="4" fill="white" />
      
      {/* Pini/contacte */}
      <circle cx="25" cy="25" r="3" fill="#f1c40f" />
      <circle cx="25" cy="40" r="3" fill="#f1c40f" />
      <circle cx="25" cy="55" r="3" fill="#f1c40f" />
      <circle cx="25" cy="70" r="3" fill="#f1c40f" />
      
      <circle cx="75" cy="25" r="3" fill="#f1c40f" />
      <circle cx="75" cy="40" r="3" fill="#f1c40f" />
      <circle cx="75" cy="55" r="3" fill="#f1c40f" />
      <circle cx="75" cy="70" r="3" fill="#f1c40f" />
      
      {/* CPU/CHIP central */}
      <rect x="40" y="40" width="20" height="20" fill="#8e44ad" rx="2" ry="2" />
    </svg>
  );
};

export default PCBIcon;
