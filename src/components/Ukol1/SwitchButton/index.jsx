import './style.css';

export const SwitchButton = ({ onSwitch, on}) => {
  return (
    <button 
    className={on ? "switch-button switch-button--on": "switch-button"}
    onClick={()=>onSwitch(!on)}>
      <i className="switch-icon" />
      <div className="button-label">{on ? "Vypnout" : "Zapnout"}</div>
    </button>
  );
};
