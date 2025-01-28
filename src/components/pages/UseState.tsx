import DashboardPage from "@/layouts/DashboardPage"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

const UseState = () => {
  const classBasedCode = `
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default Counter;
  `

  const functionalCode = `
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
  `
  return (
    <DashboardPage>
      <h1 className="text-4xl font-normal m-5">React useState Hook</h1>
      <hr />
      <div className="m-5">
        <p>
          We can understand UseState as a way that React use to remeber or store anything .It's like a storage box that
          holds a piece of information for your app and you can update it when needed.
        </p>
        <p>States are just like a variable which holds the data which you want to track across your application .</p>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-2xl">Why we actually need UseState ?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We use useState to create and manage states, enabling our components to be more dynamic and interactive.
              It allows functional components to maintain and update state, making them "stateful."
            </p>
            <p>
              Previously only class based components can manage states , functional components are not able to manage
              state this is when hooks are intoduced.
            </p>
            <p className="bg-gray-300 p-3 rounded-md">
              Lets Understand different approach of state management in class based component and functional component by
              a counter app code.{" "}
            </p>
            <div className="py-4 space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Class Based Approach</CardTitle>
                </CardHeader>
                <SyntaxHighlighter>{classBasedCode}</SyntaxHighlighter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Functional Approach</CardTitle>
                </CardHeader>
                <SyntaxHighlighter>{functionalCode}</SyntaxHighlighter>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardPage>
  )
}

export default UseState
