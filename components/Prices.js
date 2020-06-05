class Prices extends React.Component {
  state = {
    filteredValues: [],
    filterOptions: [8000, 9000, 10000],
    errorMessage: '',
  };

  onSelect = (e) => {
    const { bpiList } = this.props;
    const value = e.target.value;

    if (!value) {
      return this.setState({
        filteredValues: [],
        errorMessage: '',
      });
    }

    const filteredValues = bpiList.filter((item) => item <= Number(value));

    if (!filteredValues.length) {
      return this.setState({
        errorMessage: 'No matches',
      });
    }

    return this.setState({
      filteredValues,
      errorMessage: '',
    });
  };

  renderFilters = () => {
    const { bpiList } = this.props;
    const { filteredValues, errorMessage } = this.state;

    if (errorMessage) {
      return (
        <div className="alert alert-warning" role="alert">
          {errorMessage}
        </div>
      );
    }

    if (filteredValues.length) {
      return filteredValues.map((bpi) => (
        <li className="list-group-item" key={bpi}>
          {bpi}
        </li>
      ));
    }

    return bpiList.map((bpi) => (
      <li className="list-group-item" key={bpi}>
        {bpi}
      </li>
    ));
  };

  render() {
    const { filterOptions } = this.state;

    return (
      <div>
        <select
          className="custom-select"
          onChange={this.onSelect}
          style={{ marginBottom: '1rem' }}
        >
          <option value="all">All</option>
          {filterOptions.map((option) => (
            <option key={option} value={option}>{`Less then ${option}`}</option>
          ))}
        </select>
        {this.renderFilters()}
      </div>
    );
  }
}

export default Prices;
