import { useState } from 'react';
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from 'react-spring';
import st from './style.module.scss';

function Checkbox({ title, checked, onChange }) {
  const [isChecked, setIsChecked] = useState(checked || false);
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? '#61dafb' : '#fff',
    borderColor: isChecked ? '#61dafb' : '#fff',
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1],
  );

  // useEffect(() => {
  //   setIsChecked(checked);
  // }, [checked]);

  const handleChange = () => {
    if (onChange) {
      onChange(!isChecked);
    }
    setIsChecked(!isChecked);
  };

  return (
    <label className={st.label}>
      <input
        className={st.input}
        type="checkbox"
        onChange={handleChange}
      />
      <animated.svg
        style={checkboxAnimationStyle}
        className={`${st.checkbox} ${isChecked ? 'checkbox--active' : ''}`}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <animated.path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke="#fff"
          ref={(ref) => {
            if (ref) {
              setCheckmarkLength(ref.getTotalLength());
            }
          }}
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkAnimationStyle.x}
        />
      </animated.svg>
      {title}
    </label>
  );
}

export default Checkbox;
