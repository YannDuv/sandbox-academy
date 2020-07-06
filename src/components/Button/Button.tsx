import React from "react";
import { LoggerService } from "../../utils/Logger.service";
import "./Button.css";

type IProps = {
  onClick: () => void;
  children: string;
  className?: string;
};

type IState = {
  counter: number;
};

function promise1(cb: (counter: number) => void) {
  return fetch("http://google.com")
    .then((response) => response.json())
    .then(({ newCounter }) => {
      cb(newCounter);
    })
}

function promise2() {
  return new Promise((resolve, reject) => {
    resolve("mon résultat");
  });
}

export const Button = ({ onClick, children, className }: IProps) => {
  const [counter, setCounter] = React.useState<number>(0);

  function handleClick() {
    onClick();
    setCounter(counter + 1);
  }

  React.useEffect(() => {
    Promise.all([promise1(setCounter), promise2()]).then(([result1, result2]) =>
      console.log("ok", result1, result2)
    ).catch((err) => {
      throw new Error(`mon erreur que je peux customiser ${err}`)
    });
    LoggerService.log("doing network fetch");
  }, []);

  return (
    <button className={`my-btn ${className}`} onClick={handleClick}>
      {children} {counter}
    </button>
  );
};

// export class Button extends React.Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }

//   shouldComponentUpdate(nextProps: IProps, nextState: IState) {
//     return nextState.counter !== this.state.counter;
//   }

//   handleClick() {
//     const { onClick } = this.props;
//     onClick();
//     this.setState((prevState) => ({ counter: prevState.counter + 1 }))
//   }

//   render() {
//     const { className, children } = this.props;
//     const { counter } = this.state;

//     LoggerService.log('coucou');

//     return (
//       <button
//         className={`my-btn ${className}`}
//         onClick={() => this.handleClick()}
//       >
//         {children} {counter}
//       </button>
//     );
//   }
// }
