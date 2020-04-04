import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Datasource from "./components/datasource/Datasource";
import './App.css';

const Pages = lazy(() => import('./components/pages'));

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      keyword: "",
      data: []
    };
  }

  //Data Fetch
  async componentDidMount() {
    //console.log("ComponentDidmount....");
    const url = "https://json-server-heroku-svoqwyfacm.now.sh/podcasts";
    //console.log(`Fetching data url : ${url}`);
    //console.log("Run DataFetch from setStateAsync");    
    this.setStateAsync({
      data: await Datasource(url),
      loading: false
    });
    //console.log(`Async ComponentDidmount lifecycle: ${JSON.stringify(this.state.data)}`);    
  }
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  // Search
  handleKeywordChange = (keyword) => {
    this.setState({ keyword: keyword });
  }

  render() {
    return ([
      <div className="App">
        {this.state.loading ? 
          (
            <div className="app-loading"></div>
          ) : 
          (
            <Router>              
              <Header onSearch={this.handleKeywordChange} />
              <Suspense fallback={<div className="loading">...</div>}>
                <Pages podcastgrid={this.state.data} keyword={this.state.keyword} isloading={this.state.loading}/>
              </Suspense>              
            </Router>
          )
        }
      </div>
    ]);
  }
}

export default App;
