const ProgressBar = ({progress}) => {

    const colors = [
      'rgb(255, 165, 0)',
      'rgb(255, 20, 147)',
      'rgb(154, 205, 50)',
      'rgb(75, 0, 130)',
      'rgb(255, 69, 0)',
      'rgb(0, 128, 128)',
      'rgb(218, 112, 214)',
      'rgb(255, 215, 0)'

    ]

    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    return (
      <div className="outer-bar">
        <div 
          className="inner-bar"
          style={{width: `${progress}%`, backgroundColor: randomColor}}
        ></div>
      </div>
    );
  }
  
  export default ProgressBar;