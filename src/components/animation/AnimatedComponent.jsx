

const AnimatedComponent = ({ children, animationType, dataAosDuration, dataAosDelay }) => {
  return (
    <div data-aos={animationType} data-aos-duration={dataAosDuration || ""} data-aos-delay={dataAosDelay || ""} >
      {children}
    </div>
  );
};

export default AnimatedComponent;
