import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from 'react-infinite-scroller';
import Papa from 'papaparse';

class scroller extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getCsvData();
    }

    fetchCsv() {
        return fetch('/data/data.csv').then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                return decoder.decode(result.value);
            });
        });
    }

    getData(result) {
        this.setState({data: result.data});
    }

    async getCsvData() {
        let csvData = await this.fetchCsv();

        Papa.parse(csvData, {
            complete: this.getData
        });
    }

    render() {
      return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={false}
        >
            {data}
        </InfiniteScroll>
        );
    }
  }
   
ReactDOM.render(<scroller />, document.getElementById('photoSec'));